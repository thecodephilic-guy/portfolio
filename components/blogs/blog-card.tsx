"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { Icons } from "@/components/common/icons";
import { blogsInterface } from "@/config/blogs";

interface BlogCardProps {
  blogs: blogsInterface[];
}

export default function BlogCard({ blogs }: BlogCardProps) {
  const { contextSafe } = useGSAP();

  const handleMouseEnter = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -8,
      scale: 1.02,
      duration: 0.4,
      ease: "power3.out",
      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)",
      overwrite: "auto",
    });
  });

  const handleMouseLeave = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.7)",
      clearProps: "boxShadow", 
      overwrite: "auto",
    });
  });

  return (
    <div className="mx-auto grid justify-center gap-4 grid-cols-1 items-stretch">
      {blogs.map((blog, id) => (
        <Link
          href={blog.href}
          key={id} // Removed target="_blank" for smooth internal Next.js routing
          className="w-full min-w-0 h-full"
        >
          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-lg border border-border/50 bg-background/40 backdrop-blur-xl shadow-lg hover:bg-background/60 transition-colors duration-300 w-full h-full flex flex-col"
          >
            <Icons.externalLink
              size={35}
              className="absolute bottom-3 right-3 border border-border/50 bg-background/40 backdrop-blur-md rounded-full p-1.5 sm:p-2 cursor-pointer text-muted-foreground z-10 w-8 h-8 sm:w-10 sm:h-10"
            />

            <div className="flex min-h-[170px] flex-col justify-between rounded-md p-4 sm:p-6 pb-12 sm:pb-6 flex-grow">

              {/* Top: Title & Main Icon */}
              <div className="flex flex-row justify-between items-start gap-2 mb-4 min-w-0">
                <h3 className="font-bold flex space-x-2 items-center min-w-0 flex-1">
                  <span className="text-base sm:text-2xl min-w-0">
                    {blog.title}
                  </span>
                </h3>
                {blog.myFav && <Icons.star
                  size={18}
                  className="flex-shrink-0 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500"
                />}
              </div>

              {/* Middle: Snippet & Tags */}
              <div className="space-y-3 sm:space-y-4 min-w-0 flex-grow">
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 break-words">
                  {blog.snippet}
                </p>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] sm:text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom: Author, Date & Reading Time */}
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-muted-foreground min-w-0">
                <div className="flex items-center space-x-1.5 min-w-0">
                  <Icons.pen
                    size={14}
                    className="flex-shrink-0 sm:w-4 sm:h-4"
                  />
                  <span className="truncate">{blog.author}</span>
                </div>

                <span className="hidden sm:inline-block text-muted-foreground/50">•</span>
                <div className="flex items-center space-x-1.5 min-w-0">
                  <Icons.calender
                    size={14}
                    className="flex-shrink-0 sm:w-4 sm:h-4"
                  />
                  <span className="truncate">{blog.date.toString()}</span>
                </div>

                <span className="hidden sm:inline-block text-muted-foreground/50">•</span>
                <span className="truncate">{blog.readingTime}</span>
              </div>

            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}