import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import support from "../assets/support.jpg";

const Support = () => {
  return (
    <div id='support' className="w-full pt-16">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={support}
          alt=""
          className="w-full h-full object-fill mix-blend-overlay"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            {" "}
            Support{" "}
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center font-Finlandica">
            {" "}
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-center text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in
            perspiciatis delectus, consequuntur rem corrupti corporis voluptas
            ipsum temporibus modi?
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black mt-10 lg:mt-40">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 font-Finlandica"> Sales </h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, culpa.</p>
            </div>

            <div className="bg-slate-100 pl-8 py-4">
              <p className='flex items-center text-indigo-600 cursor-pointer'>
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />{" "}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 font-Finlandica"> Technical Support </h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, culpa.</p>
            </div>

            <div className="bg-slate-100 pl-8 py-4">
              <p className='flex items-center text-indigo-600 cursor-pointer'>
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />{" "}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 font-Finlandica"> Media Inquiries </h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, culpa.</p>
            </div>

            <div className="bg-slate-100 pl-8 py-4">
              <p className='flex items-center text-indigo-600 cursor-pointer'>
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
