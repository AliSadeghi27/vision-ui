import { Icon } from "@iconify/react";
import Icons from "./Icons";

const HeaderRight = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-start border border-[#e2e8f04d] bg-[#0F1535] items-center py-[.35rem] px-2 rounded-2xl">
        <Icon
          icon="ant-design:search-outlined"
          color="#e2e8f04d"
          width="19"
          className="mr-2"
        />
        <input
          type="text"
          className="border-none outline-none transition-all duration-200 bg-transparent text-white placeholder:text-[.75rem] focus:ml-2"
          placeholder="Type here..."
        />
      </div>
      <Icons />
    </div>
  );
};

export default HeaderRight;
