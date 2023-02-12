//getting dom elements
var obj; 
function passData(){
   const popup = document.querySelector(".popup");
   const name = document.getElementById('name').value;
   const address = document.getElementById('address').value;
   const phonenumber = document.getElementById('phone').value;
   const specialization = document.getElementById('spec').value;
   const website= document.getElementById('web').value;
   const title = document.getElementById('title').value;
    obj = {name , address , phonenumber , specialization , website , title};
   const checker_obj = [name,address,phonenumber];
   for (let index = 0; index < checker_obj.length; index++) {
      const element = checker_obj[index];
     if (checker_obj[index] == '') {
         popup.style.display = "block";
         popup.style.color = 'red';
         popup.innerHTML = 'Please fill out entire form entries <br><br><br> <button onclick="closediv()">Okay</button>';
      }
   };
   popup.style.display = "block";
   popup.style.color = 'green';
   popup.innerHTML = 'Submission Recieved Successfully<br><br> <small>Redirecting to map...</small>';
   afterCheck();
}
async function afterCheck(){
  const str = JSON.stringify(obj);
   const sender = await fetch(`/sender/?body=${str}`);
   const responce =  await sender.json();
   console.log(responce);
}
function closediv(){
   const popup = document.querySelector(".popup");
   popup.style.display = 'none';
}
