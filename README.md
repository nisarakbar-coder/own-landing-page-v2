# OWN Lab Landing Page

A high-converting landing page for OWN Lab, an RWA tokenization platform focused on Shariah-compliant assets.

## Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** with custom dark theme and gold accents
- **Framer Motion** for smooth animations and micro-interactions
- **Responsive design** from mobile to desktop
- **Accessibility compliant** with semantic HTML and focus states
- **Sticky mobile CTA** for better conversion rates

## Design System

- **Theme**: Dark base with high contrast, alternating sections
- **Typography**: Space Grotesk (headings), Inter (body)
- **Accent**: Gold/amber for CTAs and highlights
- **Background**: Subtle grid patterns and radial gradients
- **Motion**: Gentle fade/slide animations, hover effects with shine

## Sections

1. **Hero** - Full-width with dual CTAs and proof badges
2. **Metrics** - Key statistics in a grid layout
3. **Strategic Positioning** - Two-column with feature cards
4. **How It Works** - 7-step process with numbered cards
5. **Asset Classes** - Grid of supported asset types
6. **For Whom** - Issuers vs Investors breakdown
7. **Regulatory & Trust** - Compliance and Shariah governance
8. **Feature Stack** - Platform capabilities grid
9. **CTA Band** - Final conversion section
10. **Footer** - Navigation and legal links

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Customization

- Update colors in `src/app/globals.css` CSS variables
- Modify content in `src/app/page.tsx`
- Add real logos by replacing placeholder divs in `LogoWall.tsx`
- Connect CTAs to your contact/booking system

## Performance

- Optimized images and fonts
- Minimal JavaScript bundle
- Lighthouse score optimized
- Mobile-first responsive design

## Accessibility

- WCAG AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios