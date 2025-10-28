// Hotel booking functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('hotelBookingForm');
    const countrySelect = document.getElementById('country');

    // Populate countries
    if (countrySelect) {
        const countries = [
            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
            "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
            // Add all countries A-Z
            "Yemen", "Zambia", "Zimbabwe"
        ];

        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.toLowerCase().replace(/\s+/g, '-');
            option.textContent = country;
            countrySelect.appendChild(option);
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

    // Set minimum date for check-in and check-out
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    
    if (checkIn && checkOut) {
        const today = new Date().toISOString().split('T')[0];
        checkIn.min = today;
        
        checkIn.addEventListener('change', function() {
            checkOut.min = checkIn.value;
            if (checkOut.value && checkOut.value < checkIn.value) {
                checkOut.value = checkIn.value;
            }
        });
    }
});