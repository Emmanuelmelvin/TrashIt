

//creating a map
const map = L.map('map').setView([6.6018, 
    3.3515], 12);
//adding tilesUrl to map
const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
//adding an attribute
const attribtion = '&copy; <a href="http://www.openstreetmap.org/copyright">';
const tile = L.tileLayer(tileUrl , {attribtion});
const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
tile.addTo(map);
googleStreets.addTo(map);
//adding the url for the map API
const isurl = 'https://api.wheretheiss.at/v1/satellites/25544';
//adding an icon to map

//getting lat and long from an external API

// api to convert address to long and lat and then add to map
//this works but might not at a point, due to the limited number of calls that can be made by this api key.

function addMap(args){
    const IssIcon = L.icon({
        iconUrl: args.iconImg,
        iconSize: [35, 35],
        iconAnchor: [22, 16],
    });
    //adding a markerconst 
    const me = `<div style = 
    'background-color : black; 
    line-height: 2.5em; 
    padding: 3em; 
    border-radius : 10px; 
    color : white;
     font-family: cursive;'>
     <div><img style="margin-top: -5px; height: 5cm; margin : 0; border-radius : 50%;  width : 5cm;display : block; padding-left 5px;"  src=${args.pic}>
     <strong style>Name</strong>  :  <p1>${args.name}</p1> <br> 
     <strong style>Phonenumber</strong>  :  <p1>${args.phonenumber}</p1> 
     <br> <strong style>Address</strong>  :  <p1>${args.address}</p1> <br>
      <strong style>Website</strong>  :  <p1><a src= '${args.website}'>${args.website}</a></p1>
    <strong>Specialization : <p1>${args.specialization}</p1></strong></div>`;
     L.marker([args.lat, args.lng] , {icon: IssIcon}).addTo(map)
        .bindPopup(me);
}

//adding makers manually
const mapObj = [];
var obj2 = {
    name: 'Waste Matters Nigeria Limited',
    address : ' Orile Agege, Lagos , Nigeria.',
    pic: 'assets/wheelers.jpg',
    lat: 6.63098,
    lng: 3.31609,
    phonenumber : +2348161175819,
    website:` http://www.wecyclers.com/`,
    iconImg: 'assets/group.png',
    specialization: 'all kinds of waste'

}
mapObj.push(obj2);
var obj1 = {
    name: 'Waste Matters Nigeria Limited',
    address : '74, Ogba Shopping Arcade, Caterpillar Bus-stop Lagos NG, Ijaiye Rd, Ogba 100218, Ojodu, Nigeria',
    pic: 'assets/wasteMatters.jpg',
    lat: 6.6288,
    lng: 3.3379,
    phonenumber : +23487676728,
    website: 'http://www.wastemattersltd.com/',
    iconImg: 'assets/group.png',
    specialization: 'all kinds of waste'

}
mapObj.push(obj1);
var obj3 = {
    name: 'Mrs. Aniekan Peters',
    address : ' ota, Lagos. ',
    pic: 'assets/aniekan.jpg',
    lat: 6.69274,
    lng: 3.23648,
    phonenumber : +2348161175819,
    website:`_________`,
    iconImg: 'assets/woman.jpg',
   specialization: 'Leather and polythene bags'
}
mapObj.push(obj3);
var obj4 = {
    name: 'Mrs. Shola Ainde',
    address : 'Abesan Estate Lagos. ',
    pic: 'assets/aniekan.jpg',
    lat: 6.60831,
    lng: 3.23648,
    phonenumber : '07098012787',
    website:`_________`,
    iconImg: 'assets/woman.jpg',
   specialization: 'Cartons and hard paper.'
}
mapObj.push(obj4);
var obj5 = {
    name: 'U&H Integrated Service and LTD',
    address : ' St, 30 Adeniran Ajao Creacent, Ajao Estate, Anthony Village, Lagos, Nigeria ',
    pic: 'assets/uhint.jpg',
    lat: 6.56305,
    lng: 3.37767,
    phonenumber : '07098012787',
    website:` http://uandhrecycling.com/`,
    iconImg: 'assets/group.png',
   specialization: 'Plastics'
}
mapObj.push(obj5);
var obj6 = {
    name: 'Mr. Ole Watkins',
    address : 'Ikotun. ',
    pic: 'assets/manB.jpg',
    lat: 6.56306,
    lng: 3.25056,
    phonenumber : '08009287638',
    website:`https://wa.me/08009287638`,
    iconImg: 'assets/man.jpg',
   specialization: 'Tyre and Rubber materials'
}
mapObj.push(obj6);
//initializatin auto mapping
async function serverData(){
    const data = await fetch('/getter');
    const res = await data.json()
   return {res};
   };

//loading data from server
serverData().then(data =>{
    for (let i = 0; i < 100; i++) {
        const element = data.res.data[i];
            if (element != undefined) {
             addMap(element);
            } 
    
         }
})
// loading data from JS object
for (let x of mapObj){
  addMap(x)
}



