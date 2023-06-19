var request = new XMLHttpRequest();
//initite a connection
request.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
  true
);
var data = [];
request.onload = function () {
  data = JSON.parse(this.response);
  //   for (var i in data) {
  //     var res = data[i].name;
  //     console.log(res);
  //   }
  //   console.log(data);

  var prev = document.createElement("input");
  prev.setAttribute("class", "button");
  prev.setAttribute("id", "prev");
  prev.setAttribute("type", "button");
  prev.setAttribute("value", "prev");
  prev.setAttribute("onClick", "previous()");
  document.body.append(prev);

  for (var i = 1; i <= 10; i++) {
    var button = document.createElement("input");
    button.setAttribute("class", "button");
    button.setAttribute("id", i);
    button.setAttribute("type", "button");
    button.setAttribute("value", i);
    button.setAttribute("onClick", "display(id)");
    button.style.background.color = "aqua";
    document.body.append(button);
  }

  var next = document.createElement("input");
  next.setAttribute("class", "button");
  next.setAttribute("id", "next");
  next.setAttribute("type", "button");
  next.setAttribute("value", "next");
  next.setAttribute("onClick", "next()");

  document.body.append(next);
};

var table = document.createElement("table");
var thead = document.createElement("thead");
thead.setAttribute("class", "thead");

var tr = document.createElement("tr");

var th1 = document.createElement("th");
th1.innerHTML = "ID";

var th2 = document.createElement("th");
th2.innerHTML = "NAME";

var th3 = document.createElement("th");
th3.innerHTML = "EMAIL";

tr.append(th1, th2, th3);
thead.append(tr);

var getId = 1;

function display(id) {
  var id = parseInt(id);
  getId = id;
  table.innerHTML = "";
  for (var i = (id - 1) * 10; i < id * 10; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.innerHTML = data[i].id;
    td2.innerHTML = data[i].name;
    td3.innerHTML = data[i].email;

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    table.append(tr, thead);
    table.setAttribute("border", "2");
    table.style.textAlign = "center";
  }
  document.body.append(table);
}

function previous() {
  if (getId > 1) {
    getId--;
    display(getId);
  }
}

function next() {
  if (getId < 10) {
    getId++;
    display(getId);
  }
}

//sending req to server
request.send();