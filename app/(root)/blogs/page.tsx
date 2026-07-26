import BlogCard from "@/components/blogs/blog-card";
import PageContainer from "@/components/common/page-container";
import { allBlogs } from "@/config/blogs";
import { pagesConfig } from "@/config/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pagesConfig.blogs.metadata.title,
  description: pagesConfig.blogs.metadata.description,
};

export default function BlogPage() {
  return (
    <PageContainer
      title={pagesConfig.blogs.title}
      description={pagesConfig.blogs.description}
    >
      <div className="w-full bg-muted py-10 px-2 md:px-12 my-8 rounded-3xl">
        <BlogCard blogs={allBlogs} />
      </div>
    </PageContainer>
  );
}
