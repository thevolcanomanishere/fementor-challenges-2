const Nav = () => {
  const navItemStyle = `font-sans cursor-pointer hover:-mb-8 hover:border-b-2 hover:border-orange-400`;
  return (
    <nav className="flex flex-row space-x-8 text-gray-500">
      <p className={navItemStyle}>Collections</p>
      <p className={navItemStyle}>Men</p>
      <p className={navItemStyle}>Women</p>
      <p className={navItemStyle}>About</p>
      <p className={navItemStyle}>Contact</p>
    </nav>
  );
};

export default Nav;
