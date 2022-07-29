import React from "react";

const MobileMenu = ({
  setShowMenu,
}: {
  setShowMenu: (shouldShow: boolean) => void;
}) => {
  const menuStyle = `block lg:hidden absolute bg-white border-r-2 border-b-2 rounded-r-lg -top-2 -left-4 w-72 z-50 h-screen pl-5 pt-5`;
  const navItemStyle = `cursor-pointer`;
  const textStyle = `font-sans font-bold select-none text-2xl`;
  return (
    <div className={menuStyle}>
      <div onClick={() => setShowMenu(false)} className="text-2xl">
        X
      </div>
      <div className="flex flex-col space-y-5 mt-5">
        <a className={navItemStyle} href="#">
          <p className={textStyle}>Collections</p>
        </a>
        <a className={navItemStyle} href="#">
          <p className={textStyle}>Men</p>
        </a>
        <a className={navItemStyle} href="#">
          <p className={textStyle}>Women</p>
        </a>
        <a className={navItemStyle} href="#">
          <p className={textStyle}>About</p>
        </a>
        <a className={navItemStyle} href="#">
          <p className={textStyle}>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
