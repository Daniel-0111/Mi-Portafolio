function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching the page:', error);
            document.getElementById('main-content').innerHTML = '<p>Error loading content.</p>';
        });
        
}
loadContent('inicio.html');
