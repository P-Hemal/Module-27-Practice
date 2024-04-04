document.getElementById('btn-discount').addEventListener('click', function(){
    const regularPriceField = document.getElementById('regular-price');
    const regularPriceString = regularPriceField.innerText;
    const regularPrice = parseFloat(regularPriceString);
    const afterDiscountPrice = (regularPrice / 70) *100;
    
    
    const discountField = document.getElementById('discount-field');
    const discountPriceString = discountField.innerText;
    const discountPrice = parseFloat(discountPriceString);
    discountPrice.innerText = afterDiscountPrice
})