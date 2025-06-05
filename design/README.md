# Design Assets

This directory contains all design assets and UI references for the AI Research Assistant project.

## Directory Structure

```
design/
├── pages/           # Page-level designs and layouts
│   ├── home.png     # Home/landing page design
│   ├── research.png # Research form page design
│   ├── history.png  # Research history page design
│   └── profile.png  # User profile page design
├── components/      # Individual component designs
│   ├── buttons/     # Button variations and states
│   ├── forms/       # Form component designs
│   ├── cards/       # Card component designs
│   └── modals/      # Modal and overlay designs
├── wireframes/      # Wireframes and user flows
│   ├── user-flow.png
│   └── site-map.png
└── mockups/         # High-fidelity mockups and prototypes
    ├── desktop/     # Desktop designs
    ├── tablet/      # Tablet designs
    └── mobile/      # Mobile designs
```

## File Naming Convention

- Use lowercase with hyphens: `research-form.png`
- Include device type if relevant: `research-form-mobile.png`
- Include state if relevant: `button-hover-state.png`
- Use descriptive names: `loading-spinner-animation.gif`

## Supported Formats

- **PNG** - For UI screenshots and mockups
- **JPG** - For photographs and complex images
- **SVG** - For icons and vector graphics
- **GIF** - For animations and interactions
- **Figma/Sketch** - Original design files

## Usage

When implementing components, developers and AI assistants should:

1. Check this directory for relevant design references
2. Follow the visual guidelines shown in the designs
3. Maintain consistency with the established design system
4. Update designs when implementing new features

## AI Assistant Access

This directory is referenced in `.cursorrules` to ensure AI assistants like Cursor are aware of design assets when helping with implementation. 