import FourthMainRightChart from "./FourthMainRightChart";
import { Icon } from "@iconify/react";

const FourthMainRight = () => {
  const fourthMainRightContent = [
    {
      id: 1,
      icon: <Icon icon="ion:wallet" color="#fff" width="12" />,
      title: "Users",
      number: "32,984",
    },
    {
      id: 2,
      icon: <Icon icon="maki:rocket" color="#fff" width="12" />,
      title: "Clicks",
      number: "2,42M",
    },
    {
      id: 3,
      icon: <Icon icon="fa-solid:shopping-cart" color="#fff" width="12" />,
      title: "Sales",
      number: "2,400$",
    },
    {
      id: 4,
      icon: <Icon icon="fa6-solid:wrench" color="#fff" width="12" />,
      title: "Items",
      number: "320",
    },
  ];

  return (
    <div className="w-[49%] bg-gradient h-[27rem] rounded-2xl backdrop-blur-[120px] px-5 pt-7">
      <FourthMainRightChart />
      <div className="flex flex-col mt-6">
        <div className="mt-3">
          <h3 className="font-bold text-xl text-white">Active Users</h3>
          <div>
            <span className="text-green-500 mr-1 font-bold text-sm">(+23)</span>
            <span className="text-[#86848e] text-sm">than last week</span>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          {fourthMainRightContent.map((item) => (
            <div className="flex flex-col w-[19%]" key={item.id}>
              <div className="flex items-center">
                <div className="bg-[#0075ff] p-1.5 rounded-md">{item.icon}</div>
                <span className="text-[#86848e] font-bold text-sm ml-2">{item.title}</span>
              </div>
              <div className="flex flex-col justify-between mt-3">
                <h3 className="font-bold text-white text-lg mb-1">{item.number}</h3>
                <div className="w-full h-[2px] bg-gray-700 flex items-center">
                  <div className="w-7/12 h-[6px] bg-[#0075ff] rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthMainRight;
