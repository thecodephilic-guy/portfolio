import { ReactNode } from "react";
import { Icons } from "../common/icons";

interface ProTipProps {
  title?: string;
  type?: "info" | "warning" | "success";
  children: ReactNode;
}

export default function ProTip({ title, type = "info", children }: ProTipProps) {
  // Define colors based on the type of tip
  const styles = {
    info: "border-blue-500/50 bg-blue-500/10 text-primary",
    warning: "border-amber-500/50 bg-amber-500/10 text-primary",
    success: "border-emerald-500/50 bg-emerald-500/10 text-primary",
  };

  const icons = {
    info: <Icons.info className="flex-shrink-0 sm:w-5 sm:h-5" />,
    warning: <Icons.warning className="flex-shrink-0 sm:w-5 sm:h-5 text-yellow-500" />,
    success: <Icons.success className="flex-shrink-0 sm:w-5 sm:h-5 text-green-500" />,
  };

  return (
    <div className={`my-6 rounded-lg border-l-4 px-5 py-4 ${styles[type]}`}>
      <div className="flex items-center gap-2 font-semibold mb-2">
        <span>{icons[type]}</span>
        <span>{title || (type === "warning" ? "Warning" : "Pro Tip")}</span>
      </div>
      <div className="text-sm opacity-90 m-0 [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}