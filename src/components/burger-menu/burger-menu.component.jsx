import { slide as Menu } from "react-burger-menu";
import "./burger-menu.styles.css";
const BurgerMenu = () => {
  return (
    <div className="burger-menu">
      <Menu>
        <li className="menu-item" href="#">
          Collections
        </li>
        <li className="menu-item" href="#">
          Men
        </li>
        <li className="menu-item" href="#">
          Women
        </li>
        <li className="menu-item" href="#">
          About
        </li>
        <li className="menu-item" href="#">
          Contact
        </li>
      </Menu>
    </div>
  );
};
export default BurgerMenu;
