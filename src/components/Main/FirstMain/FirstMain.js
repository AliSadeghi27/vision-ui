import { Icon } from "@iconify/react";

const FirstMain = () => {
  const firstMainContent = [
    {
      id: 1,
      title: "Today's Money",
      number: "$53,000",
      changes: "+55%",
      icon: <Icon icon="ion:wallet" color="#fff" width="20" />,
      colorStyle: "text-green-500",
    },
    {
      id: 2,
      title: "Today's Users",
      number: "2,300",
      changes: "+3%",
      icon: <Icon icon="clarity:world-solid" color="#fff" width="20" />,
      colorStyle: "text-green-500",
    },
    {
      id: 3,
      title: "New Clients",
      number: "+3,462",
      changes: "-2%",
      icon: <Icon icon="ion:document-text" color="#fff" width="20" />,
      colorStyle: "text-red-700",
    },
    {
      id: 4,
      title: "Total Sales",
      number: "$103,430",
      changes: "+5%",
      icon: <Icon icon="fa-solid:shopping-cart" color="#fff" width="20" />,
      colorStyle: "text-green-500",
    },
  ];

  return (
    <div className="flex justify-between mx-7 mt-36 flex-wrap">
      {firstMainContent.map((item) => (
        <div
          key={item.id}
          className="w-[49%] flex justify-between items-center mb-5 bg-gradient p-5 rounded-3xl backdrop-blur-[120px]"
        >
          <div>
            <p className="text-[13px] text-[#86848e]">{item.title}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-white mr-2">
                {item.number}
              </span>
              <span className={"font-bold text-sm " + item.colorStyle}>
                {item.changes}
              </span>
            </div>
          </div>
          <div className="bg-sky-600 rounded-xl p-3">{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default FirstMain;
