// // app/blog/[slug]/page.tsx
import React from "react";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
import Header from "@/public/components/Header";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

type ParamsShape = { slug: string };

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatDayMonth(iso?: string) {
  if (!iso) return { day: "00", month: "Mon" };
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" });
  return { day, month };
}

export async function generateMetadata({ params }: any) {
  const resolvedParams =
    params && typeof params.then === "function" ? await params : params;

  const slug = resolvedParams?.slug ?? "";
  if (!slug) return { title: "Blog Not Found" };

  const { db } = await connectToDatabase();
  const blog = await db.collection("blogs").findOne({ slug });

  return {
    title: blog?.title ? `${blog.title} | Blog Details` : "Blog Details",
    description: blog?.content?.replace(/<[^>]+>/g, "").slice(0, 150),
  };
}


export default async function Page({
  params,
}: {
  params: Promise<ParamsShape> | ParamsShape;
}) {
  // resolve params (Next may pass a Promise)
  const resolvedParams =
    params && typeof (params as any).then === "function"
      ? await (params as Promise<ParamsShape>)
      : (params as ParamsShape);

  const rawSlug = resolvedParams?.slug ?? "";
  const slug = String(rawSlug);

  if (!slug) {
    console.error("Blog details: empty slug param", { params: resolvedParams });
    return <div>Not found</div>;
  }

  try {
    const { db } = await connectToDatabase();
    const col = db.collection("blogs");

    // 1) exact
    let blog: any = await col.findOne({ slug });

    // 2) trimmed
    if (!blog) {
      blog = await col.findOne({ slug: slug.trim() });
    }

    // 3) case-insensitive anchored regex
    if (!blog) {
      const re = new RegExp(`^${escapeRegExp(slug.trim())}$`, "i");
      blog = await col.findOne({ slug: { $regex: re } });
    }

    // 4) fallback: maybe slug is actually an ObjectId
    if (!blog && ObjectId.isValid(slug)) {
      blog = await col.findOne({ _id: new ObjectId(slug) } as any);
    }

    if (!blog) {
      console.warn("Blog details: blog not found for slug", { slug });
      const sample = await col
        .find({}, { projection: { slug: 1, title: 1 } })
        .limit(10)
        .toArray();
      console.warn("Blog details: sample docs", sample);
      return <div>Not found</div>;
    }

    // use blog data
    const {
      title = "Untitled",
      author = "Admin",
      content = "",
      image,
      createdAt,

        // NEW FIELDS
  quote = "",
  subTitle = "",
  subContent = "",
    } = blog;

    const fallbackMainImage = image ?? "assets/images/blog/blog-details-img-1.jpg";
    const { day, month } = formatDayMonth(createdAt);

    return (
      <>
        <Header />
        <>
          {/*Page Header Start*/}
          <section className="page-header">
            <div className="page-header__shape-1">
              <img src="assets/images/shapes/page-header-shape-1.png" alt="" />
            </div>
            <div className="container">
              <div className="page-header__inner">
                <div className="page-header__img-1">
                  <img
                    src="assets/images/resources/page-header-img-1.png"
                    alt=""
                  />
                </div>
                <h3>Blog Details</h3>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <span className="icon-angle-right" />
                    </li>
                    <li>Blog Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Page Header End*/}

          {/*Blog Details Start*/}
          <section className="blog-details">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7">
                  <div className="blog-details__left">
                    <div className="blog-details__img">
                      <img src={fallbackMainImage} alt={title} />
                      <div className="blog-details__date">
                        <p>
                          {day}
                          <br />
                          {month}
                        </p>
                      </div>
                    </div>
                    <div className="blog-details__content">
                      <div className="blog-details__user-and-meta">
                        <div className="blog-details__user">
                          <p>
                            <span className="icon-user" />
                            By {author}
                          </p>
                        </div>
                        <ul className="blog-details__meta list-unstyled">
                          <li>
                            <a href="#">
                              <span className="icon-speech-bubbles" />
                              Comments (05)
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon-clock" />
                              4 Min Read
                            </a>
                          </li>
                        </ul>
                      </div>

                      <h3 className="blog-details__title">{title}</h3>

                      {/* blog content (HTML) — sanitize before using in production */}
                      <div
                        className="blog-details__text-1"
                        dangerouslySetInnerHTML={{ __html: content }}
                      />

                      {/* If you want to split content into paragraphs like original, you can */}
                      <div className="blog-details__author-box">
                        <h4 className="blog-details__author-text">
                         {quote}
                        </h4>
                        <p className="blog-details__author-name">
                          Kane Williamson<span> / CEO</span>
                        </p>
                      </div>

                      <h3 className="blog-details__title-2">
                      {subTitle}
                      </h3>

                      <p className="blog-details__text-3">
                  {subContent}
                      </p>

                      <div className="blog-details__img-box">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="blog-details__img-box-img">
                              <img
                                src="assets/images/blog/blog-details-img-box-img-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="blog-details__img-box-img">
                              <img
                                src="assets/images/blog/blog-details-img-box-img-2.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="blog-details__tag-and-share">
                        <div className="blog-details__tag">
                          <h3 className="blog-details__tag-title">Tags :</h3>
                          <ul className="blog-details__tag-list list-unstyled">
                            <li>
                              <a href="#">Analysis</a>
                            </li>
                            <li>
                              <a href="#">Planning</a>
                            </li>
                            <li>
                              <a href="#">Management</a>
                            </li>
                          </ul>
                        </div>
                        <div className="blog-details__share-box">
                          <h3 className="blog-details__share-title">Share :</h3>
                          <div className="blog-details__share">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                            <a href="#">
                              <span className="icon-xpa" />
                            </a>
                            <a href="#">
                              <span className="icon-link-in" />
                            </a>
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Comments (static example) */}
                      <div className="comment-one">
                        <div className="comment-one__single">
                          <div className="comment-one__image">
                            <img
                              src="assets/images/blog/comment-1-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="comment-one__content">
                            <h3>Theresa Webb</h3>
                            <span>02 June 2024 at 03:30 pm</span>
                            <p>
                              The wise man therefore always holds in these matters
                              to this principle of selection. He rejects pleasures
                              to secure other greater pleasures...
                            </p>
                            <div className="comment-one__btn-box">
                              <a href="#" className="comment-one__btn">
                                <span className="icon-share-alt" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="comment-one__single">
                          <div className="comment-one__image">
                            <img
                              src="assets/images/blog/comment-1-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="comment-one__content">
                            <h3>Cameron Williamson</h3>
                            <span>02 June 2024 at 03:30 pm</span>
                            <p>
                              The wise man therefore always holds in these matters
                              to this principle of selection. He rejects pleasures
                              to secure other greater pleasures...
                            </p>
                            <div className="comment-one__btn-box">
                              <a href="#" className="comment-one__btn">
                                <span className="icon-share-alt" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Comment form (static action) */}
                      <div className="comment-form">
                        <h3 className="comment-form__title">Leave A Comment</h3>
                        <p className="comment-form__text">
                          By using form u agree with the message sorage, you can
                          contact us directly now
                        </p>
                        <form
                          action="assets/inc/sendemail.php"
                          className="comment-one__form contact-form-validated"
                        >
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="comment-form__input-box">
                                <input
                                  type="text"
                                  placeholder="Your Name"
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="comment-form__input-box">
                                <input
                                  type="email"
                                  placeholder="Your Email"
                                  name="email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="comment-form__input-box text-message-box">
                                <textarea
                                  name="message"
                                  placeholder="Write your messege"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="comment-form__btn-box">
                                <button
                                  type="submit"
                                  className="thm-btn comment-form__btn"
                                >
                                  submit now
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="result" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="col-xl-4 col-lg-5">
                  <div className="sidebar">
                    <div className="sidebar__single sidebar__search">
                      <form action="#" className="sidebar__search-form">
                        <input type="search" placeholder="Search here" />
                        <button type="submit">
                          <i className="icon-search-interface-symbol" />
                        </button>
                      </form>
                    </div>

                    <div className="sidebar__single sidebar__all-category">
                      <h3 className="sidebar__title">Categories</h3>
                      <ul className="sidebar__all-category-list list-unstyled">
                        <li>
                          <a href="#">
                            Industrial service<span>(04)</span>
                          </a>
                        </li>
                        <li className="active">
                          <a href="#">
                            residential service<span>(06)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Commercial services<span>(02)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            power solution<span>(04)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            upgrade old wiring<span>(07)</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="sidebar__single sidebar__post">
                      <h3 className="sidebar__title">Our Latest Post</h3>
                      <ul className="sidebar__post-list list-unstyled">
                        <li>
                          <div className="sidebar__post-image">
                            <img src="assets/images/blog/lp-1-1.jpg" alt="" />
                          </div>
                          <div className="sidebar__post-content">
                            <p className="sidebar__post-date">02 June 2024</p>
                            <h3>
                              <a href="#">Greater Pleasures or The Selection</a>
                            </h3>
                          </div>
                        </li>
                        <li>
                          <div className="sidebar__post-image">
                            <img src="assets/images/blog/lp-1-2.jpg" alt="" />
                          </div>
                          <div className="sidebar__post-content">
                            <p className="sidebar__post-date">02 June 2024</p>
                            <h3>
                              <a href="#">He pleasures to secure greater</a>
                            </h3>
                          </div>
                        </li>
                        <li>
                          <div className="sidebar__post-image">
                            <img src="assets/images/blog/lp-1-3.jpg" alt="" />
                          </div>
                          <div className="sidebar__post-content">
                            <p className="sidebar__post-date">02 June 2024</p>
                            <h3>
                              <a href="#">worse pains to the selection point.</a>
                            </h3>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="sidebar__single sidebar__tags">
                      <h3 className="sidebar__title">Popular Tags</h3>
                      <div className="sidebar__tags-list">
                        <a href="#">Growth Accelerator</a>
                        <a href="#">Management</a>
                        <a href="#">Analysis</a>
                        <a href="#">Planning</a>
                        <a href="#">Advisory Service</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end sidebar */}
              </div>
            </div>
          </section>
          {/*Blog Details End*/}
        </>
        <CTA />
        <Footer />
      </>
    );
  } catch (err) {
    console.error("Blog details: error fetching blog", err);
    return <div>Not found</div>;
  }
}
