const express = require("express");
const path=require("path")
const app = express();
const hbs=require('hbs')
const port = process.env.PORT || 3000;

const static_path=path.join(__dirname , "../public");
const template_path=path.join(__dirname , "../templates/views");
const partials_path=path.join(__dirname , "../templates/partials");
app.set('view engine', 'hbs');
app.set('views' , template_path);
hbs.registerPartials(partials_path)
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.render('index');
});
app.get("/about", (req, res) => {
  res.render('about');
});
app.get("/weather", (req, res) => {
  res.render('weather');
});
app.get("*", (req, res) => {
  res.render('404error',{
    errormsg: 'Looks like the page you were looking for is nolonger here.'
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
