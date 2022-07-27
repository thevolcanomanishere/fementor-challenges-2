import React from "react";
import { Basket } from "./Basket";
import Nav from "./Nav";
import { ReactComponent as IconLogo } from "../../public/logo.svg";
import ImageAvatar from "../../public/image-avatar.png";

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="my-auto">
          <IconLogo />
        </div>
        <div className="m-auto">
          <Nav />
        </div>
        <div className="flex flex-row self-end space-x-10">
          <Basket />
          <img className="h-12 w-12" src={ImageAvatar} alt="Profile picture" />
        </div>
      </div>
      <div className="border-b mt-5" />
    </header>
  );
};

export default Header;
