# Mosaik ✦

> An advanced, interactive browser-based studio for creating stunning dithered art, retro ASCII animations, and custom dot matrix graphics.

**Mosaik** is a web-based creative tool that brings retro aesthetics into the modern web. Transform your images, videos, and GIFs into classic halftone patterns, raw pixel art, or reactive ASCII animations in real-time. With interactive physics, customizable palettes, and robust export options, it's the perfect playground for digital artists and frontend developers.

## ✨ Features

- **Rich Media Support**: Upload Images (PNG, JPG, SVG, WebP, GIF) and Videos (MP4, WebM, MOV).
- **Multiple Dithering Algorithms**: Choose between Floyd-Steinberg, Atkinson, Ordered (Bayer), and Hard Threshold to get the exact look you want.
- **ASCII Art Generation**: Convert media into customizable ASCII text rendering with different character sets (Detailed, Blocks, Pixel, Minimal, Braille, or Custom), glowing effects, and terminal-like aesthetics.
- **Interactive Physics Engine**: Switch to the **Preview** tab and interact with your dithered dots. Apply particle effects like *Repel*, *Attract*, *Wave*, *Noise*, *Vortex*, and *Breathe*.
- **Retro Palettes & Color Matching**: Use classic built-in palettes (Game Boy, PICO-8, NES, CGA), preserve the original source colors, or define completely custom background and dot colors.
- **High Performance**: Heavy pixel manipulation and structural dithering math are safely offloaded to Web Workers to ensure a smooth, lag-free UI experience.
- **Developer-Friendly Exports**:
  - Download static art as **PNG** or **SVG**.
  - Export motion art as **WebM** video or **GIF**.
  - Download raw particle coordinates as **JSON**.
  - Copy **React Components** or **ASCII Animation Code** to drop the effect directly into your own websites and projects.
- **Post-Processing Overlays**: Add CRT scanlines, vignettes, or blend mode tinting for a perfect vintage finish.

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to open the studio.

## 🛠️ Built With

- **Framework**: [Next.js](https://nextjs.org/) (React 19)
- **Styling**: Tailwind CSS & plain CSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Media Decoding**: `gifuct-js` & `omggif`
- **Performance Architecture**: Native Web Workers and `OffscreenCanvas` for intensive frame processing.

## 🎮 Basic Workflow

1. **Upload**: Drag and drop an image or video into the studio.
2. **Tune**: Expand the settings panels on the left. Adjust the dot scale, select a different dithering algorithm, or switch entirely to ASCII mode. Tweak dot sizes, contrast, and brightness to perfection.
3. **Play**: Switch to the **Preview** tab to interact with the responsive physics engine. Move your mouse over the canvas to see the dots react!
4. **Export**: Use the action belt at the top of the sidebar to save your preset, download the media, or copy the interaction code.

## 📝 License

This project is completely open-source and available under the [MIT License](https://github.com/bedigambar/Mosaik/blob/main/LICENSE).
