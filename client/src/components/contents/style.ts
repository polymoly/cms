import { createUseStyles } from "react-jss";

export default createUseStyles({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    background: "#fff",
    height: "100%",
    borderRadius: 4,
    overflow: "hidden",
  },
  contentWrapper: {
    display: "flex",
    width: "100%",
    flex: 1,
    maxHeight: "calc(100% - 80px)",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "auto",
  },
  footer: {
    width: "100%",
    minHeight: 70,
    backgroundColor: "#fff",
    borderTop: [1, "solid", "#f5f5f5"],
    display: "flex",
    alignItems: "center",
    padding: [0, 16],
  },
  header: {
    height: 70,
    width: "100%",
    borderBottom: [1, "solid", "#f5f5f5"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
