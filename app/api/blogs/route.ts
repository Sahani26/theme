import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, slug, content, author, image, tags, subTitle, quote, subContent } = body;

    if (!title || !slug || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    // Slug must be unique
    const exists = await db.collection("blogs").findOne({ slug });
    if (exists) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    }

    const newBlog = {
      title,
      slug,
      content,
      author: author || "Admin",
      image: image || null,
      tags: tags || [],

       // NEW FIELDS
      quote,
      subTitle,
      subContent,
      createdAt: new Date().toISOString(),

     
    };

    await db.collection("blogs").insertOne(newBlog);
    return NextResponse.json({ message: "Blog created", blog: newBlog }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
