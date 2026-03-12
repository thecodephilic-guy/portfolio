import BlogHeader from "@/components/blogs/blog-header";
import MdxContent from "@/components/blogs/mdx-content";
import { allBlogs, getBlogContent, getReadingTime } from "@/config/blogs";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.href.replace("/blogs/", ""),
  }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b.href === `/blogs/${slug}`);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: `${blog.title} by ${blog.author} | Blogs`,
    description: blog.snippet,
    keywords: blog.tags,
    alternates: {
      canonical: `${siteConfig.url}/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.snippet,
      url: `${siteConfig.url}/blogs/${slug}`,
      type: "article",
      publishedTime: blog.date.toString(),
      authors: [blog.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.snippet,
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  try {
    const { slug } = await params;
    const { content, data } = getBlogContent(slug);
    const readingTime = getReadingTime(content, data.techHeavy)

    return (
      <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <BlogHeader title={data.title} author={data.author} date={data.date} readingTime={readingTime} />
        <MdxContent source={content} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
