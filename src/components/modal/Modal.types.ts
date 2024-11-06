export type Direction = "slide-up" | "slide-down" | "fade" | "zoom";
export type Size = "sm" | "md" | "lg";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info";
export type Variant = "contained" | "outline" | "text" ;

export interface IModal {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: Size;
  animationType?: Direction;
  width?: number;
  disableBackdropClick?:boolean;
}

export interface IModalContent {
  open: boolean;
  children: React.ReactNode;
  size?: Size;
  animationType?: Direction;
  width?: number;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface ITitle{
  children: React.ReactNode;
  fontSize?:string;
  color?:string;
  textAlign?:"left" | "center";
  fontWidth?:"300" | "400" | "500" | "600" | "700" | "800" | "900"
}

export interface IButton {
  children: React.ReactNode;
  color?: ButtonColor;
  size?: Size;
  animationOnHover?: Direction;
  disabled?: boolean;
  onClose?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  variant?: Variant;
}

export interface IDivider {
  color?:string;
  height?:string;
}
