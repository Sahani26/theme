// app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, slug, content, author } = body;

    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'title, slug and content are required' }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const collection = db.collection('blogs');

    // check existing slug
    const exists = await collection.findOne({ slug });
    if (exists) {
      return NextResponse.json({ error: 'slug already exists' }, { status: 409 });
    }

    const now = new Date().toISOString();
    const insertRes = await collection.insertOne({
      title, slug, content, author: author ?? 'Admin', createdAt: now, updatedAt: now
    });

    const inserted = await collection.findOne({ _id: insertRes.insertedId });
    return NextResponse.json(inserted, { status: 201 });

  } catch (err: any) {
    // If you also created a unique index, duplicates could raise an error here
    console.error('POST /api/blogs error', err);
    if (err?.code === 11000) { // Mongo duplicate key error
      return NextResponse.json({ error: 'slug already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
