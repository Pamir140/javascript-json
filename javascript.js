var heading = document.querySelector("#heading");
var section = document.querySelector("section");
var requestURL = "products.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var products = request.response;
  console.log(products);
  var companyName = document.createElement("h1");
  companyName.textContent = products["companyName"];
  heading.appendChild(companyName);
  showtopDeals(products);
};

function showtopDeals(jsonObject) {
  var topDeals = jsonObject["topDeals"];
  for (var i = 0; i < topDeals.length; i++) {
    var article = document.createElement("article");
    article.setAttribute("class", "col-sm-4");
    var h2 = document.createElement("h2");
    h2.setAttribute("class", "text-primary");
    var description = document.createElement("p");
    description.textContent = topDeals[i].description;
    var img = document.createElement("img");
    img.setAttribute("height", "100px");
    img.setAttribute("width", "auto");
    h2.textContent = topDeals[i].name;
    img.setAttribute("src", "images/" + topDeals[i].image);

    article.appendChild(h2);
    article.appendChild(description);
    article.appendChild(img);
    section.appendChild(article);
  }
}
