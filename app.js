const romans = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};

const input = document.querySelector('#number-input')
const button = document.querySelector('#generating-btn')
const error = document.querySelector('#error')
const message = document.querySelector('#message')
const displayRom = document.querySelector('#roman-number')
const loading = document.querySelector('#loading')

const setupEventListeners = function(){
    input.addEventListener('keydown', (e) => {
        if(e.key === 'Enter')
        {
            e.preventDefault()
            generateNumber()  
        }
    })
    button.addEventListener('click', (e) => {
    e.preventDefault()
    generateNumber()
})
}

function convertToRoman(num) {
  let str = '';
  function aprNum(num)
  {
    let mx = 0;
    for(const property in romans)
     if (Number(property) <= num) mx = Number(property);
    return mx;
  }
  
  while(num > 0)
  {
    let mx = aprNum(num)
    if(num - mx >=0) str+=romans[mx];
    num-=mx;
  }
  return str;
}

const isValidNumber = function(text){
    return parseInt(text)<=3999 && text.match(/^[1-9][0-9]*$/);
}

const generateNumber = function () {
  try {
    error.textContent = ''; 
    const text = input.value;
    if (!isValidNumber(text)) throw new Error('Invalid number');
    const num = parseInt(text);
    const roman = convertToRoman(num);

    displayRom.classList.add('hidden');
    message.classList.remove('hidden');
    loading.style.display = 'flex';
    displayRom.textContent = roman;

    const displayNumber = async() => {
      displayRom.classList.remove('hidden');
    }
    setTimeout(async() => {
      loading.style.display = 'none';
      await displayNumber()
    }, 2000);
  } catch (err) {
    message.classList.add('hidden');
    displayRom.classList.add('hidden');
    error.classList.remove('hidden')
    error.textContent = err.message;
  }
}


document.addEventListener('DOMContentLoaded', async () => {
    loading.style.display = 'none'
    displayRom.classList.add('hidden')
    setupEventListeners()
})