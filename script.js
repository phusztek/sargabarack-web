document.getElementById('orderForm').addEventListener('submit', function(e){
    e.preventDefault(); // ne töltse újra az oldalt

    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    alert(`Rendelt termék: ${product}\nMennyiség: ${quantity}`);
});