"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  Users,
  Calendar,
  SquareLibrary,
  CreditCard,
  EllipsisVertical,
  Menu,
  Settings,
} from "lucide-react";
import Image from "next/image";
import React from "react";

interface NavItemProps {
  text: string;
  href: string;
  icon: React.ComponentType<any>;
}

const navItems: NavItemProps[] = [
  { text: "Overview", href: "/", icon: Home },
  { text: "Patients", href: "/patients", icon: Users },
  { text: "Schedule", href: "/schedule", icon: Calendar },
  { text: "Records", href: "/records", icon: SquareLibrary },
  { text: "Transactions", href: "/transactions", icon: CreditCard },
];

const MedicalHeader = () => {
  return (
    <header className="bg-white border-b border-border md:px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/TestLogo.svg"
            alt="logo"
            width={211}
            height={48}
            className="py-3 mr-12"
            loading="lazy"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-white">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="/images/senior-woman/senior-woman-doctor.png"
              alt="Dr. Jose Simmons"
            />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <p className="font-Manrope body-bold">Dr. Jose Simmons</p>
            <p className="font-Manrope body-secondary">General Practitioner</p>
          </div>
          <div className="sm:flex border-l border-gray-300 h-10"></div>
          <Button className="flex items-center space-x-1" size="sm">
            <Settings className="w-6 h-6" />
            <EllipsisVertical className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MedicalHeader;

function NavItem({ text, href, icon: Icon }: NavItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href;

  return (
    <Button
      className={`${
        isActive
          ? "bg-active-bg-1 text-white body-bold rounded-full py-3 px-5"
          : "body-bold"
      } flex items-center gap-2 hover:text-white hover:bg-active-bg-1 justify-start w-full md:w-auto`}
      onClick={() => router.push(href)}
    >
      <Icon className="w-5 h-5 shrink-0" />
      <p className="font-Manrope body-bold">{text}</p>
    </Button>
  );
}
