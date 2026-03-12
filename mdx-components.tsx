import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import BlogCallout from "./components/mdx/blog-callout";
import ProTip from "./components/mdx/pro-tip";
import TLDR from "./components/mdx/tldr";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export const mdxComponents = {
  // Allows customizing built-in components, e.g. to add styling.
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
      className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground marker:text-primary"
      {...props}
    />
  ),

  li: (props: HTMLAttributes<HTMLLIElement>) => <li className="" {...props} />,
  
  a: ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    // Check if the link starts with a slash (internal route) or a hash (page scroll)
    const isInternalLink =
      href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
      return (
        <Link
          href={href}
          target="_blank"
          className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          {...props}
        />
      );
    }

    // If it's an external link, use a standard <a> tag
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer" // Added for security!
        className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        {...props}
      />
    );
  },
  
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

  code: (props: HTMLAttributes<HTMLElement>) => {
    const isInline = !('data-theme' in props);
    
    if (isInline) {
      return (
        <code
          className="bg-secondary text-primary rounded-sm px-2 py-0.5 font-mono text-sm" 
          {...props} 
        />
      );
    }

    return <code {...props} />;
  },

  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border p-4 text-sm shadow-sm"
      {...props}
    />
  ),
  
  BlogCallout,
  ProTip,
  TLDR,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
