const Nav = () => {
  const navItemStyle = `cursor-pointer hover:-mb-8 hover:border-b-2 hover:border-orange-400`;
  const textStyle = `font-sans`;
  return (
    <nav className="flex flex-row space-x-8 text-gray-500">
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
    </nav>
  );
};

export default Nav;
