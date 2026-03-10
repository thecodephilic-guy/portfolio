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
      <BlogCard blogs={allBlogs} />
    </PageContainer>
  );
}
