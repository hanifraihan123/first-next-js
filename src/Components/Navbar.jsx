import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async() => {

  const {getUser} = getKindeServerSession();
  const user = await getUser()

  return (
    <div className="navbar bg-lime-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>Home</li>
          <li>Profile</li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        {
          user?.email ? <LogoutLink className="btn">Log out</LogoutLink> : <><LoginLink className="btn">Sign in</LoginLink><RegisterLink className="btn">Sign up</RegisterLink></>
        }
      </div>
    </div>
  );
};

export default Navbar;
