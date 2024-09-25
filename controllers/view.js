

const listComponents = document.getElementById('listComponents');

function localStorageBring() {
    const savedProducts = JSON.parse(localStorage.getItem('products'));

    savedProducts.forEach(function(product) {
        console.log(product);

        const productComponent = document.createElement('div');
        productComponent.classList = "list-components__product";
        listComponents.appendChild(productComponent);

        const productImage = document.createElement('div');
        productImage.classList = "product__product-image";
        productComponent.appendChild(productImage);

        const image = document.createElement('img');
        image.classList = "product-image__image";
        image.src = product.photo;
        productImage.appendChild(image);

        const productDescription = document.createElement('div');
        productDescription.classList = "product__product-description";
        productComponent.appendChild(productDescription);

        const productDescriptionTittle = document.createElement('h1');
        productDescriptionTittle.classList = "product-description__tittle";
        productDescriptionTittle.innerText = product.name;
        productDescription.appendChild(productDescriptionTittle);

        const description = document.createElement("p");
        description.classList = "product-description__description";
        description.innerText = product.description;
        productDescription.appendChild(description);    

        const productPrice = document.createElement("p");
        productPrice.classList = "product-description__price";
        productPrice.innerHTML = "$ " +  product.price;
        productDescription.appendChild(productPrice);

    });
}



localStorageBring();
