import { ProductButton } from "./button.styles";

const Button = ({ children, icon }) => {
  return (
    <ProductButton>
      {icon && <img src={icon} alt="cartIcon" />}
      <span>{children}</span>
    </ProductButton>
  );
};

export default Button;
