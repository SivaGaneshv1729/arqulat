# Redesign Plan: GitHub-Inspired Aesthetic for Arqulat

## Goal
To apply the technical, clean, and dark aesthetic of GitHub's homepage to Arqulat, while maintaining Arqulat's existing structure (Hero, Bento Grid, Services, etc.) and utilizing subtle, technical scroll animations.

## Typography & Colors
- **Background:** Solid dark `#0d1117` (GitHub Dark).
- **Cards/Surfaces:** Deep gray `#161b22` (GitHub Paper).
- **Borders:** Subtle gray `#30363d` (GitHub Border).
- **Text:** High-contrast white `#c9d1d9` for primary text, muted `#8b949e` for secondary text.
- **Accents:** Neon blue `#2f81f7` (Primary) and subtle purple/green highlights for technical effects.
- **Typography:** Shift towards crisp, clean system sans-serif fonts (like Inter or system-ui) and use monospaced fonts (`ui-monospace, SFMono-Regular`) for labels and eyebrows to give a developer-focused feel.

## Layout & Components

### 1. Global Styles (`index.css` & `muiTheme.js`)
- Remove the "Aurora" animated blurred background.
- Apply the solid GitHub dark background.
- Redefine MUI's theme palette to match the colors above.
- Change `MuiCard` and `.glass-card` styles from heavy glassmorphism to solid `#161b22` backgrounds with crisp `#30363d` 1px borders.

### 2. Navbar (`Navbar.jsx`)
- Make it dark and structured, removing the glowing blur. 
- Use GitHub's transparent hover effects for nav links and a solid white or subtle bordered button for primary actions.

### 3. Hero Section (`Hero.jsx`)
- Shift from a fluid, glowing design to a structured layout.
- Introduce technical visual elements: A subtle background grid, vertical connecting lines, or a code/terminal snippet graphic to give it an "engineering" feel.
- Keep the call to action clear with a high-contrast pill button.

### 4. Grid & Content Sections (`BentoGrid.jsx`, `Services.jsx`, `Projects.jsx`)
- Restyle all cards to use GitHub's clean border box model.
- Use "eyebrow" tags above headings (e.g. `[ ] Features`) using monospaced fonts and icons.
- Replace bouncy hover animations with crisp, immediate technical hovers (e.g., border color shift to `#8b949e` or slight background lighten).

### 5. Animations
- Utilize Framer Motion for "Subtle & Technical" animations.
- Instead of large floating elements, use precise scroll-triggered fade-ins (`opacity: 0` to `1`), short vertical slides (`y: 20` to `0`), and SVG line-drawing animations reminiscent of GitHub's globe and connecting lines.

## Next Steps
Once approved, I will sequentially edit:
1. `muiTheme.js` and `index.css`
2. `Navbar.jsx` and `Hero.jsx`
3. `BentoGrid.jsx` and `Services.jsx`
4. The remaining sections (`WhyArqulat.jsx`, `Projects.jsx`, `Stats.jsx`, `Team.jsx`, `CTA.jsx`, `Footer.jsx`)

