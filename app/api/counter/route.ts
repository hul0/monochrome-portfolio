import { NextResponse } from 'next/server';

const API_KEY = process.env.COUNTER_API_KEY;
const BASE_URL = 'https://api.counterapi.dev/v2/hulo-birals-team-1817/first-counter-1817';

// GET - Fetch current counter value without incrementing
export async function GET() {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
      cache: 'no-store', // Don't cache the counter
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch counter' },
      { status: 500 }
    );
  }
}

// POST - Increment counter
export async function POST() {
  try {
    const response = await fetch(`${BASE_URL}/up`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to increment counter' },
      { status: 500 }
    );
  }
}
