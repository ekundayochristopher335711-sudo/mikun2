import React from 'react';
import { BRAND } from '../brand.js';

const PHONE = BRAND.phone;
const PHONE_INTL = BRAND.phoneIntl;

const SOCIAL = [
  {
    name: 'WhatsApp',
    href: `https://wa.me/${BRAND.phoneIntl.replace('+', '')}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M20 12a8 8 0 0 1-11.8 7L4 20l1-4.1A8 8 0 1 1 20 12Z" />
        <path d="M9 9.5c.3 1.3 1.2 2.3 2.4 3.1 1.1.7 2 .9 2.4.3l.5-.7c.2-.3.1-.6-.2-.8l-1.1-.6c-.3-.2-.6-.1-.8.2l-.2.3c-.5-.2-1-.7-1.3-1.2l.2-.3c.2-.3.2-.6-.1-.8l-.9-.7c-.3-.2-.6-.1-.9.2Z" />
      </svg>
    ),
  },
  {
    name: 'Directions',
    href: BRAND.mapsUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 3a7 7 0 0 1 6.9 8.2l-2.7-1.3a4.5 4.5 0 0 0-.4-1.3l1.6-1.2a7 7 0 0 0-1.2-1.2l-1.2 1.6a4.5 4.5 0 0 0-1.3-.4L13.2 6.7A7 7 0 0 0 12 6.5V5Zm-7 7a7 7 0 0 1 5.2-6.8l.4 3a4.5 4.5 0 0 0-1.2.7L7.8 7.7A7 7 0 0 0 6.6 9l2.4 1.8a4.5 4.5 0 0 0-.4 1.3l-3 .4A7 7 0 0 1 5 12Zm7 7a7 7 0 0 1-6.7-5.2l3-.4a4.5 4.5 0 0 0 .7 1.2l-1.8 1.6A7 7 0 0 0 9 17.4l1.8-2.4a4.5 4.5 0 0 0 1.3.4l.4 3A7 7 0 0 1 12 19Zm0-4.5A2.5 2.5 0 1 1 14.5 12 2.5 2.5 0 0 1 12 14.5Zm4.4.8-1.6-2.4a4.5 4.5 0 0 0 .4-1.3l3 .4a7 7 0 0 1-1.8 3.3Z" />
      </svg>
    ),
  },
  {
    name: 'Call',
    href: `tel:${BRAND.phoneIntl}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M7.2 3.5h2.1l1.1 4.1-1.5 1.5a12.8 12.8 0 0 0 5.9 5.9l1.5-1.5 4.1 1.1v2.1c0 1-.8 1.8-1.8 1.8C11.1 18.5 5.5 12.9 5.5 5.3c0-1 .8-1.8 1.7-1.8Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <div className="space-y-6">
            <img src={BRAND.logo} alt={BRAND.displayName} className="h-14 w-56 object-contain object-left" />
            <p className="text-sm uppercase tracking-[0.4em] text-brand-lime font-bold">Delivery & Community</p>
            <h3 className="text-3xl sm:text-4xl font-black">Hungry? Let's Solve That.</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <a
                href="/menu"
                className="inline-flex items-center justify-center bg-brand-lime text-brand-forest px-6 py-3 rounded-full font-black uppercase tracking-wider shadow-lg hover:bg-brand-lime-hover transition"
              >
                Order Online Now
              </a>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-white/20 text-white px-6 py-3 rounded-full font-black uppercase tracking-wider hover:bg-white/10 transition"
              >
                Find Us on Google Maps
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-lime font-bold mb-4">Get the Juice</p>
            <p className="text-gray-300 text-sm sm:text-base mb-6">Sign up for our newsletter to get 10% off your first online order.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white placeholder:text-gray-400 focus:border-brand-lime focus:outline-none focus:ring-2 focus:ring-brand-lime/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-brand-lime px-6 py-3 font-black uppercase tracking-wider text-brand-forest hover:bg-brand-lime-hover transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 border-t border-white/10 pt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Social */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Follow the Flavor</h4>
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-brand-lime hover:border-brand-lime hover:text-brand-forest transition text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <a href={`tel:${PHONE_INTL}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0 text-brand-lime">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                {PHONE}
              </a>
              <a href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0 text-brand-lime">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                WhatsApp: {PHONE}
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Location</h4>
            <address className="not-italic text-sm text-gray-300 leading-relaxed">
              {BRAND.address}<br />
              Plus code: {BRAND.mapsQuery}
            </address>
          </div>

          {/* Hours + copyright */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Hours</h4>
              <p className="text-gray-300 text-sm">{BRAND.hours}</p>
            </div>
            <div className="space-y-2 text-xs leading-relaxed text-gray-500">
              <p>&copy; {new Date().getFullYear()} {BRAND.displayName}. All rights reserved.</p>
              <p>
                Photo: Jide Charles (Jidus),{' '}
                <a href="https://commons.wikimedia.org/wiki/File:Jollof_rice,_plantain,_bean_porridge_and_turkey.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Wikimedia Commons</a>,{' '}
                <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">CC BY-SA 4.0</a> (unmodified).
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
