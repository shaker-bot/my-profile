# Abhishek Mathews - Resume Website

A resume website built with Next.js, TypeScript, and Framer Motion, designed as
a mission-control console ("Control Plane") for a career in cloud infrastructure
and identity systems: Archivo compressed to its condensed width for display type,
IBM Plex Mono carrying all instrumentation, amber phosphor on deep console ink
(dark, default) and a drafting-paper light theme.

## Features

- **Console Backdrop**: Fixed blueprint grid, range rings, radar sweep, and film grain — pure CSS, no requests
- **System Graphics**: A self-drawing system topology (SYS.MAP) with a live auth path, HUD corner brackets, a portrait viewfinder with scan sweep, and rotating certification stamps
- **Scroll Telemetry**: The navbar registration bar doubles as a scroll progress gauge, and the experience log's timeline rail fills as you read
- **Purposeful Motion**: A power-on hero entrance, quiet scroll reveals, a specialties ticker, and hover micro-interactions — all frozen under `prefers-reduced-motion`
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Dark-first console theme with a daylight-ops light theme, driven by CSS variables with a manual toggle
- **Accessible**: Skip link, semantic landmarks, decorative chrome kept `aria-hidden`, and visible focus states
- **Static Export**: Can be exported as static HTML for easy deployment

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Or use the PowerShell script:

```powershell
.\start-dev.ps1
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build

Build the static site for production:

```bash
npm run build
```

This will generate a static export in the `out` directory.

### Start Production Server

After building:

```bash
npm start
```

## Project Structure

```
claude-resume-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page combining all components
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with profile picture
│   ├── Experience.tsx      # Work experience timeline
│   ├── Education.tsx       # Education and certifications
│   ├── Skills.tsx          # Skills categorized by type
│   └── Footer.tsx          # Footer with social links
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Technologies Used

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Customization

To customize the content:

1. **Personal Information**: Edit the data in [components/Hero.tsx](components/Hero.tsx)
2. **Work Experience**: Modify the `experiences` array in [components/Experience.tsx](components/Experience.tsx)
3. **Education**: Update the `education` array in [components/Education.tsx](components/Education.tsx)
4. **Skills**: Customize `skillCategories` in [components/Skills.tsx](components/Skills.tsx)
5. **Profile Picture**: Replace the placeholder in [components/Hero.tsx](components/Hero.tsx) with an actual image

## Deployment

This site can be deployed to:

- **Vercel**: Connect your GitHub repo to Vercel for automatic deployments
- **Netlify**: Deploy the `out` folder after running `npm run build`
- **GitHub Pages**: Push the `out` folder to a gh-pages branch
- **Any static hosting**: Upload the contents of `out` folder

## License

This project is open source and available for personal use.
