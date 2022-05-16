import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import ThirdMainRightChart from "./ThirdMainRightChart";

const ThirdMainRight = () => {
  return (
    <div className="w-[49%] bg-gradient h-[20rem] rounded-2xl backdrop-blur-[120px] px-5 pt-7">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg text-white">Referral Tracking</h3>
        <Link to="/">
          <div className="bg-[#22234b] p-2 rounded-xl">
            <Icon
              icon="charm:menu-meatball"
              width="23"
              color="rgb(0, 117, 255)"
            />
          </div>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex flex-col justify-between">
          <div
            className="flex flex-col w-[220px] mb-4 rounded-2xl p-4"
            style={{
              background:
                "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
            }}
          >
            <span className="text-[14px] text-[#86848e]">Invited</span>
            <h3 className="font-bold text-white text-lg mt-3">145 people</h3>
          </div>
          <div
            className="flex flex-col w-[220px] rounded-2xl p-4"
            style={{
              background:
                "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
            }}
          >
            <span className="text-[14px] text-[#86848e]">Bonus</span>
            <h3 className="font-bold text-white text-lg mt-3">1,465</h3>
          </div>
        </div>
        <ThirdMainRightChart />
      </div>
    </div>
  );
};

export default ThirdMainRight;
