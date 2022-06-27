import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <navbar className="navbar">
      <Link href="/">
        <a>
          <span>HOME</span>
        </a>
      </Link>

      <Search />
    </navbar>
  );
};

export default Navbar;
