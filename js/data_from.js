console.log("Transfer from this Page");


// Query the form
let dataForm = document.getElementById('dataform');

// add submit event listener
dataForm.addEventListener('submit', (e) => {
    // Test Print
    console.log("Submit Button Pressed");

    // prevent resetting page
    e.preventDefault();

    // Get input values

    // First Initial
    const first_init = document.getElementById('first_initial');

    // Last Name
    const last_name = document.getElementById('last_name');

    // Encode parameters
    const encodedName = encodeURIComponent(first_init);
    const encodedLast = encodeURIComponent(last_name);

    // Redirect with URL parameters
    window.location.href = `received.html?first_init=${encodedName}&last_name=${encodedLast}`;
});