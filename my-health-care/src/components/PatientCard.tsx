import Image from "next/image";
import { cn } from "@/lib/utils";

interface PatientCardProps {
  imageSrc: string;
  value?: string;
  text?: string;
  age?: number;
  className?: string;
}

export default function PatientCard({
  imageSrc,
  value,
  text,
  age,
  className,
}: PatientCardProps) {
  return (
    <div className="mt-3">
      <div
        className={cn(
          "flex flex-row items-center px-3 opacity-100 gap-4",
          className
        )}
      >
        <Image
          src={imageSrc}
          alt={`${value}'s profile`}
          width={48}
          height={48}
          className="rounded-full"
          loading="lazy"
        />
        <div className="flex flex-col">
          <p className="text-left body-emphasized-14pt">{value}</p>
          <p className="text-left body-secondary-info-14pt">
            {text}, {age}
          </p>
        </div>
      </div>
    </div>
  );
}
