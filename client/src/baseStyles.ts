import { jss } from "react-jss";

export default jss
  .createStyleSheet({
    "@global": {
      body: {
        margin: 0,
        padding: 0,
        background: "#f2f2f2",
        minHeight: "100vh",
        overflow: "hidden",
      },
      [`*,*::after,*::before`]: {
        boxSizing: "border-box",
      },
    },
  })
  .attach();
