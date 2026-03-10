import { Icons } from "./icons";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <div className="flex flex-col mt-5 items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl capitalize ">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
      {title === "Blogs" && (
        <div className="mt-4 text-sm italic text-muted-foreground">
          Blogs marked with{" "}
          <Icons.star 
            size={16} 
            className="inline-block align-text-bottom mx-1 text-yellow-500 fill-yellow-500" 
          />{" "}
          are my personal favourites
        </div>
      )}
      <hr className="my-6" />
    </>
  );
}
