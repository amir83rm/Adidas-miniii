
document.addEventListener('DOMContentLoaded', function () {
    const aboutText = document.getElementById('about-text');


    aboutText.style.fontSize = '1.2em';
    aboutText.style.color = '#333';
    aboutText.style.marginTop = '20px';


    aboutText.addEventListener('mouseenter', function () {
        aboutText.style.transition = 'color 0.3s ease-in-out';
        aboutText.style.color = '#ff4500';
    });

    aboutText.addEventListener('mouseleave', function () {
        aboutText.style.color = '#333';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');


    products.forEach(product => {
        product.style.border = '1px solid #ddd';
        product.style.borderRadius = '8px';
        product.style.margin = '10px';
        product.style.padding = '10px';
        product.style.textAlign = 'center';
        product.style.backgroundColor = '#f9f9f9';
    });

   
    products.forEach(product => {
        product.addEventListener('click', function () {
            alert(`Added ${product.querySelector('img').alt} to the cart!`);
        });
        product.style.cursor = 'pointer';
        product.style.transition = 'background-color 0.3s ease-in-out';
        product.addEventListener('mouseenter', function () {
            product.style.backgroundColor = '#e0e0e0';
        });
        product.addEventListener('mouseleave', function () {
            product.style.backgroundColor = '#f9f9f9';
        });
    });
});

const galleryImagess = [ 
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',

];

function displayGallery(images) {
    const galleryContainer = document.querySelector('.gallery');

    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = image;
        imageElement.alt = 'Gallery Image';

        galleryContainer.appendChild(imageElement);
    });
}


displayGallery(galleryImages);



const newProducts = [
    { image: 'new1.jpg', price: 90 },
    { image: 'new2.jpg', price: 110 },
    { image: 'new3.jpg', price: 80 },
    
];


function displayNewProducts(products) {
    const newProductContainer = document.querySelector('.new-products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = 'New Product';

        const productPrice = document.createElement('p');
        productPrice.classList.add('price');
        productPrice.textContent = '$' + product.price;

        productElement.appendChild(productImage);
        productElement.appendChild(productPrice);
        newProductContainer.appendChild(productElement);
    });
}


displayNewProducts(newProducts);




const galleryImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg', 
];


function displayGalleryImages(images) {
    const galleryContainer = document.querySelector('.gallery');

    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = image;
        imageElement.alt = 'Gallery Image';

        galleryContainer.appendChild(imageElement);
    });
}


displayGalleryImages(galleryImages);


document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

  
    header.addEventListener('mouseenter', function () {
        header.style.transition = 'background-color 0.3s ease-in-out';
        header.style.backgroundColor = '#555';
    });

    header.addEventListener('mouseleave', function () {
        header.style.backgroundColor = '#333';
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');

  
    menu.style.backgroundColor = '#333';
    menu.style.color = '#fff';
    menu.style.padding = '10px';
    menu.style.textAlign = 'center';
    menu.style.position = 'fixed';
    menu.style.width = '100%';
    menu.style.top = '0';

  
    const menuItems = menu.querySelectorAll('li');
    menuItems.forEach(item => {
        item.style.display = 'inline';
        item.style.margin = '0 10px';
        item.style.cursor = 'pointer';
        item.style.textTransform = 'uppercase';
        item.style.fontWeight = 'bold';

    
        item.addEventListener('mouseenter', function () {
            item.style.transition = 'color 0.3s ease-in-out';
            item.style.color = '#ff4500';
        });

        item.addEventListener('mouseleave', function () {
            item.style.color = '#fff';
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const styleToggle = document.getElementById('style');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            
            styleToggle.href = 'dark-style.css'; // 
        } else {

            styleToggle.href = 'style.css'; 
        }
    });
});

const products = [
    { image: 'shoe1.jpg', price: 120 },
    { image: 'shoe2.jpg', price: 150 },
    // ...
];

function displayProducts(productList) {
    const productContainer = document.querySelector('.product');

    productList.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = 'Adidas Shoe';

        const productPrice = document.createElement('p');
        productPrice.classList.add('price');
        productPrice.textContent = '$' + product.price;

        productElement.appendChild(productImage);
        productElement.appendChild(productPrice);
        productContainer.appendChild(productElement);
    });
}

displayProducts(products);

document.addEventListener('DOMContentLoaded', function () {
    const sliderImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
    ];

    let currentSlide = 0;

    function showSlide(index) {
        const slider = document.querySelector('.slider');
        slider.style.backgroundImage = url('${sliderImages[index]}');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});



function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

}

setInterval(updateClock, 1000);



function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    dateElement.textContent = dateString;
}

setInterval(updateDate, 1000);



