import Link from "next/link";

interface BlogCalloutProps {
  children?: React.ReactNode;
}

export default function BlogCallout({ children }: BlogCalloutProps) {
  return (
    <div className="my-10 overflow-hidden rounded-xl border bg-background shadow-sm">

      <div className="border-b bg-accent/30 px-6 py-3">
        <h4 className="m-0 flex items-center gap-2 text-sm font-semibold text-foreground">
            If you enjoyed this post...
        </h4>
      </div>

      <div className="px-6 py-5 text-sm sm:text-base text-muted-foreground">
        {children ? (
          children
        ) : (
          <p className="m-0 leading-relaxed">
            You might like to check out my{" "}
            <Link 
              href="/blogs" 
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              other blogs
            </Link>{" "}
            on this site. I regularly write about React, Next.js, Go, and building full-stack applications.
          </p>
        )}
      </div>
    </div>
  );
}