document.getElementById('user-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Get the data from the form
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Store the user data in local storage for future use
    localStorage.setItem('user-data', JSON.stringify({ name: name, phone: phone }));

    // Redirect to the "scanned" page
    window.location.href = 'scanned.html';
});