// Check if user is logged in as admin
function checkAdminAuth() {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
        window.location.href = '../login.html';
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    checkAdminAuth();
    
    // Handle logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('isAdmin');
        window.location.href = '../login.html';
    });
});

// Update room details
function updateRoom(type) {
    const price = document.getElementById(`${type}BedPrice`).value;
    const available = document.getElementById(`${type}BedAvailable`).value;
    
    // Here you would typically make an API call to update the backend
    // For now, we'll just store in localStorage
    localStorage.setItem(`${type}BedPrice`, price);
    localStorage.setItem(`${type}BedAvailable`, available);
    
    alert(`${type.charAt(0).toUpperCase() + type.slice(1)} Bed Room updated successfully!`);
}