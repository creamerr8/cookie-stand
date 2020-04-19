'use strict'

var storesArray = [];
var tableEl = document.getElementById('table');
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']   


function Stores(name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.totalCust =  [];
  this.totalCookies =  [];
  this.cookieSum = 0;
}

Stores.prototype.randomNumber = function(){
  var custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    // console.log(custPerHour);
    var cookiePerHour = Math.floor(custPerHour * this.avgCookieSale);
    // console.log(cookiePerHour);
    var cookieAndCustPerHour = [custPerHour, cookiePerHour];
    // console.log(cookieAndCustPerHour);
    return cookieAndCustPerHour; 
};

Stores.prototype.sales = function(){
  if(this.totalCookies.length === 0){

    for (var i = 0; i < hoursOpen.length; i++){
      var cookieAndCustPerHour = this.randomNumber();
      this.totalCookies.push(cookieAndCustPerHour[1]);
      this.cookieSum = (this.cookieSum + cookieAndCustPerHour[1]);
      console.log(this.totalCookies);
      console.log(cookieAndCustPerHour);
    }
  }
};

Stores.prototype.renderTable = function(){
  this.sales();
  // this.renderTableHeader();
  var tableRowEl = document.createElement('tr');
  var tableCellEl = document.createElement('td');
  tableCellEl.textContent = this.name;
  tableRowEl.appendChild(tableCellEl);
  // debugger;
  for (var i = 0; i < this.totalCookies.length; i++){
    tableCellEl= document.createElement('td');
    tableCellEl.textContent = this.totalCookies[i];
    tableRowEl.appendChild(tableCellEl);
  }
  
  tableCellEl = document.createElement('td');
  tableCellEl.textContent = this.cookieSum;
  tableRowEl.appendChild(tableCellEl);
  
  tableEl.appendChild(tableRowEl);
}
  function renderTableHeader(){
    var tableHeadEl = document.getElementById('table');
    var tableHeadRowEL = document.createElement('tr');
    var tableheaderEl = document.createElement('th');
    tableHeadRowEL.appendChild(tableheaderEl);
    for (var i = 0; i < hoursOpen.length; i++){
    var tableHeadCellEL = document.createElement('td');
    tableHeadCellEL.textContent = hoursOpen[i];
    tableHeadCellEL.id = 'tHeader'
    tableHeadRowEL.appendChild(tableHeadCellEL);
    
  }
  
  var totalsTd = document.createElement('td');
  totalsTd.textContent = 'Totals';
  tableHeadRowEL.appendChild(totalsTd);
  
  tableHeadEl.appendChild(tableHeadRowEL)
  }


function footer(){
  var footerRowEl = document.createElement('tr');
  var footerHeadEl = document.createElement('th');
  footerHeadEl.textContent = 'Hourly Totals';
  footerRowEl.appendChild(footerHeadEl);
  for (var i = 0; i < hoursOpen.length; i++){
    var hourlyCounter = 0;

    for (var j = 0; j < storesArray.length; j++){
      hourlyCounter += storesArray[j].totalCookies[i];
    }
    var totalsEl = document.createElement('td');
    totalsEl.textContent = hourlyCounter;
    footerRowEl.appendChild(totalsEl);
  }
  var totalsCounter = 0;
  for (i = 0; i < storesArray.length; i++){
    totalsCounter += storesArray[i].cookieSum;
  }
  var totalsSum = document.createElement('td');
  totalsSum.textContent = totalsCounter;
  footerRowEl.appendChild(totalsSum);
  tableEl.appendChild(footerRowEl);
}

var storeForm = document.getElementById('storeForm');

storeForm.addEventListener('submit', function(e){
  e.preventDefault();

  var storeName = event.target.storeName.value;
  var minCustomers = parseInt(event.target.minCustomers.value);
  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookies = parseInt(event.target.avgCookies.value);

  storesArray.push(new Stores(storeName, minCustomers, maxCustomers, avgCookies));

  tableEl.innerHTML = '';
  renderAll();

})

storesArray.push(new Stores('Seattle', 23, 65, 6.3));
storesArray.push(new Stores('Tokyo', 3, 24, 1.2)); 
storesArray.push(new Stores('Dubai', 11, 38, 3.7));
storesArray.push(new Stores('Paris', 20, 38, 2.3));
storesArray.push(new Stores('Lima', 2, 16, 4.6));

function renderAll(){
  renderTableHeader();
  for(var i = 0; i < storesArray.length; i++){
    storesArray[i].renderTable();
  }
  footer();
}

renderAll();
// tokyo.renderTable();
// dubai.renderTable();
// paris.renderTable();
// lima.renderTable();



