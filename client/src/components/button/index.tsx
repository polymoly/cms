import { ReactNode } from "react";
import { CircularProgress } from "@mui/material";
import useStyles from "./style";
import classnames from "classnames";

interface CmsButtonProps {
  icon?: ReactNode;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export const CmsButton = ({
  text,
  icon,
  onClick,
  disabled,
  isLoading,
}: CmsButtonProps) => {
  const classes = useStyles();
  return (
    <button
      className={classnames(
        classes.btn,
        (disabled || isLoading) && classes.disabled
      )}
      onClick={onClick}
    >
      {icon && <span className={classes.icon}>{icon}</span>}
      <span className={classes.text}>{text}</span>
      {isLoading && (
        <div className={classes.loader}>
          <CircularProgress size={20} color="inherit" />
        </div>
      )}
    </button>
  );
};
