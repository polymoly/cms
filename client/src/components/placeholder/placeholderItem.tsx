import useStyles from "./style";
import classnames from "classnames";

interface PlaceholderItemProps {
  isLastItem?: boolean;
}

export const PlaceholderItem = ({ isLastItem }: PlaceholderItemProps) => {
  const classes = useStyles();
  return (
    <div
      className={classnames(classes.item, !isLastItem && classes.borderLine)}
    >
      <div className={classes.placeTitle} />
      <div className={classes.placeAuthor} />
      <div className={classes.placeCreateDate} />
      <div className={classes.placeCreateDate} />
      <div className={classes.placeTools} />
    </div>
  );
};
