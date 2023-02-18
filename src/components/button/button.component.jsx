import { ProductButton } from "./button.styles";

const Button = ({ children, icon, callback }) => {
  return (
    <ProductButton onClick={callback}>
      {icon && <img src={icon} alt="cartIcon" />}
      <span>{children}</span>
    </ProductButton>
  );
};

export default Button;
