"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 shadow-2xl sticky top-0 z-50 border-b-2 border-primary-600/30">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                Le Figurarium
              </div>
              <div className="text-xs text-primary-400 font-medium">Premium STL Files</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" prefetch={false} className="px-5 py-2.5 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all font-medium">
              Accueil
            </Link>
            <Link href="/pack-debutant" prefetch={false} className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-primary-500/50 transform hover:scale-105">
              Pack Débutant
            </Link>
            <Link href="/packs" prefetch={false} className="px-5 py-2.5 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all font-medium">
              Packs
            </Link>
            <Link href="/galerie" prefetch={false} className="px-5 py-2.5 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all font-medium">
              Galerie
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 space-y-2 border-t border-dark-700 pt-4">
            <Link
              href="/"
              prefetch={false}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/pack-debutant"
              prefetch={false}
              className="block px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold"
            >
              Pack Débutant
            </Link>
            <Link
              href="/packs"
              prefetch={false}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all font-medium"
            >
              Packs
            </Link>
            <Link
              href="/galerie"
              prefetch={false}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all font-medium"
            >
              Galerie
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
