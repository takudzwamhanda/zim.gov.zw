// Wait for the DOM to be fully loaded
// Handles navigation, login, and application form logic for the Zimbabwe Government Portal

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form validation for all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
});

// User login state check
function checkUserLogin() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Login handler (for login.html)
function handleLogin(event) {
    event.preventDefault();
    const idNumber = document.getElementById('idNumber').value;
    const password = document.getElementById('password').value;
    if (idNumber && password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', idNumber);
        window.location.href = 'services.html';
    } else {
        alert('Please enter both ID number and password');
    }
    return false;
}

function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    window.location.href = 'index.html';
}

// Service navigation handler
function startService(serviceType) {
    if (!checkUserLogin()) {
        alert('Please log in to access this service');
        window.location.href = 'login.html';
        return;
    }
    switch(serviceType) {
        case 'passport':
            window.location.href = 'passport-application.html';
            break;
        case 'national-id':
            window.location.href = 'national-id-application.html';
            break;
        case 'business':
            window.location.href = 'business-registration.html';
            break;
        case 'tax':
            window.location.href = 'tax-registration.html';
            break;
        case 'birth-certificate':
            alert('Birth certificate application is not yet implemented.');
            break;
        case 'vehicle-registration':
            alert('Vehicle registration is not yet implemented.');
            break;
        case 'drivers-license':
            alert('Driver license application is not yet implemented.');
            break;
        case 'marriage':
            alert('Marriage registration is not yet implemented.');
            break;
        case 'death-certificate':
            alert('Death certificate application is not yet implemented.');
            break;
        case 'property':
            alert('Property registration is not yet implemented.');
            break;
        case 'land':
            alert('Land application is not yet implemented.');
            break;
        case 'pension':
            alert('Pension service is not yet implemented.');
            break;
        case 'welfare':
            alert('Welfare service is not yet implemented.');
            break;
        default:
            alert('Service not available');
    }
}

// Passport application handler
function handlePassportApplication(event) {
    event.preventDefault();
    if (!checkUserLogin()) {
        alert('Please log in to access this service');
        window.location.href = 'login.html';
        return false;
    }
    const formData = new FormData(event.target);
    console.log('Passport application submitted:', Object.fromEntries(formData));
    alert('Your passport application has been submitted successfully.');
    window.location.href = 'services.html';
    return false;
}

// National ID application handler
function handleNationalIDApplication(event) {
    event.preventDefault();
    if (!checkUserLogin()) {
        alert('Please log in to access this service');
        window.location.href = 'login.html';
        return false;
    }
    const formData = new FormData(event.target);
    console.log('National ID application submitted:', Object.fromEntries(formData));
    alert('Your National ID application has been submitted successfully.');
    window.location.href = 'services.html';
    return false;
}

// Business registration handler
function handleBusinessRegistration(event) {
    event.preventDefault();
    if (!checkUserLogin()) {
        alert('Please log in to access this service');
        window.location.href = 'login.html';
        return false;
    }
    const formData = new FormData(event.target);
    console.log('Business registration submitted:', Object.fromEntries(formData));
    alert('Your business registration has been submitted successfully.');
    window.location.href = 'services.html';
    return false;
} 