const express = require('express');
const routes = require('./controllers');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// FIXME: Turn force: true to force: false, these are not droids you are looking for
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT:${PORT}`));
});
