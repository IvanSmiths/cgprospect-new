import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <navbar className="navbar">
      <div>
        <Link href="/">
          <a>
            <span>HOME</span>
          </a>
        </Link>
      </div>

      <div>
        <Search />
      </div>
    </navbar>
  );
};

export default Navbar;
