import Image from "next/image";

interface PatientCardProps {
  imageSrc: string;
  value?: string;
  text?: string;
  age?: number;
}

export default function PatientCard({
  imageSrc,
  value,
  text,
  age,
}: PatientCardProps) {
  return (
    <div className="flex flex-row items-center justify-between mt-3">
      <div className="flex flex-row items-center px-3 opacity-100 gap-4 mt-3">
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
