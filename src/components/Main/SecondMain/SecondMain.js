import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const SecondMain = () => {
  return (
    <div className="bg-[url(https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/cardimgfree.5771cbbb.png)] h-[340px] mx-7 bg-cover bg-center rounded-3xl pl-5 pt-10">
      <p className="text-[15px] text-[#86848e]">Welcome back,</p>
      <h2 className="text-3xl mt-3 mb-5 font-bold text-white">Mark Johnson</h2>
      <p className="text-[17px] text-[#86848e]">Glad to see you again!</p>
      <p className="text-[17px] text-[#86848e]">Ask me anything.</p>
      <Link to="/" className="flex justify-start w-[9rem] text-white items-center mt-24 text-sm group">
        <span>Tap to record</span>
        <Icon icon="akar-icons:arrow-right" color="#fff" className=" ml-2 group-hover:ml-5 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default SecondMain;
