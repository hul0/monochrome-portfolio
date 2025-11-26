import { Hero } from './hero';

async function getInitialCount() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/counter`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data.data.up_count || 69;
  } catch (error) {
    console.error('Error fetching initial count:', error);
    return 29;
  }
}

export default async function HeroWrapper() {
  const initialCount = await getInitialCount();
  
  return <Hero initialCount={initialCount} />;
}
