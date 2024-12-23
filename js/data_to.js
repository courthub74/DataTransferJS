console.log("The Data To page");

// Get URL Parameters (it's a search)
const urlParams = new URLSearchParams(window.location.search);

// Print encoded items to console

// Retrieve and decode parameters

// First initial
const user_first = urlParams.get('first') ? 
    decodeURIComponent(urlParams.get('first')) : 'N/A';
// Last Name
const user_last = urlParams.get('last') ?
    decodeURIComponent(urlParams.get('last')) : 'N/A';
// Pin Number
const user_pin = urlParams.get('pin') ?
    decodeURIComponent(urlParams.get('pin')) : 'N/A';

// Display received data

// first query the div to display data in
const dataDisplay = document.getElementById('received_data');

// set the inner HTML in the data display div
dataDisplay.innerHTML = `
    <p>User: ${user_first}</p>
    <p>Last: ${user_last}</p>
    <p>Pin: ${user_pin}`
;

