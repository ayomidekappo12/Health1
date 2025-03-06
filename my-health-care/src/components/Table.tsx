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
    <div className="flex flex-col py-6 my-1">
      <div className="flex flex-row items-center justify-between bg-[#F6F7F8] rounded-3xl w-full lg:w-[45.375rem] h-fit opacity-100 mb-4 lg:mb-1 mr-1 lg:mx-1.5 px-4 lg:py-4 py-10">
        <p className="flex-[1.2] text-left body-emphasized-14pt text-[#072635]">
          Problem/Diagnosis
        </p>
        <p className="flex-[1.4] lg:flex-[1.9] text-left body-emphasized-14pt text-[#072635]">
          Description
        </p>
        <p className="flex-[0.5] lg:flex-[0.3] text-left body-emphasized-14pt text-[#072635] pr-6">
          Status
        </p>
      </div>

      <div className="bg-white divide-y divide-gray-50 space-y-8 lg:space-y-4">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.name}
              className="flex flex-row items-center justify-between px-6 py-8 space-y-6 lg:space-y-0 lg:py-0 lg:mt-0"
            >
              <p className="flex-[0.9] lg:flex-[1] pt-3 body-regular-14 text-[#072635] leading-relaxed lg:leading-6">
                {item.name}
              </p>
              <p className="flex-[1] lg:flex-[1.6] body-regular-14 pt-3 text-[#072635] leading-relaxed lg:leading-6">
                {item.Description}
              </p>
              <p className="flex-[0.5] lg:flex-[0.4] body-regular-14 pt-3 text-[#072635] leading-relaxed lg:leading-6">
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
