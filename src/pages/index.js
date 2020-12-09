import * as React from "react";
import Layout from "../components/layout";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Layout>
  );
};

export default IndexPage;
