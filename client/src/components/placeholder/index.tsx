import { useMemo } from "react";
import { PlaceholderItem } from "./placeholderItem";
import useStyles from "./style";

interface PlaceholderProps {
  count?: number;
}

export const Placeholder = ({ count = 12 }: PlaceholderProps) => {
  const classes = useStyles();

  const items = useMemo(() => {
    return Array.from({ length: count }, (_, i) => i + 1);
  }, [count]);

  return (
    <div className={classes.contentWrapper}>
      {items.map((c) => (
        <PlaceholderItem key={c} isLastItem={items.length === c} />
      ))}
    </div>
  );
};
