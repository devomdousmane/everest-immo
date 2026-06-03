import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "contact@everest-immo.com";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY manquante dans les variables d'environnement.");
  return new Resend(key);
}

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, sujet, message } = await req.json();

    if (!nom || !email || !sujet || !message) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    const resend = getResend();

    const { error } = await resend.emails.send({
      from: "Everest Immo <formulaire@everest-immo.com>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Everest Immo] ${sujet} — ${nom}`,
      html: `
        <div style="font-family:'Josefin Sans',Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#FAFAF9;color:#0C0A09;">
          <div style="border-top:3px solid #CA8A04;padding-top:24px;margin-bottom:32px;">
            <h1 style="font-family:'Cinzel',Georgia,serif;font-size:22px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#1C1917;margin:0 0 4px;">
              Nouvelle demande de contact
            </h1>
            <p style="font-size:12px;color:#78716C;letter-spacing:1px;text-transform:uppercase;margin:0;">Everest Immo — Formulaire de contact</p>
          </div>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #D6D3D1;width:30%;color:#78716C;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Nom</td>
              <td style="padding:12px 0;border-bottom:1px solid #D6D3D1;font-size:14px;color:#1C1917;font-weight:600;">${nom}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #D6D3D1;color:#78716C;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Email</td>
              <td style="padding:12px 0;border-bottom:1px solid #D6D3D1;font-size:14px;"><a href="mailto:${email}" style="color:#CA8A04;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #D6D3D1;color:#78716C;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Téléphone</td>
              <td style="padding:12px 0;border-bottom:1px solid #D6D3D1;font-size:14px;color:#1C1917;">${telephone || "Non renseigné"}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #D6D3D1;color:#78716C;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Sujet</td>
              <td style="padding:12px 0;border-bottom:1px solid #D6D3D1;font-size:14px;color:#CA8A04;font-weight:600;">${sujet}</td>
            </tr>
          </table>

          <div style="margin-top:28px;">
            <p style="font-size:12px;color:#78716C;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">Message</p>
            <div style="background:#fff;border:1px solid #D6D3D1;border-left:3px solid #CA8A04;padding:20px;font-size:14px;line-height:1.7;color:#44403C;white-space:pre-wrap;">${message}</div>
          </div>

          <div style="margin-top:36px;padding-top:20px;border-top:1px solid #D6D3D1;font-size:11px;color:#A8A29E;text-align:center;">
            Everest Immo — Malick Sy Médina, Dakar, Sénégal — <a href="mailto:contact@everest-immo.com" style="color:#CA8A04;">contact@everest-immo.com</a>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Email de confirmation au client
    await resend.emails.send({
      from: "Everest Immo <contact@everest-immo.com>",
      to: email,
      subject: "Votre demande a bien été reçue — Everest Immo",
      html: `
        <div style="font-family:'Josefin Sans',Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#1C1917;color:#FAFAF9;">
          <div style="border-top:3px solid #CA8A04;padding-top:24px;margin-bottom:32px;">
            <h1 style="font-family:'Cinzel',Georgia,serif;font-size:20px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#FAFAF9;margin:0;">
              Merci, ${nom.split(" ")[0]}.
            </h1>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#D6D3D1;margin-bottom:20px;">
            Nous avons bien reçu votre demande concernant <strong style="color:#CA8A04;">${sujet}</strong>. Notre équipe vous contactera sous <strong>48 heures ouvrées</strong>.
          </p>
          <p style="font-size:14px;line-height:1.7;color:#D6D3D1;margin-bottom:32px;">
            En attendant, n'hésitez pas à consulter notre catalogue de biens ou à nous appeler directement au <a href="tel:+221776431490" style="color:#CA8A04;">+221 77 643 14 90</a>.
          </p>
          <div style="border-top:1px solid #44403C;padding-top:20px;font-size:11px;color:#78716C;text-align:center;">
            Everest Immo — L'immobilier d'exception — <a href="https://everest-immo.com" style="color:#CA8A04;">everest-immo.com</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
