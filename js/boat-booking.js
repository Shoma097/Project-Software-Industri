// Boat trip booking functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('boatBookingForm');
    const tripType = document.getElementById('tripType');
    const returnDateGroup = document.getElementById('returnDateGroup');
    const returnTimeGroup = document.getElementById('returnTimeGroup');

    function updateTripTypeUI() {
        if (!tripType) return;
        if (tripType.value === 'roundTrip') {
            if (returnDateGroup) returnDateGroup.style.display = 'block';
            if (returnTimeGroup) returnTimeGroup.style.display = 'block';
            const rd = document.getElementById('returnDate');
            const rt = document.getElementById('returnTime');
            if (rd) rd.required = true;
            if (rt) rt.required = true;
        } else {
            if (returnDateGroup) returnDateGroup.style.display = 'none';
            if (returnTimeGroup) returnTimeGroup.style.display = 'none';
            const rd = document.getElementById('returnDate');
            const rt = document.getElementById('returnTime');
            if (rd) rd.required = false;
            if (rt) rt.required = false;
        }
    }

    if (tripType) {
        tripType.addEventListener('change', updateTripTypeUI);
        // initialize UI on load
        updateTripTypeUI();
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