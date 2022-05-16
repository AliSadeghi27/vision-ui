import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between py-10 mx-7">
      <div>
        <span className="text-white mr-3 text-sm">@ 2021, Made with ❤️</span>
        <span className="mr-1 text-white text-sm">by</span>
        <Link className="mr-1 text-white font-bold text-sm" to="/">
          Simmmple
        </Link>
        <span className="mr-1 text-white text-sm">&</span>
        <Link className="mr-1 text-white font-bold text-sm" to="/">
          Creative Tim
        </Link>
        <span className="mr-1 text-white text-sm">for a better web</span>
      </div>
      <div>
        <ul className="flex justify-between text-white w-[17rem]">
          <li>
            <Link to="/">Marketplace</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">License</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
