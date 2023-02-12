checker();
async function checker(){
    const data = await fetch('/check');
    const res = await data.json();
    console.log(res);
}