# Everest Immo — Site Web

Site vitrine haut de gamme pour **Everest Immo**, agence immobilière de prestige basée à Dakar, Sénégal. Vente et location d'appartements, duplex et villas dans les quartiers les plus prisés de Dakar.

---

## Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 16.2.7 | Framework React (App Router) |
| TypeScript | 5.x | Typage statique |
| Tailwind CSS | 4.x | Styles utilitaires |
| Framer Motion | 12.x | Animations UI, parallax |
| GSAP + ScrollTrigger | 3.x | Animations au scroll |
| next-themes | 0.4.x | Thème sombre / clair |
| Resend | 6.x | Envoi d'emails transactionnels |

---

## Structure du projet

```
everest-immo/
├── app/                          # Application Next.js
│   ├── public/
│   │   ├── everst-immo/          # Images des biens (1 dossier = 1 bien)
│   │   └── logo-evrest-v2.PNG    # Logo principal
│   └── src/
│       ├── app/
│       │   ├── page.tsx              # Accueil (parallax, catégories, biens)
│       │   ├── biens/
│       │   │   ├── page.tsx          # Catalogue filtrable
│       │   │   └── [slug]/
│       │   │       ├── page.tsx      # Fiche bien (SSG + SEO + JSON-LD)
│       │   │       └── PropertyDetail.tsx
│       │   ├── services/page.tsx
│       │   ├── agence/page.tsx
│       │   ├── contact/page.tsx
│       │   ├── cgu/page.tsx
│       │   ├── politique-confidentialite/page.tsx
│       │   ├── mentions-legales/page.tsx
│       │   ├── api/contact/route.ts  # Envoi email via Resend
│       │   ├── sitemap.ts            # Sitemap dynamique
│       │   └── robots.ts
│       ├── components/
│       │   ├── Navbar.tsx            # Navbar transparente / solide selon page
│       │   ├── Footer.tsx
│       │   ├── PropertyCard.tsx      # Carte bien animée
│       │   ├── ScrollReveal.tsx      # Wrapper animation scroll
│       │   ├── CookieBanner.tsx      # Bandeau RGPD + gestion consentement
│       │   └── Providers.tsx         # ThemeProvider
│       └── lib/
│           └── properties.ts         # Base de données des biens + formatPrice
├── design-system/                # Assets et tokens de design
├── CLAUDE.md                     # Instructions pour Claude Code
└── README.md
```

---

## Lancer le projet

```bash
cd app
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

---

## Variables d'environnement

Créer un fichier `app/.env.local` :

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Obtenir une clé sur [resend.com](https://resend.com). Le domaine `everest-immo.com` doit être vérifié dans le dashboard Resend pour que les emails s'envoient.

---

## Commandes disponibles

```bash
npm run dev      # Serveur de développement (Turbopack)
npm run build    # Build de production
npm run start    # Serveur de production local
npm run lint     # Vérification ESLint
```

---

## Gestion des biens

Tous les biens sont définis dans `app/src/lib/properties.ts`. Pour ajouter un bien :

1. Créer un dossier dans `app/public/everst-immo/NomDuBien/`
2. Y déposer les photos (JPEG recommandé)
3. Ajouter une entrée dans le tableau `properties` en utilisant la fonction `img()` :

```ts
image: img("NomDuBien", "photo.jpg"),
images: [
  img("NomDuBien", "photo.jpg"),
  img("NomDuBien", "photo (1).jpg"),
],
```

La fonction `img()` encode automatiquement les espaces et caractères spéciaux dans les noms de fichiers.

---

## Déploiement — Netlify

Le fichier `netlify.toml` est préconfiguré. Pour déployer :

1. Connecter le repo Git sur [app.netlify.com](https://app.netlify.com)
2. Répertoire de build : `app`
3. Commande : `npm run build`
4. Ajouter la variable d'environnement `RESEND_API_KEY` dans **Site settings → Environment variables**
5. Ajouter le domaine custom `everest-immo.com` dans **Domain management**

La redirection `vytimo.com → everest-immo.com` est gérée automatiquement par `netlify.toml` une fois `vytimo.com` ajouté comme domaine alias.

---

## SEO

- Métadonnées complètes sur toutes les pages (title, description, OpenGraph, Twitter Card)
- Sitemap dynamique : `everest-immo.com/sitemap.xml`
- Robots.txt : `everest-immo.com/robots.txt`
- **Schema.org JSON-LD** : `RealEstateAgent` (global) + `RealEstateListing` (chaque fiche bien)
- Pages biens pré-rendues en SSG (`generateStaticParams`)
- Vérification Google Search Console : remplacer `REMPLACER_PAR_VOTRE_CODE_GOOGLE_SEARCH_CONSOLE` dans `layout.tsx`

---

## Design system

| Élément | Valeur |
|---------|--------|
| Couleur or | `#CA8A04` |
| Fond sombre | `#1C1917` (ink-900) |
| Police titres | Cinzel 600/700 |
| Police corps | Josefin Sans 300/400/600 |
| Thèmes | Clair + Sombre (next-themes) |

---

## Contact

**Everest Immo**  
Malick Sy Médina, Dakar, Sénégal  
+221 77 643 14 90  
contact@everest-immo.com

Site réalisé par [Vytimo](https://vytimo.com)
