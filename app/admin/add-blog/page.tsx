"use client";
import Footer from "@/public/components/Footer";
import Header from "@/public/components/Header";
import "@/public/assets/css/addblog.css"
import React, { useState } from "react";
import CTA from "@/public/components/CTA";

export default function AddBlogPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    image: "",
    author: "",
    tags: "",
    content: "",
    subContent: "",
    quote: "",
    subTitle: "",

  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()),
      }),
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <>
      <Header />
      <div className="add-blog-wrapper">
        <h1 className="add-blog-title">Add Blog</h1>
        <form className="add-blog-form" onSubmit={handleSubmit}>
          <input className="add-blog-input" placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <input className="add-blog-input" placeholder="Slug" onChange={(e) => setForm({ ...form, slug: e.target.value })} />
          <input className="add-blog-input" placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} />
          <input className="add-blog-input" placeholder="Author" onChange={(e) => setForm({ ...form, author: e.target.value })} />
          <input className="add-blog-input" placeholder="Tags (comma separated)" onChange={(e) => setForm({ ...form, tags: e.target.value })} />
          <textarea  className="add-blog-textarea" placeholder="Content HTML" rows={10} onChange={(e) => setForm({ ...form, content: e.target.value })} />

          <input className="add-blog-input"
            placeholder="Quote Text"
            onChange={(e) => setForm({ ...form, quote: e.target.value })}
          />

          <input className="add-blog-input"
            placeholder="Second Title"
            onChange={(e) => setForm({ ...form, subTitle: e.target.value })}
          />

          <textarea className="add-blog-input"
            placeholder="Second Content"
            rows={4}
            onChange={(e) => setForm({ ...form, subContent: e.target.value })}
          />

          <button className="add-blog-btn" type="submit">Create Blog</button>
        </form>
      </div>
      <CTA/>
      <Footer />
    </>
  );
}
