import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const MenuItem = () => {
  const menuItemContentOne = [
    {
      id: 1,
      icon: <Icon icon="fa-solid:home" color="rgb(0, 117, 255)" width="19" />,
      title: "Dashboard",
    },
    {
      id: 2,
      icon: <Icon icon="bx:bar-chart" color="rgb(0, 117, 255)" width="19" />,
      title: "Tables",
    },
    {
      id: 3,
      icon: (
        <Icon icon="bi:credit-card-fill" color="rgb(0, 117, 255)" width="19" />
      ),
      title: "Billing",
    },
    {
      id: 4,
      icon: (
        <Icon icon="fa6-solid:wrench" color="rgb(0, 117, 255)" width="19" />
      ),
      title: "RTL",
    },
  ];
  const menuItemContentTwo = [
    {
      id: 1,
      icon: <Icon icon="bxs:user" color="rgb(0, 117, 255)" width="19" />,
      title: "Profile",
    },
    {
      id: 2,
      icon: (
        <Icon
          icon="fluent:document-32-filled"
          color="rgb(0, 117, 255)"
          width="19"
        />
      ),
      title: "Sign In",
    },
    {
      id: 3,
      icon: <Icon icon="maki:rocket" color="rgb(0, 117, 255)" width="19" />,
      title: "Sign Up",
    },
  ];

  return (
    <div className="flex justify-between flex-col">
      {menuItemContentOne.map((item) => (
        <Link to="/" className="mb-5 mx-7" key={item.id}>
          <div className="flex items-center">
            <div className="bg-gray-800 opacity-90 p-1.5 rounded-xl mr-3">
              {item.icon}
            </div>
            <h2 className="text-white text-[15px]">{item.title}</h2>
          </div>
        </Link>
      ))}
      <h2 className="text-white font-bold text-sm mb-5 mx-7">ACCOUNT PAGES</h2>
      {menuItemContentTwo.map((item) => (
        <Link to="/" className="mb-5 mx-7" key={item.id}>
          <div className="flex items-center">
            <div className="bg-gray-800 opacity-90 p-1.5 rounded-xl mr-3">
              {item.icon}
            </div>
            <h2 className="text-white text-[15px]">{item.title}</h2>
          </div>
        </Link>
      ))}
      <div className="bg-[url(https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/sidenav-card-background.00019e46.png)] w-[88%] rounded-2xl mx-auto h-[9.5rem] flex flex-col p-3">
        <div className="bg-white w-[2.2rem] rounded-xl p-2">
          <Icon icon="clarity:star-solid" color="rgb(0, 117, 255)" width="19" />
        </div>
        <div className="flex flex-col mt-3">
          <h3 className="text-white text-[15px]">Need help?</h3>
          <span className="text-white text-[12px]">Please check our docs</span>
        </div>
        <Link
          to="/"
          className="bg-black text-white  bg-opacity-60 text-[12px] text-center rounded-xl px-3 py-1 mt-3"
        >
          DOCUMENTATION
        </Link>
      </div>
      <Link
        to="/"
        className="w-[88%] mx-auto text-center my-5 text-[13px] text-white font-bold py-2 rounded-xl hover:scale-105 transition-all duration-300"
        style={{
          backgroundImage:
            "linear-gradient(310deg, rgb(0, 117, 255), rgb(33, 212, 253))",
        }}
      >
        Upgrade to PRO
      </Link>
    </div>
  );
};

export default MenuItem;
