import * as React from "react";
import Layout from "../components/layout";
import Button from "@material-ui/core/Button";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Layout>
  );
};

export default IndexPage;
