import { createUseStyles } from "react-jss";
import { ColorType } from "../../cores/constants/enums";

export default createUseStyles({
  container: {
    height: 34,
    minHeight: "100%",
    maxHeight: 34,
    width: 400,
    maxWidth: 400,
    border: [1, "solid", ColorType.onSurfaceLight],
    borderRadius: 2,
    backgroundColor: "transparent",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  input: {
    width: "100%",
    height: "100%",
    color: ColorType.onSurface,
    fontSize: 14,
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    boxShadow: "none",
    paddingRight: ({ prefix }: any) => (prefix ? 30 : 8),
    paddingLeft: ({ suffix }: any) => (suffix ? 30 : 8),
  },
  prefix: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 4,
    cursor: ({ onPrefixClick }: any) => (onPrefixClick ? "pointer" : "default"),
  },
  suffix: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    color: ColorType.onSurfaceLight,
    left: 4,
    cursor: ({ onSuffixClick }: any) => (onSuffixClick ? "pointer" : "default"),
  },
});
