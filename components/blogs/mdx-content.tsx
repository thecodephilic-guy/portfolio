import { MDXRemote } from "next-mdx-remote/rsc";
import { HTMLAttributes } from "react";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import BlogCallout from "./blog-callout";
import ProTip from "./pro-tip";
import TLDR from "./tldr";

const mdxComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-8 mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      {...props}
    />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-6 mb-4 text-xl font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="[&:not(:first-child)]:mt-2 mb-4 text-muted-foreground"
      {...props}
    />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="my-2 ml-4 list-disc text-muted-foreground marker:text-primary"
      {...props}
    />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="my-6 ml-6 list-decimal space-y-2 text-muted-foreground marker:text-primary"
      {...props}
    />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => <li className="" {...props} />,
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      {...props}
    />
  ),
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground"
      {...props}
    />
  ),

  table: (props: HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border">
      <table
        className="w-full text-left text-sm border-collapse m-0"
        {...props}
      />
    </div>
  ),
  th: (props: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border-b bg-muted/50 px-4 py-3 font-semibold text-foreground m-0"
      {...props}
    />
  ),
  td: (props: HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b px-4 py-3 text-muted-foreground m-0" {...props} />
  ),
  tr: (props: HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className="even:bg-muted/20 transition-colors hover:bg-muted/30 m-0"
      {...props}
    />
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre 
      className="my-6 overflow-x-auto rounded-xl border p-5 text-sm shadow-sm" 
      {...props} 
    />
  ),

  BlogCallout,
  ProTip,
  TLDR,
};

interface MdxContentProps {
  source: string;
}

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none w-full">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrettyCode] } }}
      />
    </div>
  );
}
