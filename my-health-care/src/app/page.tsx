"use client";
import SideBar from "./health-page/sidebar/page";
import Profile from "./health-page/profile/page";
import Page from "@/app/health-page/page";


export default function HomePage() {
  return (
    <main className="w-full justify-between mt-6 mb-4 flex flex-col lg:flex-row space-y-14 lg:space-y-0 overflow-hidden">
      <div className="lg:order-last order-first flex flex-col container lg:px-0">
        <Profile />
      </div>
      <div className="order-none flex flex-col container lg:px-0">
        <SideBar />
      </div>
      <div>
        <Page />
      </div>
    </main>
  );
}
