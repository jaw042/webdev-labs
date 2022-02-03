let currentSize = 1.4;

const makeBigger = () => {
   currentSize += 0.2;
   document.querySelector('h1').style.fontSize = `${currentSize}em`;
   document.querySelector('.content').style.fontSize = `${currentSize + 0.4}em`;
};

const makeSmaller = () => {
   currentSize -= 0.2;
   document.querySelector('h1').style.fontSize = `${currentSize}em`;
   document.querySelector('.content').style.fontSize = `${currentSize + 0.4}em`;   
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

