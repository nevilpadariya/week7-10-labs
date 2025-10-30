# Labs Portal - Week 7-10

A single-page application showcasing lab solutions for Weeks 7-10.

## Features

- ✅ Navigation bar with Week 7-10 links
- ✅ Week 7 labs fully implemented
- ✅ Placeholder pages for Week 8, 9, and 10
- ✅ Material-UI design
- ✅ React Router for SPA navigation
- ✅ Ready for Vercel deployment

## Tech Stack

- React 18
- TypeScript
- Vite
- Material-UI
- React Router DOM
- React Hook Form
- Zod

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. The `vercel.json` file ensures proper SPA routing

The app will be available at your Vercel domain!

## Project Structure

```
src/
├── components/
│   └── Navbar.tsx          # Navigation bar component
├── pages/
│   ├── Week7.tsx           # Week 7 labs (complete)
│   ├── Week8.tsx           # Week 8 labs (placeholder)
│   ├── Week9.tsx           # Week 9 labs (placeholder)
│   └── Week10.tsx          # Week 10 labs (placeholder)
├── App.tsx                 # Main app with routing
└── main.tsx                # Entry point
```

## Adding Content to Future Weeks

Simply edit the corresponding week file in `src/pages/` to add your lab solutions!

