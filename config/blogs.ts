import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";

export interface blogsInterface {
  title: string;
  snippet: string;
  date: Date;
  tags: string[];
  href: string;
  author: string;
  readingTime: string;
  myFav: boolean;
}

const blogsDirectory = path.join(process.cwd(), "content", "blogs");

const files = readdirSync(blogsDirectory);
const blogs = files
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => {
    const filePath = path.join(blogsDirectory, file);
    const fileContent = readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContent);
    const isTechHeavy = data.techHeavy;

    const readingTime = getReadingTime(content, isTechHeavy);

    const slug = file.replace(".mdx", "");

    return {
      title: data.title,
      snippet: data.snippet,
      date: data.date,
      tags: data.tags || [],
      href: `/blogs/${slug}`,
      author: data.author,
      readingTime: `${readingTime} min read`,
      myFav: data.myFav,
    } as blogsInterface;
  });

export const allBlogs = blogs.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getBlogContent(slug: string) {
  const filePath = path.join(blogsDirectory, `${slug}.mdx`);
  const fileContent = readFileSync(filePath, "utf8");
  return matter(fileContent);
}

export function getReadingTime(content: string, techHeavy: boolean): number {
  const wordsPerMinute = techHeavy ? 130 : 200;

  const wordCount = content.trim().split(/\s+/g).length;
  const minutes = wordCount / wordsPerMinute;
  const readTime = Math.ceil(minutes);

  return readTime;
}
