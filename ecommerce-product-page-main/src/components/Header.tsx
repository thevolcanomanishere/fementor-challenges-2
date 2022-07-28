import React from "react";
import { Basket } from "./Basket";
import Nav from "./Nav";
import { ReactComponent as IconLogo } from "../../public/logo.svg";
import { ReactComponent as IconMenu } from "../../public/icon-menu.svg";
import ImageAvatar from "../../public/image-avatar.png";

const Header = () => {
  return (
    <header className="flex flex-col ml-4 lg:ml-0">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="my-auto block pt-1 mr-6 lg:hidden">
            <IconMenu />
          </div>
          <div className="my-auto">
            <IconLogo />
          </div>
          <div className="my-auto hidden ml-6  lg:block">
            <Nav />
          </div>
        </div>
        <div className=" flex flex-row space-x-10 mr-5">
          <Basket />
          <img className="h-12 w-12" src={ImageAvatar} alt="Profile picture" />
        </div>
      </div>
      <div className="border-b mt-5" />
    </header>
  );
};

export default Header;
