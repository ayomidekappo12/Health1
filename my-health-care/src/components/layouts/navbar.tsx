"use client";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavItemProps {
  src: string;
  text: string;
  href: string;
}

export default function navMenu() {
  return (
    <div className="flex w-full mx-auto shrink-0 overflow-hidden">
      <div className="flex w-full h-fit mt-5 bg-white rounded-3xl mx-4 font-Manrope items-center px-8 justify-between overflow-hidden">
        <div className="flex items-center">
          <Image
            src="/images/TestLogo.svg"
            alt="logo"
            width={211}
            height={48}
            className="py-3 mr-12"
            loading="lazy"
          />
        </div>

        <div className="hidden md:flex  items-center gap-4 md:gap-8 body-emphasized-14pt bold justify-center">
          <NavItem
            src="/images/home_FILL0_wght300_GRAD0_opsz24.svg"
            text="Overview"
            href="/"
          />
          <NavItem
            src="/images/group_FILL0_wght300_GRAD0_opsz24.svg"
            text="Patients"
            href="/patients"
          />
          <NavItem
            src="/images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
            text="Schedule"
            href="/schedule"
          />
          <NavItem
            src="/images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
            text="Message"
            href="/message"
          />
          <NavItem
            src="/images/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
            text="Transactions"
            href="/transactions"
          />
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex flex-row items-center space-x-2 py-2">
                <svg
                  className="w-18 h-16 me-2 text-[#072635] rounded-2xl p-1 bg-gray-100 shrink-0 bg-transparent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="manBold"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 11.0006H0V13.0006H24V11.0006Z" fill="manBold" />
                  <path d="M24 4.00031H0V6.0003H24V4.00031Z" fill="manBold" />
                  <path d="M24 18H0V20H24V18Z" fill="manBold" />
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full body-emphasized-14pt bg-white divide-y divide-gray-100 rounded-lg shadow">
              <ul className="py-2 body-emphasized-14pt font-bold">
                <li>
                  <Link
                    href="/patients"
                    className="block px-5 py-3 body-emphasized-14pt hover:bg-gray-100"
                  >
                    Patients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schedule"
                    className="block px-5 py-3 body-emphasized-14pt hover:bg-gray-100"
                  >
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    href="/message"
                    className="block px-5 py-3 body-emphasized-14pt hover:bg-gray-100"
                  >
                    Message
                  </Link>
                </li>
                <li>
                  <Link
                    href="/transactions"
                    className="block px-5 py-3 body-emphasized-14pt hover:bg-gray-100"
                  >
                    Transactions
                  </Link>
                </li>
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/senior-woman/senior-woman-doctor.png"
              alt="profile"
              width={44}
              height={44}
              className="rounded-full bg-transparent"
              loading="lazy"
            />
            <div className="flex flex-col">
              <p className="font-Manrope body-emphasized-14pt bold">
                Dr. Jose Simmons
              </p>
              <p className="font-Manrope body-secondary-info-14pt">
                General Practitioner
              </p>
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/settings_FILL0_wght300_GRAD0_opsz24.svg"
              alt="settings"
              width={19}
              height={20}
              loading="lazy"
              className="bg-transparent shrink-0"
            />
            <Image
              src="/images/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
              alt="more options"
              width={4}
              height={18}
              loading="lazy"
              className="bg-transparent shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ src, text, href }: NavItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href;

  return (
    <div
      className={`${
        isActive
          ? "bg-[#01F0D0] body-emphasized-14pt bold rounded-full cursor-pointer py-3 px-5"
          : "body-emphasized-14pt bold"
      } flex items-center gap-2 cursor-pointer body-emphasized-14pt bold`}
      onClick={() => router.push(href)}
    >
      <Image
        src={src}
        alt={text}
        width={16}
        height={17}
        loading="lazy"
        className="bg-transparent shrink-0"
      />
      <p className={`font-Manrope body-emphasized-14pt bold shrink-0`}>
        {text}
      </p>
    </div>
  );
}
