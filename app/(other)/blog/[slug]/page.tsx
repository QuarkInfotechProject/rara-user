// app/blog/[slug]/page.tsx
"use client";

import BlogSkeleton from "@/components/BlogSkeleton";
import News from "@/components/home/News";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  featured_image: string;
  short_description: string;
  description: string;
  publish_date: string;
  read_time: string;
  author: {
    name: string;
  };
  category: {
    name: string;
  };
  meta: {
    keywords: string[];
  };
}

const BlogPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const { slug } = await params;

      fetch(`/api/product/blog/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    };

    fetchBlog();
  }, [params]);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-8">
      <BlogSkeleton />
    </div>;
  }

  if (!blog) {
    return <div className="max-w-4xl mx-auto p-8">Blog not found</div>;
  }

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-xl text-gray-600 mb-6">
          {blog.short_description.replace(/<[^>]*>/g, "")}
        </p>

        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <span>{blog.author.name}</span>
          <span>•</span>
          <span>{new Date(blog.publish_date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{blog.read_time} min read</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
            {blog.category.name}
          </span>
        </div>

        {blog.featured_image && (
          <Image
            src={blog.featured_image}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full h-96 object-cover rounded mb-8"
          />
        )}

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />

        {blog.meta.keywords.length > 0 && (
          <div className="mt-8 pt-8 border-t">
            <span className="text-gray-600 mr-2">Tags:</span>
            {blog.meta.keywords.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 rounded text-sm mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="mb-20">
        <News />
      </div>
    </div>
  );
};

export default BlogPage;
