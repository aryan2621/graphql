const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { resolvers } = require("./resolvers");
const { schema } = require("./schema");
resolvers;

const app = express();

app.get("/", (req, res) => {
  res.send("hiiii");
});
const root =resolvers
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => console.log("serviceing at the 3000"));
