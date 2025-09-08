// SOS Modal Functions
function openSOSModal() {
    document.getElementById('sosModal').style.display = 'block';
}

function closeSOSModal() {
    document.getElementById('sosModal').style.display = 'none';
}

function callEmergency() {
    window.location.href = 'tel:100';
}

function callMedical() {
    window.location.href = 'tel:108';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const sosModal = document.getElementById('sosModal');
    const regModal = document.getElementById('registrationModal');
    if (event.target === sosModal) {
        sosModal.style.display = 'none';
    }
    if (event.target === regModal) {
        regModal.style.display = 'none';
    }
}

// Get user location for emergency services
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log('Location available for emergency services');
    });
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click animations to feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Sidebar navigation functionality
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section
            const target = this.getAttribute('href').substring(1);
            
            // Scroll to the target section or show relevant content
            if (target === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.getElementById(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Registration modal controls
    const registerButtons = document.querySelectorAll('.register-button');
    registerButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = document.getElementById('registrationModal');
            if (modal) modal.style.display = 'block';
        });
    });

    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value.trim();
            const idType = document.getElementById('govtIdType').value;
            const idNumber = document.getElementById('govtIdNumber').value.trim();

            if (!fullName || !idType || !idNumber) {
                alert('Please fill in all required fields.');
                return;
            }

            if (idType === 'aadhaar' && !/^\d{12}$/.test(idNumber)) {
                alert('Aadhaar number should be 12 digits.');
                return;
            }
            if (idType === 'passport' && !/^[A-Za-z][0-9A-Za-z]{7,}$/.test(idNumber)) {
                alert('Please enter a valid passport number.');
                return;
            }

            alert('Digital ID created for ' + fullName + ' using ' + idType.replace('_', ' ') + '.');
            registrationForm.reset();
            const modal = document.getElementById('registrationModal');
            if (modal) modal.style.display = 'none';
        });
    }
});
