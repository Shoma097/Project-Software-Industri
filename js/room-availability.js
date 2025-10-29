document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display room availability from localStorage
    updateRoomAvailability();
    
    // Add event listener to update availability when returning from admin page
    window.addEventListener('storage', (e) => {
        if (e.key.includes('BedAvailable') || e.key.includes('BedPrice')) {
            updateRoomAvailability();
        }
    });
});

function updateRoomAvailability() {
    // Update room prices
    const doubleBedPrice = localStorage.getItem('doubleBedPrice') || '350000';
    const twinBedPrice = localStorage.getItem('twinBedPrice') || '400000';
    
    document.querySelectorAll('.room-price').forEach(span => {
        if (span.closest('.room-info').querySelector('h3').textContent.includes('Double')) {
            span.textContent = doubleBedPrice;
        } else {
            span.textContent = twinBedPrice;
        }
    });

    // Update room availability
    const doubleBedAvailable = localStorage.getItem('doubleBedAvailable') || '5';
    const twinBedAvailable = localStorage.getItem('twinBedAvailable') || '3';
    
    document.querySelectorAll('.rooms-available').forEach(span => {
        if (span.closest('.room-info').querySelector('h3').textContent.includes('Double')) {
            span.textContent = doubleBedAvailable;
        } else {
            span.textContent = twinBedAvailable;
        }
    });
}