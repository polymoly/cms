import { Placeholder } from "../placeholder";
import { ContentItem } from "./content";
import { Header } from "./content/header";
import useStyles from "./style";

const fake = Array.from({ length: 12 }, (_, i) => i + 1);

export const Contents = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      {true ? (
        <div className={classes.contentWrapper}>
          {fake.map((c) => (
            <ContentItem key={c} isLastItem={fake.length === c} />
          ))}
        </div>
      ) : (
        <Placeholder />
      )}
      <div className={classes.footer}>footer</div>
    </div>
  );
};
