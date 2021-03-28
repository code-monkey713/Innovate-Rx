const path = require('path');
const exphbs = require('express-handlebars');
const express = require('express');
const app = express();
const routes = require('./controllers');
const session = require('express-session');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const FileUploadWithPreview = require("file-upload-with-preview");
// import FileUploadWithPreview from "file-upload-with-preview";
// const upload = new FileUploadWithPreview("myUniqueUploadId");
// import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
// const aws = require('aws-sdk');
const uuid = require('uuid').v1;
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
      const { originalname } = file;
      // or 
      // uuid, or fieldname
      cb(null, originalname);
  }
})
const upload = multer({ storage }); // or simply { dest: 'uploads/' }

app.use(express.static('public'))

const PORT = process.env.PORT || 8080;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 1000*60*30 //Cookie expires in 30min
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// aws.config.region = process.env.AWSRegion;
// const S3_BUCKET = process.env.S3_BUCKET;

app.post('/upload', upload.array('avatar'), (req, res) => {
  return res.json({ status: 'OK', uploaded: req.files.length });
  // return res(console.log('Your image has been uploaded!'));
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT:${PORT}`));
});
