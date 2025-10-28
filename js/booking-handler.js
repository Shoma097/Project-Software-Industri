// This code should be in: js/booking-handler.js

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Find all buttons with the .book-now-btn class
    const allBookButtons = document.querySelectorAll('.book-now-btn');

    // 2. Loop over each button and add a click listener
    allBookButtons.forEach(button => {
        
        button.addEventListener('click', function(event) {
            
            // 3. Stop the link from working (as you are doing now)
            event.preventDefault(); 

            // 4. Get the booking type from the 'data-booking-type' attribute
            const bookingType = button.dataset.bookingType;

            // 5. Save this type to the browser's local storage
            // This is the "memory" you were missing.
            localStorage.setItem('pendingBookingType', bookingType);
            
            console.log('Booking type saved:', bookingType); // For debugging

            // 6. NOW, manually forward the user to the login page
            const loginUrl = button.getAttribute('href'); // Gets "login.html"
            window.location.href = loginUrl;
        });

    });

});