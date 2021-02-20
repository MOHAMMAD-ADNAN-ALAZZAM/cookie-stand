"use strict";

let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];


  
let shops=[];
  function CookieShop(location, min, max, avgCookieSale) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookieSale = avgCookieSale;
    this.hourlySales = [];
    this.dailySales = 0;
    shops.push(this);
    
  };
  
  CookieShop.prototype.randomCust = function () {
    // i do the math in other order range=(max-min)
    // randomcount = mathe.random * rang + seatel.main
    // return mathe.ceil(randomcost)
    let range = this.max - this.min;
    let randomCount = Math.random() * range + this.min;
    return Math.ceil(randomCount);
  };
  CookieShop.prototype.hourlyDailySales = function () {
    for (let m = 0; m < hours.length; m++) {
      // numofcookis = math.cel(randomcoust * avgcookissale)
      // i colle the randomcoust function
      let numOfCookies = Math.ceil(this.randomCust() * this.avgCookieSale);
      // i push the numofcookis in the arry hourlysales
      this.hourlySales.push(numOfCookies);
      //add to dailysales the numofcookies
      this.dailySales += numOfCookies;
    }
  };
  CookieShop.prototype.render = function () {
    let tr = document.createElement("tr");
    table.appendChild(tr);
  
    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = this.location;
  
    for (let m = 0; m < hours.length; m++) {
      td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = this.hourlySales[m];
    }
    td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = this.dailySales;
  };
////////////////////////// global function for header row///////////////////
  // global function for header row
  let content = document.getElementById("content-area");
  let table = document.createElement("table");
  content.appendChild(table);
  function header() {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = "      ";
  
    for (let m = 0; m < hours.length; m++) {
      let th = document.createElement("th");
      tr.appendChild(th);
      th.textContent = hours[m];
    }
    let td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.textContent = "Daily Location Total";
  };
  header();
//////////////// global function for footer row/////////////
  // global function for footer row
  function renderFooterRow(table) {
   
    let tr = document.createElement("tr");
  
    table.appendChild(tr);
  
    let td = document.createElement("td");
  
    tr.appendChild(td);
  
    td.textContent = "Totals";
  
    let megaTotal = 0;
  
    for (let hour = 0; hour < hours.length; hour++) {
      td = document.createElement("td");
  
      tr.appendChild(td);
  
      let sum = 0;
  
      for (let shopIndex = 0; shopIndex < shops.length; shopIndex++) {
        let shop = shops[shopIndex];
  
        sum += shop.hourlySales[hour];
      }
  
      td.textContent = sum;
  
      megaTotal += sum;
    }
  
    td = document.createElement("td");
  
    tr.appendChild(td);
  
    td.textContent = megaTotal;
  };
  ////////////////////form function//////////////
  const form =document.getElementById('nSalamon-Cookies-sales');
  form.addEventListener('submit',newshop);
  function newshop (event){
    // to prevent default behavior from the webpages
   event.preventDefault();
   const shopName = event.target.locationName.value;
   let minNew = event.target.minNum.value;
  minNew = parseInt(minNew);
  let maxNew = event.target.maxNum.value;
  maxNew = parseInt (maxNew);
  let avgNew = event.target.avgNum.value;
  avgNew = parseFloat(avgNew);
  
  console.log(table.rows.length); 
  // deleting the total ro..
  table.deleteRow(table.rows.length - 1);
  //creating the new location
  let newLocaion = new CookieShop(shopName,minNew,maxNew,avgNew);
  newLocaion.hourlyDailySales();
  newLocaion.render();
  //render the foter to have tha total in the end of the tabel.
  renderFooterRow(table);
}
let seattle = new CookieShop("Seattle", 23, 65, 6.3);
let Tokyo = new CookieShop("Tokyo", 3, 24, 1.2);
let Dubai = new CookieShop("Dubai", 11, 38, 3.7);
let Paris = new CookieShop("Paris", 20, 38, 2.3);
let Lima = new CookieShop("Lima", 2, 16, 4.6);
// for loop to modefay the rendering 
for(let m =0 ; m < shops.length; m++){
  shops[m].hourlyDailySales();
  shops[m].render();
};
renderFooterRow(table);