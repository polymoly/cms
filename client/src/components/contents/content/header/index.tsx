import useStyles from "./style";
import { Add, FilterAlt, Visibility, Search } from "@mui/icons-material";
import { CmsButton } from "../../../button";
import { CmsInput } from "../../../input";

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CmsButton text="فیلتر" icon={<FilterAlt fontSize="medium" />} />
        <CmsInput
          type="text"
          suffix={<Search color="disabled" />}
          placeholder="جستجو"
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CmsButton
          text="مشاهده نوشته های خودم"
          icon={<Visibility fontSize="small" />}
        />
        <CmsButton text="نوشته جدید" icon={<Add fontSize="medium" />} />
      </div>
    </div>
  );
};
