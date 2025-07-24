// Hamburger Menu Functionality (Robust)
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('navList');

    if (!menuToggle) {
        console.error('Hamburger menu button (menu-toggle) not found!');
        return;
    }
    if (!navList) {
        console.error('Navigation list (navList) not found!');
        return;
    }

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        console.log('Hamburger clicked! Menu is now', navList.classList.contains('active') ? 'open' : 'closed');
    });

    // Close menu when a nav link is clicked (mobile/tablet UX)
    navList.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            console.log('Menu closed after clicking a link.');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add styles for the desktop hamburger button
    const style = document.createElement('style');
    style.textContent = `
        #desktopHamburger {
            background: none;
            border: none;
            padding: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #desktopHamburger:hover {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }
    `;
    document.head.appendChild(style);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation
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

    // Add error styling for form fields
    const errorStyle = document.createElement('style');
    errorStyle.textContent = `
        .error {
            border-color: #ff4444 !important;
            box-shadow: 0 0 5px rgba(255, 68, 68, 0.3) !important;
        }
        .nav-toggle {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 10px;
        }
        @media (max-width: 768px) {
            .nav-toggle {
                display: block;
            }
    `;
    document.head.appendChild(errorStyle);

    // Calendar Functionality
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            height: 'auto',
            events: [
                // Public Holidays 2025
                {
                    title: "New Year's Day",
                    start: '2025-01-01',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'National holiday celebrating the start of the new year'
                },
                {
                    title: 'Robert Gabriel Mugabe National Youth Day',
                    start: '2025-02-21',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Commemorating the legacy of Robert Gabriel Mugabe and youth empowerment'
                },
                {
                    title: 'Good Friday',
                    start: '2025-04-18',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Christian holiday commemorating the crucifixion of Jesus Christ'
                },
                {
                    title: 'Holy Saturday',
                    start: '2025-04-19',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Christian holiday observed the day after Good Friday'
                },
                {
                    title: 'Easter',
                    start: '2025-04-20',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Christian holiday celebrating the resurrection of Jesus Christ'
                },
                {
                    title: 'Easter Monday',
                    start: '2025-04-21',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Christian holiday observed the day after Easter Sunday'
                },
                {
                    title: 'Independence Day of Zimbabwe',
                    start: '2025-04-18',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Celebrating Zimbabwe\'s independence'
                },
                {
                    title: "International Workers' Day",
                    start: '2025-05-01',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'International Workers\' Day celebration'
                },
                {
                    title: 'Africa Day',
                    start: '2025-05-26',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Celebrating African unity and diversity'
                },
                {
                    title: "Heroes' Day (in Zimbabwe)",
                    start: '2025-08-11',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Honoring national heroes'
                },
                {
                    title: 'Zimbabwe Defence Forces Day',
                    start: '2025-08-12',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Celebrating the Zimbabwe Defence Forces'
                },
                {
                    title: 'National Unity Day of Zimbabwe',
                    start: '2025-12-22',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Celebrating national unity'
                },
                {
                    title: 'Christmas Day',
                    start: '2025-12-25',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Christmas celebration'
                },
                {
                    title: 'Boxing Day',
                    start: '2025-12-26',
                    category: 'holidays',
                    color: '#ff4444',
                    description: 'Public holiday following Christmas'
                },

                // Application Deadlines
                {
                    title: 'Passport Application Deadline',
                    start: '2024-03-15',
                    category: 'deadlines',
                    color: '#4CAF50',
                    description: 'Last day to submit passport applications for processing'
                },
                {
                    title: 'Tax Return Deadline',
                    start: '2024-06-30',
                    category: 'deadlines',
                    color: '#4CAF50',
                    description: 'Deadline for submitting annual tax returns'
                },
                {
                    title: 'School Registration Deadline',
                    start: '2024-08-31',
                    category: 'deadlines',
                    color: '#4CAF50',
                    description: 'Last day for school registration for the new academic year'
                },
                {
                    title: 'HIT August 2025 Intake Application Deadline',
                    start: '2025-02-05',
                    category: 'deadlines',
                    color: '#4CAF50',
                    description: 'Last day to apply for the Harare Institute of Technology August 2025 intake.'
                },
                {
                    title: 'UWC Zimbabwe September 2025 Entry Application Deadline',
                    start: '2025-02-07',
                    category: 'deadlines',
                    color: '#4CAF50',
                    description: 'Deadline for UWC Zimbabwe applications for September 2025 entry.'
                },
                {
                    title: 'WWF Zimbabwe Internship Application Deadline',
                    start: '2025-08-03',
                    category: 'deadlines',
                    color: '#4CAF50',
                    description: 'Last day to apply for WWF Zimbabwe internships.'
                },
                {
                    title: 'UN Talent Consultancy Application Deadline',
                    start: '2025-08-05',
                    category: 'deadlines',
                    color: '#4CAF50',
                    description: 'Deadline for UN Talent consultancy applications.'
                },

                // Government Events
                {
                    title: 'Budget Presentation',
                    start: '2024-02-15',
                    category: 'events',
                    color: '#2196F3',
                    description: 'Annual budget presentation by the Minister of Finance'
                },
                {
                    title: 'State of the Nation Address',
                    start: '2024-03-01',
                    category: 'events',
                    color: '#2196F3',
                    description: 'President\'s address on the state of the nation'
                }
            ],
            eventClick: function(info) {
                showEventModal(info.event);
            }
        });
        calendar.render();

        // Event Modal Functionality
        const modal = document.getElementById('eventModal');
        const closeModal = document.querySelector('.close-modal');

        function showEventModal(event) {
            document.getElementById('modalEventTitle').textContent = event.title;
            document.getElementById('modalEventDate').textContent = event.start.toLocaleDateString();
            document.getElementById('modalEventCategory').textContent = event.extendedProps.category;
            document.getElementById('modalEventDescription').textContent = event.extendedProps.description;
            modal.style.display = 'block';
        }

        closeModal.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Update upcoming events list
        function updateUpcomingEvents() {
            const upcomingEventsList = document.getElementById('upcomingEventsList');
            const today = new Date();
            const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
            
            const upcomingEvents = calendar.getEvents().filter(event => {
                return event.start >= today && event.start <= nextWeek;
            });

            upcomingEventsList.innerHTML = upcomingEvents.map(event => `
                <div class="upcoming-event" style="border-left: 4px solid ${event.backgroundColor}">
                    <div class="event-date">${event.start.toLocaleDateString()}</div>
                    <div class="event-title">${event.title}</div>
                </div>
            `).join('');
        }

        // Initial update of upcoming events
        updateUpcomingEvents();

        // Update upcoming events when calendar changes
        calendar.on('datesSet', updateUpcomingEvents);

        // Handle filter changes
        document.querySelectorAll('.filter-group input').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const category = this.dataset.category;
                const events = calendar.getEvents();
                
                events.forEach(event => {
                    if (event.extendedProps.category === category) {
                        event.setProp('display', this.checked ? 'auto' : 'none');
                    }
                });
            });
        });

        // Search functionality
        const searchInput = document.getElementById('eventSearch');
        const searchButton = document.getElementById('searchButton');

        function searchEvents() {
            const searchTerm = searchInput.value.toLowerCase();
            const events = calendar.getEvents();
            
            events.forEach(event => {
                const matches = event.title.toLowerCase().includes(searchTerm) ||
                              event.extendedProps.description.toLowerCase().includes(searchTerm);
                event.setProp('display', matches ? 'auto' : 'none');
            });
        }

        searchButton.addEventListener('click', searchEvents);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchEvents();
            }
        });
    }

    // Image Modal Functionality
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        const modalImg = document.getElementById('modalImage');
        const captionText = document.getElementById('modalCaption');
        const closeBtn = document.querySelector('.modal-close');

        // Make all images clickable
        document.querySelectorAll('.service-card img, .ministry-card img, .news-card img, .blog-card img').forEach(img => {
            img.addEventListener('click', function() {
                imageModal.style.display = 'block';
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            });
        });

        // Close modal when clicking the close button
        closeBtn.addEventListener('click', function() {
            imageModal.style.display = 'none';
        });

        // Close modal when clicking outside the image
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.style.display = 'none';
            }
        });

        // Close modal when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && imageModal.style.display === 'block') {
                imageModal.style.display = 'none';
            }
        });
    }

    // Authentication Functions
    function checkUserLogin() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    function handleLogin(event) {
        event.preventDefault();
        
        const idNumber = document.getElementById('idNumber').value;
        const password = document.getElementById('password').value;
        
        // For demonstration, we'll use a simple validation
        // In a real application, this would be handled by a server
        if (idNumber && password) {
            // Store login state
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userId', idNumber);
            
            // Redirect to services page
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

    // Service Functions
    function startService(serviceType) {
        if (!checkUserLogin()) {
            alert('Please log in to access this service');
            window.location.href = 'login.html';
            return;
        }

        // Redirect to appropriate service page
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
            default:
                alert('Service not available');
        }
    }

    // Contact Form Handler
    function handleContactSubmit(event) {
        event.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message. We will get back to you soon.');
        
        // Reset form
        event.target.reset();
        
        return false;
    }

    // Service Application Handlers
    function handlePassportApplication(event) {
        event.preventDefault();
        if (!checkUserLogin()) {
            alert('Please log in to access this service');
            window.location.href = 'login.html';
            return;
        }
        
        // Handle passport application submission
        const formData = new FormData(event.target);
        console.log('Passport application submitted:', Object.fromEntries(formData));
        alert('Your passport application has been submitted successfully.');
        window.location.href = 'services.html';
    }

    function handleNationalIDApplication(event) {
        event.preventDefault();
        if (!checkUserLogin()) {
            alert('Please log in to access this service');
            window.location.href = 'login.html';
            return;
        }
        
        // Handle national ID application submission
        const formData = new FormData(event.target);
        console.log('National ID application submitted:', Object.fromEntries(formData));
        alert('Your National ID application has been submitted successfully.');
        window.location.href = 'services.html';
    }

    function handleBusinessRegistration(event) {
        event.preventDefault();
        if (!checkUserLogin()) {
            alert('Please log in to access this service');
            window.location.href = 'login.html';
            return;
        }
        
        // Handle business registration submission
        const formData = new FormData(event.target);
        console.log('Business registration submitted:', Object.fromEntries(formData));
        alert('Your business registration has been submitted successfully.');
        window.location.href = 'services.html';
    }

    function handleTaxRegistration(event) {
        event.preventDefault();
        if (!checkUserLogin()) {
            alert('Please log in to access this service');
            window.location.href = 'login.html';
            return;
        }
        
        // Handle tax registration submission
        const formData = new FormData(event.target);
        console.log('Tax registration submitted:', Object.fromEntries(formData));
        alert('Your tax registration has been submitted successfully.');
        window.location.href = 'services.html';
    }

    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('navList');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
        // Close menu when a nav link is clicked (mobile/tablet UX)
        navList.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
            });
        });
    }
});




const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('navList');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
    // Close menu when a nav link is clicked (mobile/tablet UX)
    navList.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
}