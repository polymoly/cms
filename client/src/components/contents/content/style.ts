import { createUseStyles } from "react-jss";
import { ColorType } from "../../../cores/constants/enums";

export default createUseStyles({
  item: {
    width: "100%",
    minHeight: 60,
    flex: 1,
    background: ColorType.surface,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: [0, 16],
    transition: "all 250ms ease",
    "&:hover": {
      backgroundColor: ColorType.mute,
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 3,
    fontSize: 16,
    fontWeight: "bold",
    color: ColorType.onSurface,
  },
  author: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    color: ColorType.onSurface,
  },
  createDate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    color: ColorType.onSurface,
  },
  tools: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  tool: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: "50%",
    transition: "all 150ms ease",
    color: ColorType.secondary,
    "&:hover": {
      color: ColorType.primary,
    },
  },
  delete: {
    "&:hover": {
      color: ColorType.error,
    },
  },
  borderLine: {
    borderBottom: [1, "solid", ColorType.mute],
  },
});
