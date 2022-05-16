import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NotificationBar = (props) => {
  return (
    <div className="p-4">
      <Link to="/" className="flex">
        <div>
          <img
            src={props.img}
            alt={props.title}
            className="w-[37px] rounded-xl mr-5"
          />
        </div>
        <div>
          <div className="flex mb-2">
            <h3 className="text-sm text-white font-bold mr-1">{props.title}</h3>
            <span className="text-sm text-white">{props.name}</span>
          </div>
          <div className="flex items-center">
            <Icon icon="teenyicons:clock-solid" color="#fff" className="mr-2" />
            <span className="text-[12px] text-white">{props.time}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NotificationBar;
