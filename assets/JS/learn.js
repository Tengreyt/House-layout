const buyButtons = document.querySelectorAll('.btn-currency-card');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.textContent === 'В корзину') {
            button.textContent = 'В корзине ✔';
        } else {
            button.textContent = 'В корзину';
        }
    }); 
}); 



const errorActiveG = document.querySelectorAll('.germany')
errorActiveG.forEach(button => {
    button.addEventListener('click', function(){
        alert("Произошла ошибка :(");
    }); 
});

const errorActiveE = document.querySelectorAll('.england')
errorActiveE.forEach(button => {
    button.addEventListener('click', function(){
        alert("Произошла ошибка :(");
    }); 
});

