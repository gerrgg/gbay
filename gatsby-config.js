require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: `https://staging.gerrg.com/graphql`,
        debug: {
          graphql: {
            showQueryVarsOnError: true,
          },
        },
      },
    },
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of Wordpress site
        api: `staging.gerrg.com`,

        // set to false to not see verbose output during build
        // default: true
        verbose: true,

        // true if using https. otherwise false.
        https: false,

        api_keys: {
          consumer_key: `ck_9a6b17d5c71e09f3692505818f00472d83e54cd7`,
          consumer_secret: `cs_2d0144acbb60d1b4a9673f19ebe74487728eceb7`,
        },

        // Array of strings with fields you'd like to create nodes for...
        fields: ["products", "products/categories", "products/attributes"],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
