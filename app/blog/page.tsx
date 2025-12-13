// // app/blog/page.tsx
// import { connectToDatabase } from "@/lib/mongodb";
// import Link from "next/link";
// import { ObjectId } from "mongodb";

// // Blog type (optional but recommended)
// interface Blog {
//   _id: ObjectId;
//   title: string;
//   slug: string;
//   content: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

// export default async function BlogListPage() {
//   const { db } = await connectToDatabase();

//   // Fetch all blogs sorted by date (newest first)
//   const blogs = (await db
//     .collection("blogs")
//     .find({})
//     .sort({ createdAt: -1 })
//     .toArray()) as Blog[];

//   return (
//     <div style={{ padding: 24 }}>
//       <h1>All Blogs</h1>

//       {blogs.length === 0 && <p>No blogs found.</p>}

//       <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
//         {blogs.map((b) => (
//           <li
//             key={b._id.toString()} // FIX: Convert ObjectId to string
//             style={{
//               marginBottom: 20,
//               padding: 16,
//               border: "1px solid #ddd",
//               borderRadius: 8,
//               background: "#fafafa",
//             }}
//           >
//             <h2 style={{ marginBottom: 6 }}>
//               <Link href={`/blog/${b.slug}`} style={{ color: "#0070f3" }}>
//                 {b.title}
//               </Link>
//             </h2>

//             <p style={{ color: "#666", fontSize: 14, marginBottom: 8 }}>
//               {b.createdAt
//                 ? new Date(b.createdAt).toLocaleDateString()
//                 : "No date"}
//             </p>

//             <p style={{ fontSize: 14, color: "#333", marginBottom: 12 }}>
//               {b.content?.substring(0, 150)}...
//             </p>

//             <Link
//               href={`/blog/${b.slug}`}
//               style={{ color: "blue", textDecoration: "underline" }}
//             >
//               Read more →
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// app/blog/page.tsx
import React from "react";
import Link from "next/link";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
import Header from "@/public/components/Header";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

interface Blog {
  _id: ObjectId;
  title: string;
  slug: string;
  content?: string;
  author?: string;
  image?: string;
  createdAt?: string;
}

const delays = [100, 300, 600, 900, 1200, 1500];

function formatDayMonth(iso?: string) {
  if (!iso) return { day: "", month: "" };
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" }); // e.g. "Nov"
  return { day, month };
}

export default async function Page() {
  // connect and fetch blogs (newest first)
  const { db } = await connectToDatabase();
  const blogs = (await db
    .collection("blogs")
    .find({})
    .sort({ createdAt: -1 })
    .toArray()) as Blog[];

  const fallbackImages = [
    "assets/images/blog/blog-1-1.jpg",
    "assets/images/blog/blog-1-2.jpg",
    "assets/images/blog/blog-1-3.jpg",
    "assets/images/blog/blog-1-4.jpg",
    "assets/images/blog/blog-1-5.jpg",
    "assets/images/blog/blog-1-6.jpg",
  ];

  return (
    <>
      <Header />

      {/*Page Header Start*/}
      <section className="page-header">
        <div className="page-header__shape-1">
          <img src="assets/images/shapes/page-header-shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <img src="assets/images/resources/page-header-img-1.png" alt="" />
            </div>
            <h3>Blog</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span className="icon-angle-right" />
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      {/*Blog Page Start*/}
      <section className="blog-page">
        <div className="container">
          <div className="row">
            {blogs.length === 0 && (
              <div className="col-12">
                <p>No blogs found.</p>
              </div>
            )}

            {blogs.map((b, i) => {
              const { day, month } = formatDayMonth(b.createdAt);
              const img = b.image ?? fallbackImages[i % fallbackImages.length];
              const delay = delays[i % delays.length];

              return (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay={`${delay}ms`}
                  key={b._id.toString()}
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img src={img} alt={b.title ?? "@@title"} />
                        <img src={img} alt={b.title ?? "@@title"} />
                        <Link href={`/blog/${b.slug}`} className="blog-one__link">
                          <span className="sr-only" />
                        </Link>
                      </div>
                      <div className="blog-one__date">
                        <p>
                          {day}
                          <br />
                          {month}
                        </p>
                      </div>
                    </div>

                    <div className="blog-one__content">
                      <div className="blog-one__user">
                        <p>
                          <span className="icon-user" />
                          By {b.author ?? "Admin"}
                        </p>
                      </div>

                      <h3 className="blog-one__title">
                        <Link href={`/blog/${b.slug}`}>{b.title}</Link>
                      </h3>

                      <Link href={`/blog/${b.slug}`} className="blog-one__learn-more">
                        Learn More
                        <span className="icon-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/*Blog Page End*/}

      <CTA />
      <Footer />
    </>
  );
}
