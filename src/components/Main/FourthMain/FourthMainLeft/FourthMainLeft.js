import FourthMainLeftChart from "./FourthMainLeftChart";

const FourthMainLeft = () => {
  return (
    <div className="w-[49%] bg-gradient h-[27rem] rounded-2xl backdrop-blur-[120px] px-5 pt-7">
      <div className="flex flex-col justify-between">
        <h3 className="text-white font-bold text-lg">Sales Overview</h3>
        <div>
          <span className="mr-1 text-green-500">+5% more</span>
          <span className="text-[#86848e]">in 2021</span>
        </div>
      </div>
      <FourthMainLeftChart />
    </div>
  );
};

export default FourthMainLeft;
