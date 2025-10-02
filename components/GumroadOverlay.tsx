"use client";

import { useEffect } from 'react';

interface GumroadOverlayProps {
  link: string;
  onClose: () => void;
}

export default function GumroadOverlay({ link, onClose }: GumroadOverlayProps) {
  useEffect(() => {
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4 animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-dark-400 hover:text-dark-900 transition-colors"
          aria-label="Fermer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">Débloquer cette figurine</h2>
        <p className="text-dark-600 mb-6">
          Cette figurine est disponible à l&apos;achat sur Gumroad. Vous serez redirigé vers une page sécurisée pour finaliser votre achat.
        </p>

        <div className="flex gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
          >
            Acheter sur Gumroad
          </a>
          <button
            onClick={onClose}
            className="px-6 py-3 border-2 border-dark-200 text-dark-700 rounded-lg font-semibold hover:bg-dark-50 transition-colors"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
