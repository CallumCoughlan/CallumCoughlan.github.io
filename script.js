document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    const contentArea = document.getElementById('content');

    // Function to load content
    function loadContent(target) {
        fetch(target)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network failure');
                }
                return response.text();
            })
            .then(data => {
                contentArea.innerHTML = data; // Update the content area
            })
            .catch(error => {
                console.error('fetch error: ', error);
            });
    }

    // Load the welcome page by default
    loadContent('welcome.html');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            loadContent(target);
        });
    });
});