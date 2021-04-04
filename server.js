const path = require("path");
const exphbs = require("express-handlebars");
const express = require("express");
const app = express();
const routes = require("./controllers");
const session = require("express-session");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const uuid = require("uuid").v1;
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, originalname);
  },
});

const upload = multer({ storage });

app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 1000 * 60 * 60, // Cookie expires in 60 mins
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/upload", upload.array("avatar"), (req, res) => {
  return res.json({ status: "OK", uploaded: req.files.length });
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT:${PORT}`));
});
