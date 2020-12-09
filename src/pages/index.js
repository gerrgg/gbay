import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

// markup
const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Typography variant="h2" component="h2" className={classes.header}>
        Home page
      </Typography>
      <p className={classes.description}>
        Home page is blank so heres a cool image:
      </p>
      <img
        src="https://avatars1.githubusercontent.com/u/18134174?s=460&u=1711307939c7259b1f48d4b5c7aee16cc41a8b20&v=4"
        className={classes.image}
        alt="My son gabe"
      />
    </Layout>
  );
};

export default IndexPage;
