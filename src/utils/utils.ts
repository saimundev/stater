import { ButtonColor, Direction, Size, Variant } from "../components/modal/Modal.types";

export const getAnimationDirection = (direction: Direction, open: boolean) => {
  switch (direction) {
    case "fade":
      return "";
    case "slide-up":
      return open ? "translateY(0%)" : "translateY(-50%)";
    case "slide-down":
      return open ? "translateY(0%)" : "translateY(50%)";
    case "zoom":
      return open ? "scale(1)" : "scale(.7)";
    default:
      return "translateY(0%)";
  }
};

export const getSize = (size: Size) => {
  return size === "sm" ? "25vw" : size === "md" ? "50vw" : "75vw";
};

export const getColor = (variant: ButtonColor) => {
  const variantColor = {
    primary: "primary",
    secondary: "secondary",
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
  };

  return variant ? variantColor[variant] : "primary";
};

export const getButtonSize = (size: Size) => {
  const buttonSize = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  return size ? buttonSize[size] : "btn-sm";
};
export const buttonOnHover = (hoverType: Direction) => {
  switch (hoverType) {
    case "fade":
      return "btn-hoverOnAnimation-fade";
    case "slide-up":
      return "btn-hoverOnAnimation-slide-up";
    case "slide-down":
      return "btn-hoverOnAnimation-slide-down";
    case "zoom":
      return "btn-hoverOnAnimation-zoom";
    default:
      return "btn-hoverOnAnimation-slide-up";
  }
};

export const getButtonVariant = (variant: Variant) => {
  const variants = {
    contained: "btn-contained",
    outline: "btn-outline",
    text: "btn-text",
    link: "btn-link",
  };

  return variants[variant];
};
