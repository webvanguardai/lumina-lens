'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lumina Lens Studio',
  description: 'Premium photography studio in Dubai specializing in editorial, luxury brand, and lifestyle photography.',
  url: 'https://luminalens.vercel.app',
  telephone: '+971-50-000-0001',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai Design District, Building 7',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.1972,
    longitude: 55.2744,
  },
  openingHours: 'Mo-Sa 09:00-18:00',
  priceRange: 'AED 2,500 - AED 25,000',
  image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80',
  sameAs: [],
}

const services = [
  {
    title: 'Editorial & Fashion',
    description: 'High-concept editorial shoots for magazines, luxury brands, and designers. We craft visual stories that command attention.',
    price: 'From AED 4,500',
    icon: '✦',
  },
  {
    title: 'Luxury Brand & Commercial',
    description: 'Product and campaign photography that elevates your brand identity. Used by leading UAE brands and international labels.',
    price: 'From AED 6,000',
    icon: '◈',
  },
  {
    title: 'Lifestyle & Portrait',
    description: 'Authentic storytelling through lifestyle photography. Personal branding, executive portraits, and family sessions.',
    price: 'From AED 2,500',
    icon: '◉',
  },
  {
    title: 'Events & Corporate',
    description: 'From intimate gatherings to large corporate events. Discreet, professional, and always exceptional results.',
    price: 'From AED 3,500',
    icon: '◆',
  },
  {
    title: 'Real Estate & Architecture',
    description: 'Architectural photography that sells. Interiors, exteriors, and aerial perspectives for Dubai\'s premium properties.',
    price: 'From AED 3,000',
    icon: '▣',
  },
  {
    title: 'Retouching & Post-Production',
    description: 'World-class retouching and colour grading. Cinematic colour science, skin retouching, and composite work.',
    price: 'From AED 150/image',
    icon: '◐',
  },
]

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
    alt: 'Editorial fashion photography',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    alt: 'Camera equipment professional',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5',
    alt: 'Commercial brand photography',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a',
    alt: 'Portrait photography',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5',
    alt: 'Lifestyle photography Dubai',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8',
    alt: 'Luxury product photography',
    span: '',
  },
]

