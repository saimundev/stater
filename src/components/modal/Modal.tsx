import { useEffect } from "react";
import "./Modal.css";
import {
  IButton,
  IChildren,
  IDivider,
  IModal,
  IModalContent,
  ITitle,
} from "./Modal.types";
import {
  buttonOnHover,
  getAnimationDirection,
  getButtonSize,
  getSize,
  getColor,
  getButtonVariant,
} from "../../utils/utils";

export const Modal = ({
  open,
  onClose,
  children,
  size = "sm",
  animationType = "zoom",
  width,
  disableBackdropClick,
}: IModal) => {
  useEffect(() => {
    const handleCloseModal = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleCloseModal);

    return () => {
      window.removeEventListener("keydown", handleCloseModal);
    };
  }, [onClose]);

  const handleBackdropClose = () => {
    if (!disableBackdropClick) onClose();
  };

  return (
    <div
      className="customModalOverly"
      style={{
        width: "100%",
        height: "100vh",
        backdropFilter: "blur(2px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
      }}
      onClick={handleBackdropClose}
    >
      <div style={{ position: "relative" }}>
        <ModalContent
          size={size}
          children={children}
          open={open}
          animationType={animationType}
          width={width}
        />
        <svg
          onClick={onClose}
          style={{
            opacity: open ? 1 : 0,
            visibility: open ? "visible" : "hidden",
            transition: "opacity 0.6s ease-in-out",
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={20}
          height={20}
          className="customModalIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

const ModalContent = ({
  children,
  width,
  size = "sm",
  open,
  animationType = "fade",
}: IModalContent) => {
  return (
    <div
      className="customModalContent"
      style={{
        width: width ? width : getSize(size),
        background: "white",
        transform: getAnimationDirection(animationType, open),
        opacity: open ? 1 : 0,
        transition: "transform 0.3s ease-in-out, opacity 0.5s ease-in-out",
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export const ModalHeader = ({ children }: IChildren) => {
  return <div className="customModalHeader">{children}</div>;
};

export const ModalTitle = ({
  children,
  fontSize,
  textAlign = "left",
  color,
  fontWidth,
}: ITitle) => {
  return (
    <div
      className="customModalTitle"
      style={{
        fontSize: fontSize,
        textAlign: textAlign,
        color: color,
        fontWeight: fontWidth,
      }}
    >
      {children}
    </div>
  );
};

export const ModalDescription = ({
  children,
  color,
  fontSize,
  textAlign,
  fontWidth,
}: ITitle) => {
  return (
    <div
      className="customModalDescription"
      style={{
        fontSize: fontSize,
        textAlign: textAlign,
        color: color,
        fontWeight: fontWidth,
      }}
    >
      {children}
    </div>
  );
};

export const ModalFooter = ({ children }: IChildren) => {
  return <div className="customModalFooter">{children}</div>;
};

export const ModalCancelButton = ({
  children,
  color = "secondary",
  size = "sm",
  animationOnHover = "slide-up",
  disabled,
  onClose,
  startIcon,
  endIcon,
  loading,
  variant = "contained",
}: IButton) => {
  return (
    <button
      onClick={onClose}
      disabled={disabled || loading}
      className={`customModalCancelButton ${getColor(color)} ${getButtonSize(
        size
      )} ${buttonOnHover(animationOnHover)} ${
        disabled || loading ? "btn-disabled" : ""
      } ${getButtonVariant(variant)} `}
    >
      {startIcon && <span className="btn-start-icon">{startIcon}</span>}
      {children}
      {endIcon && <span className="btn-end-icon">{endIcon}</span>}
      {loading && <span className="btn-loader "></span>}
    </button>
  );
};

export const ModalSuccessButton = ({
  children,
  size = "sm",
  color = "primary",
  animationOnHover = "slide-up",
  disabled,
  startIcon,
  endIcon,
  loading,
  variant = "contained",
}: IButton) => {
  return (
    <button
      disabled={disabled || loading}
      className={`customModalSuccessButton ${getColor(color)} ${getButtonSize(
        size
      )} ${buttonOnHover(animationOnHover)} ${
        disabled || loading ? "btn-disabled" : ""
      } ${getButtonVariant(variant)}`}
    >
      {startIcon && <span className="btn-start-icon">{startIcon}</span>}{" "}
      {children}
      {endIcon && <span className="btn-end-icon">{endIcon}</span>}
      {loading && <span className="btn-loader"></span>}
    </button>
  );
};

export const ModalDivider = ({ color, height }: IDivider) => {
  return (
    <div
      className="customModalDivider"
      style={{ background: color, height: height }}
    ></div>
  );
};
