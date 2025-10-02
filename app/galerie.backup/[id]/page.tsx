import { notFound } from 'next/navigation';
import figurinesData from '@/data/figurines-generated.json';
import FigurineClient from './FigurineClient';

export function generateStaticParams() {
  return figurinesData.figurines.map((figurine) => ({
    id: figurine.id,
  }));
}

export default function FigurinePage({ params }: { params: { id: string } }) {
  const figurine = figurinesData.figurines.find(f => f.id === params.id);

  if (!figurine) {
    notFound();
  }

  return <FigurineClient figurine={figurine} />;
}
