// Example of DOM manipulation
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    headings.forEach(function(heading) {
        heading.addEventListener('mouseover', function() {
            this.style.fontSize = '2em';
        });

        heading.addEventListener('mouseout', function() {
            this.style.fontSize = '1.5em';
        });
    });
});
