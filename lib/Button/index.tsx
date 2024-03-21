import React, { useMemo, type FC } from "react";
import styles from "./styles.module.css";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "link";
  color?: "info" | "danger" | "warning" | "success" | string;
  textColor?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const btnColors = {
  info: "#1e66f5",
  danger: "#d20f39",
  warning: "#df8e1d",
  success: "#40a02b",
};

export const Button: FC<ButtonProps> = React.memo(
  ({
    children,
    disabled = false,
    color = "#007bff",
    textColor = "#FFFFFF",
    variant = "primary",
    loading = false,
    icon,
    iconPosition = "left",
    style,
    type = "button",
    ...buttonProps
  }: ButtonProps) => {
    const effectiveColor = btnColors[color as keyof typeof btnColors] || color;
    const className = `${styles.buttonBase} ${styles[variant]} ${
      loading ? styles.disableWhileLoading : ""
    }`;

    const inlineStyles = useMemo(() => {
      return {
        "--button-color": effectiveColor,
        "--button-text-color": textColor,
      };
    }, [effectiveColor, textColor]);

    const renderIcon = (position: string) =>
      icon &&
      iconPosition === position && (
        <span
          className={position === "left" ? styles.iconLeft : styles.iconRight}
        >
          {icon}
        </span>
      );

    return (
      <button
        type={type}
        {...buttonProps}
        className={className}
        style={{ ...style, ...inlineStyles }}
        disabled={disabled}
        aria-busy={loading ? "true" : undefined}
        aria-label={loading ? "Loading..." : undefined}
      >
        {loading && !disabled ? (
          <>
            <div className={styles.loadingSpinner} />
            <div style={{ visibility: "hidden" }}>
              {renderIcon("left")}
              {children}
              {renderIcon("right")}
            </div>
          </>
        ) : (
          <>
            {renderIcon("left")}
            {children}
            {renderIcon("right")}
          </>
        )}
      </button>
    );
  },
);
