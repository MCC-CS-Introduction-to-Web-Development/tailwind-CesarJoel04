import { notFound } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  description: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop',
  },
  {
    id: '2',
    name: 'Phone',
    description: 'Latest smartphone',
  },
  {
    id: '3',
    name: 'Tablet',
    description: 'Portable tablet device',
  },
];

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <p className="text-md text-sky-900 mb-2">Product ID: {product.id}</p>
        <h1 className="text-4xl font-bold text-sky-900 mb-4">{product.name}</h1>
        <p className="text-xl text-sky-900">{product.description}</p>
      </div>
    </section>
  );
}
