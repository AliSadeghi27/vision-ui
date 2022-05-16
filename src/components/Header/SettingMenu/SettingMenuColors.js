import { Link } from "react-router-dom";

const SettingMenuColors = () => {
  return (
    <div className="flex">
      <Link
        to="/"
        className="rounded-full border border-white w-6 h-6 hover:border-gray-500 transition-all duration-300"
        style={{
          backgroundImage:
            "linear-gradient(310deg, rgb(67, 24, 255), rgb(159, 122, 234))",
        }}
      ></Link>
      <Link
        to="/"
        className="rounded-full border border-white w-6 h-6 ml-2 hover:border-gray-500 transition-all duration-300"
        style={{
          backgroundImage:
            "linear-gradient(310deg, rgb(0, 117, 255), rgb(33, 212, 253))",
        }}
      ></Link>
      <Link
        to="/"
        className="rounded-full border border-white w-6 h-6 ml-2 hover:border-gray-500 transition-all duration-300"
        style={{
          backgroundImage:
            "linear-gradient(310deg, rgb(1, 181, 116), rgb(201, 251, 213))",
        }}
      ></Link>
      <Link
        to="/"
        className="rounded-full border border-white w-6 h-6 ml-2 hover:border-gray-500 transition-all duration-300"
        style={{
          backgroundImage:
            "linear-gradient(310deg, rgb(245, 57, 57), rgb(251, 207, 51))",
        }}
      ></Link>
      <Link
        to="/"
        className="rounded-full border border-white w-6 h-6 ml-2 hover:border-gray-500 transition-all duration-300"
        style={{
          backgroundImage:
            "linear-gradient(310deg, rgb(245, 60, 43), rgb(245, 60, 43))",
        }}
      ></Link>
    </div>
  );
};

export default SettingMenuColors;
