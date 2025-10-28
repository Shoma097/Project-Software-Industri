// Boat trip booking functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('boatBookingForm');
    const tripType = document.getElementById('tripType');
    const returnDateGroup = document.getElementById('returnDateGroup');

    if (tripType) {
        tripType.addEventListener('change', function() {
            if (this.value === 'roundTrip') {
                returnDateGroup.style.display = 'block';
                document.getElementById('returnDate').required = true;
            } else {
                returnDateGroup.style.display = 'none';
                document.getElementById('returnDate').required = false;
            }
        });
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // This will be replaced with actual backend submission later
            alert('Booking submitted successfully! We will contact you shortly.');
            window.location.href = 'index.html';
        });
    }
});