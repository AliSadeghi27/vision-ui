import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const HeaderLeft = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center text-white text-sm">
        <Link to="/">
          <Icon icon="ci:home-alt-fill" color="#86848e" />
        </Link>
        <span className="mx-2">/</span>
        <span>Dashboard</span>
      </div>
      <p className="text-white font-bold">Dashboard</p>
    </div>
  );
};

export default HeaderLeft;
