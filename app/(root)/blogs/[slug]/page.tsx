import MdxContent from "@/components/blogs/mdx-content";
import { Icons } from "@/components/common/icons";
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
    const resolvedParams = await params;
    const { content, data } = getBlogContent(resolvedParams.slug);

    return (
      <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <header className="mb-8 border-b pb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {data.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1.5 min-w-0">
              <Icons.pen size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
              {data.author && <span>{data.author}</span>}
            </div>
            {data.author && <span>•</span>}
            <time dateTime={data.date}>{data.date}</time>
            {<span>•</span>}
            {
              <span>{`${getReadingTime(content, data.techHeavy)} min read`}</span>
            }
          </div>
        </header>

        <MdxContent source={content} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
