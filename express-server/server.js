
const Http = new XMLHttpRequest();
const url='http://192.168.50.210:3000/bulb';
Http.open("POST", url);

Http.setRequestHeader("Content-Type", "application/json");
Http.send(JSON.stringify({name:"Sultan", time:"2pm"}));

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}


function put() {
    const url='http://192.168.50.210:3000/bulb';
    Http.open("PUT", url);
    Http.send();
}
function post() {
    const url='http://192.168.50.210:3000/bulb';
    Http.open("POST", url);
    Http.send();

}

function del() {
    const url='http://192.168.50.210:3000/bulb';
    Http.open("DELETE", url);
    Http.send();

}
Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    document.getElementById("result").innerHTML = Http.responseText;
}