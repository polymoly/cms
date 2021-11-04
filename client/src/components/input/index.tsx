import { Input, InputProps } from "antd";
import { CircularProgress } from "@mui/material";
import { ReactNode } from "react";
import useStyles from "./style";

type InheritedProps = Omit<
  InputProps,
  "value" | "onChange" | "prefix" | "suffix"
>;

interface CmsInputProps extends InheritedProps {
  value?: string;
  onChange?: (value?: CmsInputProps["value"]) => void;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onPrefixClick?: () => void;
  onSuffixClick?: () => void;
  isLoading?: boolean;
}

export const CmsInput = ({
  onChange,
  value,
  prefix,
  suffix,
  onSuffixClick,
  onPrefixClick,
  isLoading,
  ...rest
}: CmsInputProps) => {
  const classes = useStyles({
    prefix,
    suffix,
    onSuffixClick,
    onPrefixClick,
  } as any);

  return (
    <div className={classes.container}>
      {prefix && (
        <div className={classes.prefix} onClick={onPrefixClick}>
          {prefix}
        </div>
      )}

      <Input
        className={classes.input}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
      />
      {isLoading ? (
        <div className={classes.suffix} onClick={onSuffixClick}>
          <CircularProgress size={22} color="inherit" />
        </div>
      ) : (
        suffix && (
          <div className={classes.suffix} onClick={onSuffixClick}>
            {suffix}
          </div>
        )
      )}
    </div>
  );
};
