/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // AÑADIDO: Esto le dice a Next.js que genere una carpeta 'out/' 
  // con archivos HTML estáticos, lo que soluciona problemas de routing en Netlify.
  output: 'export', 
};

export default nextConfig;