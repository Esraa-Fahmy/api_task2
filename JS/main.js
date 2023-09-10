const headers = [
  "id",
  "name",
  "username",
  "email",
  "address",
  "phone",
  "website",
  "company",
];
const showDate = document.querySelector("#showDate");
const printData = function (data) {
  data.forEach((element) => {
    const tr = createMyOwnEle(showDate, "tr", null, null);

    headers.forEach((header) => {
      if (header == "address") {
        createMyOwnEle(tr, "td", element[header].city);
      } else if (header == "company") {
        console.log(header);
        createMyOwnEle(tr, "td", element[header].name);
      } else {
        console.log(header);
        createMyOwnEle(tr, "td", element[header]);
      }
    });
  });
};

const createMyOwnEle = function (parent, ele, txt, classes) {
  let myEle = document.createElement(ele);
  if (txt) myEle.textContent = txt;
  if (classes) myEle.classList = classes;
  parent.appendChild(myEle);
  return myEle;
};

const getUsers = async function () {
  let urlApi =
    "https://jsonplaceholder.typicode.com/users?fbclid=IwAR3JPzDDfQbSdlioGjvbqhdYX6ajlAVzt181BaFQH-iACOMq3Hr9HTY8LW0";
  let res = await fetch(urlApi);
  let data = await res.json();
  console.log(data);
  //print data in browser
  printData(data);
};

getUsers();