import { Button as ShadcnButton } from "@/components/ui/button";
import styles from "./button.module.scss";

type ButtonProps = React.ComponentProps<typeof ShadcnButton>;

/**
 * A custom button component that extends the base Shadcn button with additional styles.
 *
 * @param {ButtonProps} props - The props for the component, inherited from the Shadcn Button.
 * @param {string} [props.className] - Additional class names to be merged with the custom button styles.
 * @returns {React.ReactElement} The rendered custom button component.
 */
export const Button = ({ className, ...props }: ButtonProps) => {
  const combinedClassName =
    `${styles["custom-button"]} ${className || ""}`.trim();

  return <ShadcnButton className={combinedClassName} {...props} />;
};
