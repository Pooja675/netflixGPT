import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-12 text-xl flex items-center rounded-lg hover:bg-opacity-80 ">
          <FaPlay className="fill-clack mr-2" /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-10 text-xl flex items-center bg-opacity-50 rounded-lg">
        <IoMdInformationCircleOutline className="fill-white mr-2"/> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
