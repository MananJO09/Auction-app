// Function to fetch data from the API using .then
function fetchDataWithThen() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => renderTable(data))
      .catch(error => console.error(error));
  }
  
  // Function to fetch data from the API using async/await
  async function fetchDataWithAsyncAwait() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const data = await response.json();
      renderTable(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Function to render the table with data
  function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
  
    data.forEach(coin => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${coin.name}</td>
        <td>${coin.id}</td>
        <td><img src="${coin.image}" alt="${coin.name}" width="20"></td>
        <td>${coin.symbol}</td>
        <td>${coin.current_price}</td>
        <td>${coin.total_volume}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Function to filter data based on search input
  // Function to filter data based on search input
function searchData() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#cryptoTable tr');
  
    rows.forEach(row => {
      const name = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
      const id = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
  
      if (name.includes(searchInput) || id.includes(searchInput)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
  
  // Function to sort data based on market cap or percentage change
  function sortData(sortBy) {
    const tableBody = document.getElementById('cryptoTable');
    const rows = Array.from(cryptoTable.getElementsByTagName('tr'));
  
    rows.sort((row1, row2) => {
      const value1 = getValue(row1, sortBy);
      const value2 = getValue(row2, sortBy);
  
      if (sortBy === 'marketCap') {
        return value2 - value1; // Sort in descending order of market cap
      } else if (sortBy === 'percentageChange') {
        return value2 - value1; // Sort in descending order of percentage change
      }
    });
  
    tableBody.innerHTML = '';
    rows.forEach(row => tableBody.appendChild(row));
  }
  
  // Helper function to get the value for sorting
  function getValue(row, sortBy) {
    if (sortBy === 'marketCap') {
      return parseFloat(row.querySelector('td:nth-child(6)').textContent);
    } else if (sortBy === 'percentageChange') {
      return parseFloat(row.querySelector('td:nth-child(7)').textContent);
    }
  }
  
  // Fetch data using .then
  fetchDataWithThen();
  // Fetch data using async/await
  // fetchDataWithAsyncAwait();

  x((a,b,c) => {
    return a+b+c
  },2,3,6)

  function x(callback,a,b,c){
    let str =""
    setTimeout(() => {
      str+= "x"
    });

    str+= callback(a,b,c)
    console.log(str);
  }

  
  setTimeout(() => {
  console.log('b')
})
 new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log('b')
  })
})

promise.then((msg) => {
  console.log(msg)
})

const promise1 = new Promise((resolve,reject) => {setTimeout(() =>{resolve('a')})})
const promise2 = new Promise((resolve,reject) =>{ resolve('b')})
const promise3 = new Promise((resolve,reject) => {setTimeout(() =>{ resolve('c')},10) })
Promise.race([promise1,promise2,promise3]).then((msg) => {console.log(msg)})

 let People = function(person,age){
  this.person= person;
  this.age =age;
  this.info = function() {
    console.log(this);
    setTimeout(() => {
      console.log(this.person +" is "+ this.age +" years old");
    },3000)
  }
 }

 let person1 = new People('John', 21);
 person1.info();

 var abc = setInterval(counting,300);
 var count =0;

 function counting() {
  console.log(count++);
  if(count == 5) {
    clearInterval(abc);
  }
 }

 for(var i=1; i<5; i++){
  setTimeout(function(){
    console.log(a)
  },1000);
 }

 var a=10;
 setTimeout(function(){
  console.log(a);
 },1000);

 var a=20;