// pages/index.tsx
import React from 'react'
import { Zap, Palette, Accessibility } from 'lucide-react'
import { motion, HTMLMotionProps } from 'framer-motion'

const MotionDiv = motion.div as React.FC<React.PropsWithChildren<HTMLMotionProps<'div'>>>

const FEATURE_ITEMS = [
  { icon: <Zap className="w-6 h-6" />, title: 'Fast Performance', desc: 'Optimized rendering and simple components.' },
  { icon: <Palette className="w-6 h-6" />, title: 'Beautiful UI', desc: 'Layered gradients, shadows and clean typography.' },
  { icon: <Accessibility className="w-6 h-6" />, title: 'Accessible', desc: 'Keyboard & screen reader friendly by default.' },
]

const CASE_STUDIES = [
  {
    title: 'Marketing Site',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=60',
    summary: 'A marketing landing page with animations and smooth scroll interactions.',
    points: ['Hero + CTA', 'Feature grid', 'Responsive layout'],
  },
  {
    title: 'Product Showcase',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=60',
    summary: 'Showcase product visuals with alternating content blocks.',
    points: ['High-quality imagery', 'Animated entrances', 'Easy to customize'],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071023] via-[#0b1220] to-[#05060a] text-white antialiased">
      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <MotionDiv
          className="absolute -left-20 top-10 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-[#00e0ff] to-[#7b61ff]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
        />
        <MotionDiv
          className="absolute right-0 -bottom-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-[#ff7bd6] to-[#ffb86b]"
          animate={{ x: [0, -60, 0], y: [0, 40, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {/* Header */}
      <header className="fixed w-full top-0 left-0 z-40 backdrop-blur-md bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Dimension Clone</h1>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#home" className="hover:text-cyan-300">Home</a>
            <a href="#features" className="hover:text-cyan-300">Features</a>
            <a href="#cases" className="hover:text-cyan-300">Use Cases</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section id="home" className="min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Build beautiful animated landing pages.
                <span className="block text-cyan-300">Fast. Accessible. Responsive.</span>
              </h1>
              <p className="text-gray-300 mt-4">This starter recreates the Dimension vibe.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <div className="rounded-xl overflow-hidden shadow-2xl p-4 bg-white/5">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=60"
                  alt="mock"
                  className="w-full h-72 md:h-96 object-cover rounded-md"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {FEATURE_ITEMS.map((it, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white/5 rounded-xl p-6"
              >
                <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-md mb-4">{it.icon}</div>
                <h3 className="font-semibold mb-2">{it.title}</h3>
                <p className="text-gray-300 text-sm">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="py-20">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            {CASE_STUDIES.map((c, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
                <motion.img
                  src={c.image}
                  alt={c.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full rounded-lg object-cover h-64"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                  <p className="text-gray-300 mb-4">{c.summary}</p>
                  <ul className="list-disc list-inside text-gray-300">
                    {c.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 text-center">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-4"
          >
            Ready to ship your landing page?
          </motion.h4>
          <p className="text-gray-300 mb-6">Get in touch and we’ll help you go live fast.</p>
          <div className="flex justify-center gap-4">
            <a className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold">Request Demo</a>
            <a className="px-6 py-3 rounded-lg border border-white/10">Contact Sales</a>
          </div>
        </section>

        <footer className="py-10 border-t border-white/10 text-center text-sm text-gray-400">© {new Date().getFullYear()} — Aftab</footer>
      </main>
    </div>
  )
}
