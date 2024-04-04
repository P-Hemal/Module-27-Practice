document.getElementById('btn-discount').addEventListener('click', function () {
    const regularPriceField = document.getElementById('regular-price');
    const regularPriceString = regularPriceField.innerText;
    const regularPrice = parseFloat(regularPriceString);

    const discountField = document.getElementById('discount-field');
    const discountPriceString = discountField.innerText;
    const discountPrice = parseFloat(discountPriceString);
    
    const afterDiscountPrice = (regularPrice / 100) * 70;
    
    discountPrice.innerText = afterDiscountPrice;


})