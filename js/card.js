document.getElementById('btn-discount').addEventListener('click', function () {
    const regularPriceField = document.getElementById('regular-price');
    const regularPriceString = regularPriceField.innerText;
    const regularPrice = parseFloat(regularPriceString);
    
    const discountField = document.getElementById('discount-field');
    const discountPriceString = discountField.innerText;
    const discountPrice = parseFloat(discountPriceString);
    
    
    const afterDiscountPriceString = (regularPrice / 100) * 60;
    const afterDiscountPrice = parseFloat(afterDiscountPriceString)
    discountField.innerText = afterDiscountPrice;


})