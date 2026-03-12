import { mdxComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

interface MdxContentProps {
  source: string;
}

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none w-full">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, { theme: "one-dark-pro" }]],
          },
        }}
      />
    </div>
  );
}
