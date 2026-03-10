import { ImageResponse } from "next/og";
import { allBlogs } from "@/config/blogs"; 
export const alt = "Blog Post Cover";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  
  const blog = allBlogs.find((b) => b.href === `/blogs/${slug}`);

  if (!blog) {
    return new ImageResponse(
      (
        <div tw="flex h-full w-full items-center justify-center bg-zinc-950 text-white text-6xl font-bold">
          Post Not Found
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-background p-16 justify-between border-b-[12px] border-primary">
        
        {/* Top Section: Title and Snippet */}
        <div tw="flex flex-col">
          <h1 tw="text-7xl font-bold text-primary leading-tight tracking-tighter mb-4">
            {blog.title}
          </h1>
          <p tw="text-3xl text-muted leading-normal">
            {blog.snippet}
          </p>
        </div>
        
        {/* Bottom Section: Author, Date, and Branding */}
        <div tw="flex justify-between items-end w-full">
          <div tw="flex items-center text-3xl text-forground-300">
            {/* Hardcoded Sohail or mapped from blog.author! */}
            <span tw="font-bold text-primary mr-4">{blog.author || "Sohail"}</span> 
            <span tw="text-primary mr-4">•</span> 
            <span>{blog.date.toString()}</span>
          </div>
          
          <div tw="flex text-3xl font-bold text-zinc-500">
            Blog
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}