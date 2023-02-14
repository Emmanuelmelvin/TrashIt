const express = require('express');
const Datastore = require('nedb');
const fetch = require('node-fetch');
const multer = require('multer');
const app = express();
require('dotenv').config();
app.use(express.json( {limit : '10mb'}));
const port = process.env.PORT || 3000
app.listen(port , () => console.log(`Listening at ${port}`));
app.use(express.static('public'));
const database = new Datastore('database.db')
database.loadDatabase();
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './public/server_images/');
    },
    filename: function(req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now() + '.png');
    
    }
  });
  
  const upload = multer({ storage: storage });
  var path ;
  var check;
app.post('/sender' , upload.single('image'), async (req , res) => {
    console.log('POST Request Recieved.')
    res.sendFile(__dirname + '/public/newdata/')
    path = req.file?.path;
    if (path != null) {
      check = 'true';
    } else {
      check = 'false'
    }
});
app.get('/check' , (req , res) => {
  res.json({
    'status' : check,
  })
})
app.get('/sender' , async (req , res) => {
  console.log('GET Request Recieved.')
  const data = JSON.parse(req.query.body);
    const adr = data.address;
    const url = `https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=${adr}`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
  }
};
const response = await fetch(url, options);
const data_api = await response.json();
const long = data_api.Results[0].longitude;
const lat = data_api.Results[0].latitude; 
const gender = data.title;
let icon;
if (gender == 'Mr') {
  icon = 'assets/man.jpg';
} else if(gender == 'Mrs') {
  icon = 'assets/woman.jpg'
}else{
  icon ='assets/group.png'
}
data.lng = long.toFixed(5);
  data.lat = lat.toFixed(5);
data.iconImg= icon;
let pic;
if (path == null) {
  pic = 'assets/default.jpg'
} else {
  const split_path = path.split('\\');
   pic = `${split_path[1] + '/' + split_path[2]}`
}
data.pic = pic;
database.insert(data);
res.send(__dirname + '/public/')
})

app.get('/getter' ,(req, res)=> {
    database.find({} , (err, data) => {
     if(err){
         res.end();
     }
     res.json({data})
     })
    }); 
