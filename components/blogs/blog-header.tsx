import { Icons } from "../common/icons";

interface BlogHeaderProps {
  title: string;
  author: string;
  date: string;
  readingTime: number;
}

export default function BlogHeader({
  title,
  author,
  date,
  readingTime,
}: BlogHeaderProps) {
  return (
    <header className="mb-8 border-b pb-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        {title}
      </h1>
      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-1.5 min-w-0">
          <Icons.pen size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
          {author && <span>{author}</span>}
        </div>
        {author && <span>•</span>}
        <time dateTime={date}>{date}</time>
        {<span>•</span>}
        {<span>{`${readingTime} min read`}</span>}
      </div>
    </header>
  );
}
