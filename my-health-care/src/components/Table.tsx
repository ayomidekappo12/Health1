"use client";
import React from "react";

interface TableData {
  name: string;
  Description: string;
  status: string;
}

interface TableProps {
  data: TableData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="flex flex-col py-6 lg:py-6">
      <div className="flex flex-row items-center justify-between bg-[#F6F7F8] rounded-3xl w-full lg:w-[45.375rem] lg:h-[3rem] opacity-100 mb-2 lg:mb-0 mr-1 lg:mx-1.5 px-4 py-6">
        <p className="flex-[1.2] text-left body-emphasized-14pt text-[#072635]">
          Problem/Diagnosis
        </p>
        <p className="flex-[2.2] lg:flex-[2.3] text-left body-emphasized-14pt text-[#072635]">
          Description
        </p>
        <p className="flex-[0.5] lg:flex-[0.4] text-left body-emphasized-14pt text-[#072635] pr-6">
          Status
        </p>
      </div>

      <div className="bg-white divide-y divide-gray-50 space-y-8 lg:space-y-4">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.name}
              className="flex flex-row items-center justify-between px-6"
            >
              <p className="flex-[1] pt-3 body-regular-14 text-[#072635] leading-10 lg:leading-6">
                {item.name}
              </p>
              <p className="flex-[2] body-regular-14 pt-3 text-[#072635] leading-10 lg:leading-6">
                {item.Description}
              </p>
              <p className="flex-[0.5] body-regular-14 pt-3 text-[#072635] leading-10 lg:leading-6">
                {item.status}
              </p>
            </div>
          ))
        ) : (
          <div>
            <p className="px-6 py-4 text-center body-regular-14 text-[#072635]">
              No data available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
