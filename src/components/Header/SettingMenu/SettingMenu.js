import SettingMenuBorder from "./SettingMenuBorder";
import SettingMenuColors from "./SettingMenuColors";
import SettingMenuLastItem from "./SettingMenuLastItem";

const SettingMenu = (props) => {
  return (
    <div
      className="absolute flex h-[100vh] flex-col w-[23rem] -top-11 -right-10"
      style={{
        background:
          "linear-gradient(127.09deg, rgba(6, 11, 40, .98) 19.41%, rgba(10, 14, 35, .98) 76.65%)",
        backdropFilter: "blur(2.625rem)",
      }}
    >
      <div className="flex justify-between w-full mx-7 mt-10">
        <div className="flex flex-col">
          <h2 className="font-bold text-white text-[1.25rem]">
            Vision UI Configurator
          </h2>
          <h3 className="font-bold text-white text-[1rem]">
            See our dashboard options.
          </h3>
        </div>
        {props.exit}
      </div>
      <SettingMenuBorder />
      <div className="flex flex-col mx-7">
        <div className="flex flex-col">
          <h3 className="font-bold text-white text-[1rem] mb-2">
            Sidenav Colors
          </h3>
          <SettingMenuColors />
        </div>
        <div className="flex flex-col mt-8">
          <h3 className="font-bold text-white text-[1rem] mb-2">
            Navbar Fixed
          </h3>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <SettingMenuBorder />
      <SettingMenuLastItem />
    </div>
  );
};

export default SettingMenu;
