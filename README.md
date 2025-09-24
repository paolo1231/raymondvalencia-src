# My Personal Website

This is my personal developer portfolio built using **Angular 20**, showcasing my background as a full stack developer with a focus on backend development. The website features animated transitions, an interactive **Three.js 3D background**, and responsive design with a modern glass morphism theme.

## 🚀 Features

- **Modern Angular 20 (Standalone Components)**
- **Interactive Three.js 3D Background** with floating particles and geometric shapes
- **Glass Morphism Design** with transparent navbar and footer
- **Mouse-Interactive Elements** - 3D objects respond to cursor movement
- **Responsive design with Bootstrap 5**
- **Dark theme with teal accent colors** (`#64ffda`)
- **Smooth page transitions with vertical screen wipe effect**
- **Backdrop blur effects** for modern UI aesthetics
- **Projects section** with images, tech stack pills, and links
- **Experience section** with interactive company selection and bullet-pointed responsibilities
- **Animated logo (RPV)** and favicon
- **Accessible and SEO-friendly structure**

## 🧱 Tech Stack

- **Frontend:** Angular 20, Bootstrap 5, SCSS
- **3D Graphics:** Three.js with TypeScript
- **Routing & Animations:** Angular Router, Angular Animations
- **Design:** Three.js particle system, glass morphism, CSS animations
- **Icons:** Font Awesome, Bootstrap Icons (GitHub, LinkedIn)

## 🖼️ Pages

- `/home`: Introduction, profile image, and background
- `/projects`: Portfolio projects with screenshots and descriptions
- `/experience`: Work history, roles, and bullet point achievements

## 🧩 Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```
   *Note: This includes Three.js and @types/three for the 3D background*

2. **Run the development server**
   ```bash
   ng serve
   ```
   *The Three.js background will be visible at http://localhost:4200/*

3. **Build for production**
   ```bash
   ng build --configuration production
   ```

## 🎮 Three.js Component Structure

```
src/app/components/three-background/
├── three-background.component.ts    # Main Three.js logic
└── three-background.component.scss  # Background styling
```

The component features:
- Particle system with 1000 floating points
- 8 animated geometric shapes with different colors
- Mouse tracking for interactive camera movement
- Automatic cleanup on component destroy

## 🎨 Three.js Background Features

- **1000 animated particles** with teal color scheme
- **8 floating geometric shapes** (cubes, spheres, cones, octahedrons) in wireframe style
- **Mouse interaction** - camera and objects follow cursor movement
- **Floating animation** using sine waves for natural motion
- **Responsive design** that adapts to window resize
- **Performance optimized** with proper cleanup and frame rate management

## 🖌️ Customization

- **Primary colors:**
  - Background gradient: `#1a1a2e` → `#16213e` → `#0f0f23`
  - Accent color: `#64ffda` (teal)
  - Glass elements: `rgba(16, 33, 62, 0.85)` with backdrop blur
- **Three.js settings** can be modified in `ThreeBackgroundComponent`
- **Logo and favicon** are placed in the `/assets` folder
- **Experience and projects** data is defined in component TypeScript files

## 🔗 Live Demo

[https://paolo1231.github.io/](https://paolo1231.github.io/)

## 📫 Contact

- **GitHub:** [github.com/paolo1231](https://github.com/paolo1231)
- **LinkedIn:** [linkedin.com/in/rptvalencia](https://www.linkedin.com/in/rptvalencia/)

---

> Built with ❤️ using Angular and a love for clean, functional web design.
