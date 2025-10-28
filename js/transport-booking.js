// Transport booking functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('transportBookingForm');
    const serviceType = document.getElementById('serviceType');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // This will be replaced with actual backend submission later
            alert('Booking submitted successfully! We will contact you shortly.');
            window.location.href = 'index.html';
        });
    }

    if (serviceType) {
        serviceType.addEventListener('change', function() {
            // Add any specific logic for pickup vs dropoff selection
        });
    }
});