# Everest Immo — Contexte Projet

## Identité de la marque

**Nom :** Everest Immo
**Secteur :** Agence immobilière — positionnement haut de gamme / luxe
**Positionnement :** Excellence, ambition, dépassement — comme l'Everest, le sommet de l'immobilier
**Ton :** Élégant, confiant, sobre. Jamais tape-à-l'œil, toujours premium.

---

## Logo

- **Fichier :** `logo-evrest.jpeg`
- **Éléments :** Motif de toits stylisés en double chevron (évoque à la fois les sommets et l'immobilier)
- **Couleurs du logo :** Or/doré `#C9A84C` + Noir `#1A1A1A` sur fond blanc

---

## Design System

> Source of Truth : `design-system/everest-immo/MASTER.md`
> Pages spécifiques : `design-system/everest-immo/pages/[page].md`

### Palette de couleurs

| Rôle        | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| Primary     | `#1C1917` | Fond sombre, navbar, footer  |
| Secondary   | `#44403C` | Textes secondaires, cartes   |
| Gold / CTA  | `#CA8A04` | Boutons, accents, highlights |
| Background  | `#FAFAF9` | Fond principal (clair)       |
| Text        | `#0C0A09` | Corps de texte               |

**Or du logo (référence) :** `#C9A84C` — à utiliser pour les éléments qui reproduisent fidèlement le logo.

### Typographie

| Rôle    | Police        | Grammages        |
|---------|---------------|------------------|
| Titres  | **Cinzel**    | 400, 500, 600, 700 |
| Corps   | **Josefin Sans** | 300, 400, 500, 600, 700 |

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');
```

### Style visuel

**Style :** Liquid Glass + Exaggerated Minimalism
- Glassmorphism subtil sur les cartes (`backdrop-filter: blur`)
- Typographie oversized pour les titres héros (`clamp(3rem, 8vw, 10rem)`)
- Espaces négatifs généreux — le vide est un élément de design
- Animations fluides 400–600ms pour les effets premium, 150–300ms pour les micro-interactions
- Or comme seule couleur d'accent — ne jamais diluer avec d'autres couleurs vives

### Effets clés

```css
/* Glass card */
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(202, 138, 4, 0.2);
  border-radius: 16px;
}

/* Titre héros */
.hero-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(3rem, 8vw, 10rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

/* Accent or */
.gold-accent {
  color: #CA8A04;
  background: linear-gradient(135deg, #CA8A04, #C9A84C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Structure des pages prévues

| Page           | Statut    | Design override                          |
|----------------|-----------|------------------------------------------|
| Landing page   | À créer   | `design-system/everest-immo/pages/home.md` |
| Nos biens      | À créer   | `design-system/everest-immo/pages/listings.md` |
| Fiche bien     | À créer   | `design-system/everest-immo/pages/property.md` |
| À propos       | À créer   | `design-system/everest-immo/pages/about.md` |
| Contact        | À créer   | `design-system/everest-immo/pages/contact.md` |

### Pattern de landing page

**Ordre des sections :**
1. **Hero** — titre oversized, baseline, CTA principal + image immersive
2. **Services / Promesse** — 3 piliers (vente, achat, gestion)
3. **Biens en vedette** — cards glassmorphism avec photos
4. **Chiffres clés** — stats qui inspirent confiance (ex. : 500+ biens, 98% satisfaits)
5. **Témoignages clients**
6. **CTA final** — prise de contact / estimation gratuite
7. **Footer**

---

## Stack technique

**Défaut :** HTML + Tailwind CSS (pas de framework JS requis pour les pages statiques)
**Icons :** Lucide Icons ou Heroicons (SVG uniquement — jamais d'emojis)
**Images :** WebP, lazy loading, `srcset` responsive

---

## Règles de la marque (Brand Rules)

- **Or = exclusivité** — l'utiliser avec parcimonie pour qu'il garde sa valeur
- **Noir profond** sur fond clair = élégance sobre
- **Cinzel** pour tous les titres — jamais de police sans-serif générique pour les H1/H2
- **Jamais de couleurs vives** (rouge, vert vif, bleu électrique) — elles déclassent le positionnement
- **Photos** : uniquement des visuels haute qualité (pas de stock photo bas de gamme)
- **Animations** : fluides et lentes — le luxe ne se presse pas

---

## Anti-patterns à éviter absolument

- Images bas de gamme ou pixelisées
- Animations trop rapides (< 300ms pour les effets principaux)
- Couleurs d'accent multiples (or = seul accent)
- Emojis comme icônes
- Texte sans contraste suffisant (4.5:1 minimum)
- Boutons sans `cursor-pointer`
- Survol sans retour visuel
