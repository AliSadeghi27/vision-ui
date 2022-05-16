import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

const Header = () => {
  return (
    <header className="flex mx-7 justify-center">
      <div className="z-50 mt-7 border backdrop-blur-[2.625rem] border-white flex justify-between w-[96%] p-3 rounded-2xl fixed items-center">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
