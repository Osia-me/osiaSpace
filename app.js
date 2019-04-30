const express     = require('express'),
      favicon     = require('express-favicon'),
      app         = express(),
      port        = process.env.PORT || 3000;

//Set-up ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/img/space.png'));

//Route
app.get('/', (req,res) => {
  res.render('index.ejs')
});


//Server
app.listen(port, () => console.log(`Server running on port: ${port}`));
