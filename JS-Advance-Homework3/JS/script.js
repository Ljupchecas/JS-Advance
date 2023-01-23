let size = document.getElementById('size');
let color = document.getElementById('color');
let button = document.getElementById('btn');
let h1 = document.getElementById('secondH1') // .style.fontSize = '24px'; - ovaka moze, ama nemoze da go menuvas posle

let changeSize = (h1, textSize) => textSize === '' ? h1.style.fontSize = 24 + 'px' : h1.style.fontSize = textSize + 'px';

let changeColor = (h1, color = 'black') => h1.style.color = color;

button.addEventListener('click', () => {changeSize(h1, size.value),changeColor(h1, color.value) 
    size.value = '';
    color.value = '';
});
    
    



