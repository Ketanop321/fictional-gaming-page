 # Epic Adventure Game Landing Page

A stunning, interactive landing page for an epic adventure game built with modern web technologies.

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **3D Graphics**: Three.js with React Three Fiber & Drei
- **Animations**: 
  - Framer Motion for UI animations
  - GSAP for custom cursor animations
- **Icons**: Lucide React
- **Build Tool**: Vite

## Features

- 🎮 Interactive 3D Hero Section
- 🎨 Character Customization System
- 🗺️ Interactive World Map with Region Lore
- ✨ Particle Effects & Glowing Runes
- 📱 Responsive Design
- 🖱️ Custom Cursor
- 🎭 Loading Screen Animation
- 📋 Pre-registration System with Leaderboard

## Adding Custom 3D Models

To add your custom 3D models to the project:

1. **Create Your 3D Model**:
   - Use Blender, Maya, or any 3D modeling software
   - Export as `.glb` or `.gltf` format
   - Optimize your model for web (reduce polygons, texture sizes)

2. **Add Model to Project**:
   ```jsx
   // Example in a component
   import { useGLTF } from '@react-three/drei'
   
   function Model() {
     const { scene } = useGLTF('/path/to/your/model.glb')
     return <primitive object={scene} />
   }
   ```

3. **Best Practices**:
   - Keep model file size under 5MB
   - Use draco compression for complex models
   - Test performance on mobile devices
   - Consider using loading indicators for large models

## Project Structure

```
src/
├── components/         # React components
│   ├── Hero3D/        # 3D hero section
│   ├── WorldMap/      # Interactive world map
│   └── ...
├── styles/            # Global styles
└── App.tsx           # Main application
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## Development Guidelines

### Adding New 3D Models

1. Place your `.glb` or `.gltf` files in the `public/models` directory
2. Create a new component in `src/components`
3. Import and use the model:

```jsx
import { useGLTF } from '@react-three/drei'

export function CustomModel() {
  const { scene } = useGLTF('/models/your-model.glb')
  
  return (
    <primitive 
      object={scene}
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
    />
  )
}
```

### Performance Optimization

- Use `Suspense` for loading 3D models
- Implement level of detail (LOD) for complex models
- Compress textures appropriately
- Use `useFrame` hook carefully to avoid unnecessary renders

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License