const testimonials = [
  {
    name: 'Nour Al Rashidi',
    role: 'Creative Director, Maison Dubaï',
    text: 'Lumina Lens transformed our brand campaign completely. The images are cinematic, precise, and absolutely stunning. They understood our vision on the first briefing.',
    rating: 5,
  },
  {
    name: 'James Thornton',
    role: 'CEO, Thornton Luxury Residences',
    text: 'Our property listings sold 40% faster after using Lumina Lens. The architectural photography is on another level — every detail captured perfectly.',
    rating: 5,
  },
  {
    name: 'Aisha Al Mansoori',
    role: 'Founder, House of Aisha Fashion',
    text: 'I\'ve worked with photographers across London, Paris and Milan. Lumina Lens in Dubai matches — and often exceeds — that international standard. Truly exceptional.',
    rating: 5,
  },
  {
    name: 'Daniel Kovač',
    role: 'Marketing Director, Meridian Hotels',
    text: 'Our hotel photography has been completely reimagined. Bookings increased significantly. The team is professional, fast, and incredibly creative.',
    rating: 5,
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-black/80 backdrop-blur-sm border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-[#00E5FF] flex items-center justify-center">
            <span className="text-black font-bold text-sm font-display">L</span>
          </div>
          <span className="font-display font-bold text-lg tracking-wide">LUMINA LENS</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-8 text-sm text-white/60"
        >
          <a href="#services" className="hover:text-[#00E5FF] transition-colors">Services</a>
          <a href="#about" className="hover:text-[#00E5FF] transition-colors">About</a>
          <a href="#gallery" className="hover:text-[#00E5FF] transition-colors">Gallery</a>
          <a href="#contact" className="bg-[#00E5FF] text-black px-5 py-2 font-semibold hover:bg-white transition-colors">Book Now</a>
        </motion.div>
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-center">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1600&q=85"
            alt="Lumina Lens Studio hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#00E5FF] text-sm font-medium tracking-[0.3em] uppercase mb-6"
          >
            Dubai Design District · Est. 2019
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none mb-6"
          >
            Where Light<br />
            <em className="text-[#00E5FF] not-italic">Becomes</em><br />
            Legacy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-lg md:text-xl max-w-xl mb-10"
          >
            Dubai&apos;s most sought-after photography studio. Editorial precision. Luxury brand campaigns. Visual stories that endure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#gallery" className="bg-[#00E5FF] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-white transition-colors">
              VIEW PORTFOLIO
            </a>
            <a href="#contact" className="border border-white/30 text-white px-8 py-4 font-semibold text-sm tracking-wide hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors">
              BOOK A SHOOT
            </a>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 grid grid-cols-3 gap-6 md:gap-12 max-w-lg md:max-w-none">
            {[
              { val: '500+', label: 'Projects Delivered' },
              { val: '200+', label: 'Brand Clients' },
              { val: '7', label: 'Years in Dubai' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[#00E5FF] font-display font-bold text-2xl md:text-3xl">{stat.val}</p>
                <p className="text-white/50 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pad bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[#00E5FF] text-xs tracking-[0.3em] uppercase mb-4">What We Do</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Services & <em className="not-italic text-[#00E5FF]">Pricing</em>
            </h2>
            <p className="text-white/50 max-w-xl">Every frame is intentional. Every project is bespoke. Pricing reflects the dedication to craft.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#050505] p-8 hover:bg-[#111111] transition-colors group"
              >
                <span className="text-[#00E5FF] text-2xl mb-6 block">{service.icon}</span>
                <h3 className="font-semibold text-xl mb-3 group-hover:text-[#00E5FF] transition-colors">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
                <p className="text-[#00E5FF] text-sm font-semibold">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80"
                  alt="Lumina Lens studio"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
                <div className="absolute top-6 left-6 bg-[#00E5FF] text-black px-4 py-2 text-sm font-bold">
                  Dubai Design District
                </div>
                <div className="absolute bottom-0 right-0 bg-black/80 p-6 max-w-xs">
                  <p className="font-display text-3xl font-bold text-[#00E5FF]">2019</p>
                  <p className="text-white/60 text-sm mt-1">Founded in Dubai&apos;s creative heart</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[#00E5FF] text-xs tracking-[0.3em] uppercase mb-6">Our Story</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
                Crafted in<br />
                <em className="not-italic text-[#00E5FF]">light</em>. Built<br />
                on precision.
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Founded in Dubai Design District in 2019, Lumina Lens Studio was born from a singular obsession: photography that doesn&apos;t just document — it transforms. Our team of six specialists brings together fashion, architecture, and brand photography under one creative roof.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                We work with Dubai&apos;s most ambitious brands, from emerging designers to established luxury houses. Every project starts with a conversation about your vision, and ends with images that exceed it.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { val: '6', label: 'Specialist photographers' },
                  { val: '3', label: 'Studio spaces (D3)' },
                  { val: '12+', label: 'Award recognitions' },
                  { val: '30+', label: 'Brand retainers' },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[#00E5FF] pl-4">
                    <p className="font-display font-bold text-2xl text-[#00E5FF]">{item.val}</p>
                    <p className="text-white/50 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#00E5FF] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-white transition-colors">
                START YOUR PROJECT →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section-pad bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div>
              <p className="text-[#00E5FF] text-xs tracking-[0.3em] uppercase mb-4">Selected Work</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl">
                Our <em className="not-italic text-[#00E5FF]">Portfolio</em>
              </h2>
            </div>
            <p className="text-white/40 text-sm max-w-xs">A curated selection from our most iconic shoots across Dubai and the region.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative overflow-hidden group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
              >
                <Image
                  src={`${img.url}?w=800&q=80`}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#00E5FF]/10 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <p className="text-[#00E5FF] text-xs tracking-[0.3em] uppercase mb-4">Client Testimonials</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              What They <em className="not-italic text-[#00E5FF]">Say</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#111111] border border-white/5 p-8 hover:border-[#00E5FF]/30 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-[#00E5FF] text-sm">★</span>
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-[#00E5FF] text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#00E5FF] text-xs tracking-[0.3em] uppercase mb-6">Get in Touch</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Let&apos;s Create<br />
                <em className="not-italic text-[#00E5FF]">Something</em><br />
                Extraordinary
              </h2>
              <p className="text-white/50 mb-10 leading-relaxed">
                Tell us about your project. We&apos;ll respond within 24 hours with a bespoke proposal tailored to your creative vision.
              </p>
              <div className="space-y-6">
                {[
                  { icon: '📍', label: 'Studio', val: 'Building 7, Dubai Design District, D3' },
                  { icon: '📞', label: 'Phone', val: '+971 50 000 0001' },
                  { icon: '✉️', label: 'Email', val: 'hello@luminalens.ae' },
                  { icon: '⏰', label: 'Hours', val: 'Mon–Sat 09:00–18:00' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-[#00E5FF] text-xs tracking-wider uppercase mb-1">{item.label}</p>
                      <p className="text-white/70">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#00E5FF] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#00E5FF] transition-colors"
                      placeholder="Your surname"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#00E5FF] transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Photography Service</label>
                  <select
                    name="service"
                    className="w-full bg-[#111111] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#00E5FF] transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option>Editorial & Fashion</option>
                    <option>Luxury Brand & Commercial</option>
                    <option>Lifestyle & Portrait</option>
                    <option>Events & Corporate</option>
                    <option>Real Estate & Architecture</option>
                    <option>Retouching & Post-Production</option>
                  </select>
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Budget Range (AED)</label>
                  <select
                    name="budget"
                    className="w-full bg-[#111111] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#00E5FF] transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option>Under AED 5,000</option>
                    <option>AED 5,000 – 10,000</option>
                    <option>AED 10,000 – 25,000</option>
                    <option>AED 25,000+</option>
                  </select>
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Project Brief</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
                    placeholder="Tell us about your shoot — concept, timeline, location..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00E5FF] text-black py-4 font-bold text-sm tracking-widest hover:bg-white transition-colors uppercase"
                >
                  Request a Proposal
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#00E5FF] flex items-center justify-center">
              <span className="text-black font-bold text-xs font-display">L</span>
            </div>
            <span className="font-display font-bold text-sm">LUMINA LENS</span>
          </div>
          <p className="text-white/30 text-xs">© 2026 Lumina Lens Studio. Dubai Design District. All rights reserved.</p>
          <p className="text-white/20 text-xs">Premium Photography · Dubai, UAE</p>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/971500000001?text=Hello%20Lumina%20Lens%2C%20I%20would%20like%20to%20enquire%20about%20a%20photography%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#1EBE5D] transition-colors"
        aria-label="Contact via WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  )
}
