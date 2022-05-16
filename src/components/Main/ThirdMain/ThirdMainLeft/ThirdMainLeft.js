import ThirdMainLeftChart from "./ThirdMainLeftChart";

const ThirdMainLeft = () => {
  return (
    <div className="w-[49%] bg-gradient h-[20rem] rounded-2xl backdrop-blur-[120px] pl-5 pt-7 relative">
      <div>
        <h3 className="text-xl font-bold text-white">Satisfaction Rate</h3>
        <p className="text-[15px] text-[#86848e]">From all projects</p>
      </div>
      <ThirdMainLeftChart />
      <div
        style={{
          background:
            "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
        }}
        className="flex justify-between w-[80%] px-4 pt-4 pb-3 top-[13rem] right-[3rem] absolute rounded-2xl"
      >
        <span className="text-[12px] text-[#86848e]">0%</span>
        <div>
          <h2 className="font-bold text-white text-3xl">95%</h2>
          <span className="text-[12px] text-[#86848e]">Based on likes</span>
        </div>
        <span className="text-[12px] text-[#86848e]">100%</span>
      </div>
    </div>
  );
};

export default ThirdMainLeft;
