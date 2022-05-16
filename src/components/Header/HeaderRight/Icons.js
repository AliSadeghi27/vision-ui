import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import SettingMenu from "../SettingMenu/SettingMenu";
import NotificationBar from "./NotificationBar";

const Icons = () => {
  const [notificationBar, setNotificationBar] = useState(false);
  const [settingMenu, setSettingMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const notificationContent = [
    {
      id: 1,
      img: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/team-2.5e013d90.jpg",
      title: "New message",
      name: "from Laur",
      time: "13 minutes ago",
    },
    {
      id: 2,
      img: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png",
      title: "New album",
      name: "by Travis Scott",
      time: "1 day",
    },
    {
      id: 3,
      img: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png",
      title: "Payment",
      name: "successfully completed",
      time: "2 days",
    },
  ];
  const exitSettingMenu = (
    <Link to="/" onClick={() => setSettingMenu(false)}>
      <Icon icon="bi:x" color="#344767" width="30" className="mr-12" />
    </Link>
  );
  const exitMenu = (
    <Link
      to="/"
      className="flex justify-end mr-3 mt-3"
      onClick={() => setMenu(false)}
    >
      <Icon icon="bi:x" color="#344767" width="30" />
    </Link>
  );

  return (
    <div className="flex justify-between items-center w-[9.7rem] ml-3 relative">
      <div>
        <Link to="/" className="flex justify-between items-center">
          <Icon icon="carbon:user-avatar-filled" color="#fff" />
          <span className="text-white ml-1">Sign in</span>
        </Link>
      </div>
      <Link to="/" onClick={() => setMenu(!menu)}>
        <Icon icon={menu ? "eva:menu-fill" : "ic:sharp-menu-open"} color="#fff" />
      </Link>
      {menu && <Menu exit={exitMenu} />}
      <Link to="/" onClick={() => setSettingMenu(true)}>
        <Icon icon="ci:settings-filled" color="#fff" />
      </Link>
      {settingMenu && <SettingMenu exit={exitSettingMenu} />}
      <Link to="/" onClick={() => setNotificationBar(!notificationBar)}>
        <Icon icon="ci:notification" color="#fff" />
      </Link>
      {notificationBar && (
        <div
          className="absolute w-[19rem] flex flex-col justify-between rounded-2xl h-[14.7rem] top-12 -right-3 border border-[#86848e]"
          style={{
            background:
              "linear-gradient(126.97deg, rgb(5, 21, 63) 28.26%, rgb(7, 37, 97) 91.2%)",
          }}
        >
          {notificationContent.map((item) => (
            <NotificationBar
              key={item.id}
              img={item.img}
              name={item.name}
              title={item.title}
              time={item.time}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Icons;
