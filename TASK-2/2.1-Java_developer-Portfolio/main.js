    // Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project filtering
function filterProjects(category) {
    let projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });
}

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;

    if (name && email && message) {
        alert('Thank you for your message!');
    } else {
        alert('Please fill out all fields.');
    }
});

// Dark mode toggle
document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
