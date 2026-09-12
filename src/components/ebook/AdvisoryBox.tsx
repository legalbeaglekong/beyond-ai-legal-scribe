import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AdvisoryBoxProps {
  title?: string;
  children: ReactNode;
  variant?: "default" | "alert" | "cabotage" | "feature";
}

const AdvisoryBox = ({ title, children, variant = "default" }: AdvisoryBoxProps) => {
  const baseClasses = "p-4 my-4 text-sm rounded-sm";
  
  const variantClasses = {
    default: "bg-cream border-l-[3px] border-sage text-foreground",
    alert: "bg-pink-50 border-l-[3px] border-berry",
    cabotage: "bg-foreground text-white",
    feature: "bg-cream border border-gray-200 p-4 mt-5",
  };

  const titleClasses = {
    default: "text-foreground",
    alert: "text-berry",
    cabotage: "text-sage border-b border-white/20 pb-2",
    feature: "text-foreground",
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant])}>
      {title && (
        <span className={cn("font-display font-bold text-sm block mb-1", titleClasses[variant])}>
          {title}
        </span>
      )}
      {children}
    </div>
  );
};

export default AdvisoryBox;
