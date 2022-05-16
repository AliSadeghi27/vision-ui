import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FifthMainLeftTable from "./FifthMainLeftTable";

const FifthMainLeft = () => {
  const [actionMenu, setActionMenu] = useState(false);

  return (
    <div className="w-[67%] bg-gradient h-[35rem] rounded-2xl backdrop-blur-[120px] px-5 pt-7">
      <div className="flex justify-between items-center relative">
        <div>
          <h3 className="text-lg text-white font-bold mb-1">Projects</h3>
          <div className="flex justify-between items-center">
            <span className="mr-1">
              <Icon icon="el:ok-sign" color="green" width="13" />
            </span>
            <span className="mr-1 font-bold text-[#86848e] text-sm">
              30 done
            </span>
            <span className="mr-1 text-[#86848e] text-sm">this month</span>
          </div>
        </div>
        <Link to="/" onClick={() => setActionMenu(!actionMenu)}>
          <Icon icon="charm:menu-kebab" color="#86848e" width="20" />
        </Link>
        {actionMenu && (
          <div
            className="absolute w-[10rem] h-[6rem] top-5 right-5 rounded-xl border border-[#86848e]"
            style={{
              background:
                "linear-gradient(126.97deg, rgb(5, 21, 63) 28.26%, rgb(7, 37, 97) 91.2%)",
            }}
          >
            <ul className="px-3 py-1.5 space-y-2 text-sm text-[#86848e]">
              <li>
                <Link to="/">Action</Link>
              </li>
              <li>
                <Link to="/">Another action</Link>
              </li>
              <li>
                <Link to="/">Something else</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <FifthMainLeftTable />
    </div>
  );
};

export default FifthMainLeft;
