import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="text-center py-20">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">
          🎧 KTR3 | Productor & Beatmaker
        </motion.h1>
        <p className="mt-4 text-lg text-gray-400">Explora mi universo musical</p>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">🎵 Produciones destacadas</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Beat 1"></iframe>
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Beat 2"></iframe>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-center">
        <h2 className="text-2xl font-bold mb-4">🎚️ Servicios Musicales</h2>
        <p className="text-gray-400">Producción de beats, mezcla, masterización.</p>
      </section>

      <footer className="bg-black py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} KTR3 · Todos los derechos reservados
      </footer>
    </div>
  );
}
