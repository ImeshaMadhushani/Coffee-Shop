const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


 document.querySelector('.search-btn').addEventListener('click', function() {
    let searchTerm = document.querySelector('.search input').value.toLowerCase();
    let productBoxes = document.querySelectorAll('.products-container .box');
    
    let found = false;

    productBoxes.forEach(box => {
        let productName = box.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            box.style.display = 'block';
            found = true;
            
        } else {
            box.style.display = 'none';
        }
    });

    if (found) {
        document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("No products match your search.");
    }
 });



 