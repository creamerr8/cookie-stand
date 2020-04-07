'use strict'

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

// external function to write to the dom
function writeData(){
  // grabbing the list element
    var listEl = document.getElementById('list')
  // creating list items
    var itemEl = document.createElement('li');
  // creating a p tag
    var nameEl = document.createElement('p');
  // giving text content so you know what store we are talking about
    nameEl.textContent = this.name;
    itemEl.appendChild(nameEl);
    listEl.appendChild(itemEl);
  
  // creating a list to show the data
    var salesList = document.createElement('ul');
    listEl.appendChild(salesList);
  // loop for cookies per hour in total cookies
    for (var i = 0; i < this.totalCookies.length; i++){
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.totalCookies[i];
    }
  // sum of all cookies
    var sumEl = document.createElement('li');
    sumEl.textContent = 'total : ' + this.cookieSum;
    salesList.appendChild(sumEl);
  }

// creating object seattle
var store1 = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  totalCust: [],
  totalCookies: [],
  cookieSum: 0,
// function for random numbers
  randomNumber: function(){
    var custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(custPerHour);
    var cookiePerHour = Math.floor(custPerHour * this.avgCookieSale);
    console.log(cookiePerHour);
    var cookieAndCustPerHour = [custPerHour, cookiePerHour];
    console.log(cookieAndCustPerHour);
    return cookieAndCustPerHour;
  },
// function to calculate average and total number of customers and cookies
  sales: function(){
    for (var i = 0; i < hoursOpen.length; i++){
      var cookieAndCustPerHour = this.randomNumber;
      this.totalCookies.push(cookieAndCustPerHour[1]);
      this.cookieSum = (this.cookieSum + cookieAndCustPerHour[1]);
    }
  },

  status: function(){
    console.log(this.totalCookies, this.cookieSum);
  },

  // writing to the dom using an external function
  write: writeData, 

}


// creating object tokyo
var store2 = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  totalCust: [],
  totalCookies: [],
  cookieSum: 0,
// function for random numbers
  randomNumber: function(){
    var custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(custPerHour);
    var cookiePerHour = Math.floor(custPerHour * this.avgCookieSale);
    console.log(cookiePerHour);
    var cookieAndCustPerHour = [custPerHour, cookiePerHour];
    console.log(cookieAndCustPerHour);
    return cookieAndCustPerHour;
  },
// function to calculate average and total number of customers and cookies
  sales: function(){
    for (var i = 0; i < hoursOpen.length; i++){
      var cookieAndCustPerHour = this.randomNumber;
      this.totalCookies.push(cookieAndCustPerHour[1]);
      this.cookieSum = (this.cookieSum + cookieAndCustPerHour[1]);
    }
  },

  status: function(){
    console.log(this.totalCookies, this.cookieSum);
  },

  // writing to the dom using an external function
  write: writeData, 

} 

// creating object dubai
var store3 = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  totalCust: [],
  totalCookies: [],
  cookieSum: 0,
// function for random numbers
  randomNumber: function(){
    var custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(custPerHour);
    var cookiePerHour = Math.floor(custPerHour * this.avgCookieSale);
    console.log(cookiePerHour);
    var cookieAndCustPerHour = [custPerHour, cookiePerHour];
    console.log(cookieAndCustPerHour);
    return cookieAndCustPerHour;
  },
// function to calculate average and total number of customers and cookies
  sales: function(){
    for (var i = 0; i < hoursOpen.length; i++){
      var cookieAndCustPerHour = this.randomNumber;
      this.totalCookies.push(cookieAndCustPerHour[1]);
      this.cookieSum = (this.cookieSum + cookieAndCustPerHour[1]);
    }
  },

  status: function(){
    console.log(this.totalCookies, this.cookieSum);
  },

  // writing to the dom using an external function
  write: writeData, 

}

// creating object paris
var store4 = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  totalCust: [],
  totalCookies: [],
  cookieSum: 0,
// function for random numbers
  randomNumber: function(){
    var custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(custPerHour);
    var cookiePerHour = Math.floor(custPerHour * this.avgCookieSale);
    console.log(cookiePerHour);
    var cookieAndCustPerHour = [custPerHour, cookiePerHour];
    console.log(cookieAndCustPerHour);
    return cookieAndCustPerHour;
  },
// function to calculate average and total number of customers and cookies
  sales: function(){
    for (var i = 0; i < hoursOpen.length; i++){
      var cookieAndCustPerHour = this.randomNumber;
      this.totalCookies.push(cookieAndCustPerHour[1]);
      this.cookieSum = (this.cookieSum + cookieAndCustPerHour[1]);
    }
  },

  status: function(){
    console.log(this.totalCookies, this.cookieSum);
  },

  // writing to the dom using an external function
  write: writeData, 

}

// creating object lima
var store5 = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  totalCust: [],
  totalCookies: [],
  cookieSum: 0,
// function for random numbers
  randomNumber: function(){
    var custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(custPerHour);
    var cookiePerHour = Math.floor(custPerHour * this.avgCookieSale);
    console.log(cookiePerHour);
    var cookieAndCustPerHour = [custPerHour, cookiePerHour];
    console.log(cookieAndCustPerHour);
    return cookieAndCustPerHour;
  },
// function to calculate average and total number of customers and cookies
  sales: function(){
    for (var i = 0; i < hoursOpen.length; i++){
      var cookieAndCustPerHour = this.randomNumber;
      this.totalCookies.push(cookieAndCustPerHour[1]);
      this.cookieSum = (this.cookieSum + cookieAndCustPerHour[1]);
    }
  },

  status: function(){
    console.log(this.totalCookies, this.cookieSum);
  },

  // writing to the dom using an external function
  write: writeData, 

}




store1.sales();
store1.write();
store2.sales();
store2.write();
store3.sales();
store3.write();
store4.sales();
store4.write();
store5.sales();
store5.write();