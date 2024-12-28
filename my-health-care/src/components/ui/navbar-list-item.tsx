import { cn } from "@/lib/utils";
import { ReactElement } from "react";

interface NavBarListItemProps {
  title: string;
  action?: () => void;
  className?: string;
  icon?: ReactElement<any>;
}

export const NavBarListItem = ({
  title,
  action,
  className,
  icon,
}: NavBarListItemProps) => {
  return (
    <div
      onClick={action}
      className={cn(
        "hover:bg-[#F3F3F3] cursor-pointer flex justify-between items-center px-4 border-b border-gray-50",
        className
      )}
    >
      <p className="text-sm text-[#1e1e1e] font-regular py-3">{title}</p>

      {icon}
    </div>
  );
};
