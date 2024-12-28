import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IconButtonProps {
  value?: string;
  href?: string;
  text?: string;
  imageSrc?: string;
  action?: () => void;
  className?: string;
  disabled?: boolean;
  width?: number;
  height?: number;
}

const IconButton = ({
  value,
  text,
  imageSrc,
  action,
  className,
  disabled = false,
  width = 44,
  height = 44,
}: IconButtonProps) => {
  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (action) {
      action();
    }
  };

  return (
    <div className="flex items-center py-2">
      <Button
        className={cn(
          "flex items-center font-Manrope bg-white space-x-4 opacity-100",
          className
        )}
        onClick={handleAction}
        type="button"
        disabled={disabled}
        aria-label={text ? `${text} ${value ?? ""}` : "Icon button"}
        title={text ? `${text} ${value ?? ""}` : "Icon button"}
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="icon"
            width={width}
            height={height}
            className="me-2"
          />
        )}
        <div className="flex flex-col">
          <p className="font-Manrope body-emphasized-14pt lg:text-sm font-medium text-[#072635] text-left">
            {value}
          </p>
          <p className="font-Manrope body-emphasized-14pt lg:text-base font-semibold text-[#072635] text-left">
            {text}
          </p>
        </div>
      </Button>
    </div>
  );
};

export default IconButton;
