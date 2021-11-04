import useStyles from "./style";
import { Delete, Edit, Comment } from "@mui/icons-material";
import classnames from "classnames";

interface ContentItemProps {
  isLastItem?: boolean;
}

export const ContentItem = ({ isLastItem }: ContentItemProps) => {
  const classes = useStyles();

  return (
    <div
      className={classnames(classes.item, !isLastItem && classes.borderLine)}
    >
      <div className={classes.title}>این یک متن تستی برای عنوان می باشد</div>
      <div className={classes.author}>نویسنده: علیرضا</div>
      <div className={classes.createDate}>تاریخ ایجاد: 12 شهریور</div>
      <div className={classes.createDate}> آخرین بروزرسانی: 2 مهر</div>
      <div className={classes.tools}>
        <div className={classes.tool}>
          <Comment />
        </div>
        <div className={classes.tool}>
          <Edit />
        </div>
        <div className={classnames(classes.tool, classes.delete)}>
          <Delete />
        </div>
      </div>
    </div>
  );
};
