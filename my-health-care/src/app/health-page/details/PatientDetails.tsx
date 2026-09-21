"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Phone, PhoneCall, VenusAndMars } from "lucide-react";

const PatientDetails = () => {
  return (
    <div className="w-80 h-auto bg-white p-6 space-y-6 mx-4 rounded-xl">
      {/* Patient Profile */}
      <div className="">
        <div className="p-6 text-center">
          <Avatar className="w-35 h-35 mx-auto mb-4">
            <AvatarImage
              src="/images/Layer2/Layer 2.png"
              alt="Jessica Taylor"
            />
            <AvatarFallback>JT</AvatarFallback>
          </Avatar>
          <h3 className="title-inner">Jessica Taylor</h3>
        </div>
      </div>

      {/* Patient Information */}
      <div className="">
        <div className="p-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f2f2f2] rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 body-secondary" />
            </div>
            <div>
              <p className="body-secondary">Date Of Birth</p>
              <p className="title-inner-details">August 23, 1996</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f2f2f2] rounded-full flex items-center justify-center">
              <VenusAndMars className="w-5 h-5 body-secondary" />
            </div>
            <div>
              <p className="body-secondary">Gender</p>
              <p className="title-inner-details">Female</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f2f2f2] rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 body-secondary" />
            </div>
            <div>
              <p className="body-secondary">Contact Info</p>
              <p className="title-inner-details">(415) 555-1234</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f2f2f2] rounded-full flex items-center justify-center">
              <PhoneCall className="w-5 h-5 body-secondary" />
            </div>
            <div>
              <p className="body-secondary">Emergency Contacts</p>
              <p className="title-inner-details">(415) 555-5678</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f2f2f2] rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 body-secondary" />
            </div>
            <div>
              <p className="body-secondary">Insurance Provider</p>
              <p className="title-inner-details">Sunrise Health Assurance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Show All Information Button */}
      <button className="w-full bg-[#01f0d0] title-inner-details py-3 rounded-xl font-medium hover:bg-[#01f0d0]/80 transition-colors cursor-pointer">
        Show All Information
      </button>
    </div>
  );
};

export default PatientDetails;