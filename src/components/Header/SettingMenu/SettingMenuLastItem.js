import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SettingMenuLastItem = () => {
  return (
    <div className="flex flex-col mx-7">
      <div className="flex flex-col">
        <Link
          to="/"
          className="w-full rounded-xl py-3 px-6 mb-4 bg-sky-600 text-white text-[12px] font-bold text-center hover:scale-105 transition-all duration-200"
        >
          FREE DOWNLOAD
        </Link>
        <Link
          to="/"
          className="w-full rounded-xl py-3 px-6 text-[12px] font-bold text-center bg-transparent border border-sky-600 text-sky-600 hover:scale-105 transition-all duration-200 hover:border-sky-700 hover:text-sky-700"
        >
          VIEW DOCUMENTATION
        </Link>
        <div>
          <Link to="/"></Link>
          <Link to="/"></Link>
        </div>
      </div>
      <div className="flex w-full justify-center mt-4">
        <Link to="/" className="bg-gray-100">
          <div className="flex items-center px-2 py-1 border-r border-r-gray-400">
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="octicon octicon-star"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            <span className="ml-1 text-[12px] font-bold">Star</span>
          </div>
        </Link>
        <Link
          to="/"
          className="bg-gray-100 px-2 text-[11px] items-center flex font-bold"
        >
          20
        </Link>
      </div>
      <div className="flex flex-col mx-7 mt-8">
        <div className="flex justify-center">
          <h2 className="text-white font-bold">Thank you for sharing!</h2>
        </div>
        <div className="flex mt-2 justify-around">
          <Link to="/" className="flex mr-3 items-center bg-gray-700 opacity-90 px-5 py-2 rounded-lg">
            <Icon icon="akar-icons:twitter-fill" color="#fff" className="mr-2" />
            <span className="text-white text-[13px] font-bold">Tweet</span>
          </Link>
          <Link to="/" className="flex items-center bg-gray-600 opacity-90 px-5 py-2 rounded-lg">
            <Icon icon="ant-design:facebook-filled" color="#fff" className="mr-2" />
            <span className="text-white text-[13px] font-bold">Share</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingMenuLastItem;
