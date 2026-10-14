"use client";

import { useState } from "react";
import Link from "next/link";
import { topicOf } from "../Component/Blogs/BlogRelated";

// Filter buttons group the blog categories by topic
const categories = [
  { label: "All", topic: "all" },
  { label: "WhatsApp", topic: "whatsapp" },
  { label: "Bulk SMS", topic: "sms" },
  { label: "RCS", topic: "rcs" },
  { label: "OTP", topic: "otp" },
  { label: "Voice Call", topic: "voice" },
];

// Blog data comes from the server page, so every post link is in the static HTML
export default function BlogList({ blogsData }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // Filter blogs by topic
  const filteredBlogs =
    selectedCategory === "all" ? blogsData : blogsData.filter((blog) => topicOf(blog) === selectedCategory);

  // Posts outside the current page stay in the HTML (hidden) so search engines can follow them
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-2">A2ZSMS Blog: Bulk SMS, WhatsApp API &amp; RCS Insights</h1>
      <p className="text-center text-muted mb-4">
        Practical guides on business messaging for Indian companies.
      </p>
      <>
          {/* Category Filter */}
          <div className="mb-4 text-center">
            {categories.map((category) => (
              <button
                key={category.topic}
                className={`btn ${selectedCategory === category.topic ? "btn-primary" : "btn-outline-primary"} me-2 mb-2`}
                onClick={() => {
                  setSelectedCategory(category.topic);
                  setCurrentPage(1); // Reset to first page when category changes
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          <div className="row">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, i) => (
                <div
                  className={`col-md-4 mb-4${i >= indexOfFirstBlog && i < indexOfLastBlog ? "" : " d-none"}`}
                  key={blog.slug}
                >
                  <Link href={`/blogs/${blog.slug}/`} className="text-decoration-none">
                    <div className="card h-100 shadow-sm">
                      <img
                        src={blog.image || "/Images/meta-image.jpg"}
                        alt={blog.title}
                        className="card-img-top"
                        loading="lazy"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h2 className="h5 card-title">{blog.title}</h2>
                        <p className="card-text text-muted">{blog.category}</p>
                        <p className="para-color">{blog.description}</p>
                        <button className="btn btn-primary">Read More</button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No blogs found in this category.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredBlogs.length > blogsPerPage && (
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                {Array.from({ length: Math.ceil(filteredBlogs.length / blogsPerPage) }).map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
      </>
    </div>
  );
}