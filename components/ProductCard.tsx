import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  nom: string;
  type?: string;
  prix: string;
  description: string;
  image: string;
  stripeLink?: string;
  gumroadLink?: string;
  linkUrl?: string;
}

export default function ProductCard({
  nom,
  type,
  prix,
  description,
  image,
  stripeLink,
  gumroadLink,
  linkUrl,
}: ProductCardProps) {
  const href = linkUrl || stripeLink || gumroadLink || '#';
  const isExternal = gumroadLink !== undefined;

  const CardContent = () => (
    <>
      <div className="relative h-64 overflow-hidden bg-dark-100 rounded-t-lg">
        <Image
          src={image}
          alt={nom}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        {type && (
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full mb-3">
            {type === 'starter' ? 'Pack Débutant' : 'Pack Thématique'}
          </span>
        )}
        <h3 className="text-xl font-display font-bold text-dark-900 mb-2">{nom}</h3>
        <p className="text-dark-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">{prix}</span>
          <span className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-1">
            {isExternal ? 'Acheter' : 'Voir plus'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-fade-in">
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          <CardContent />
        </a>
      ) : (
        <Link href={href} className="block">
          <CardContent />
        </Link>
      )}
    </div>
  );
}
