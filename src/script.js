import './style.css';
    
document.querySelector('.button2').addEventListener('click', comoJogar);
document.querySelector('.button3').addEventListener('click', creditos);
document.querySelector('.button4').addEventListener('click', retornar);
    
    document.querySelector('.main1').style.display = 'flex';
    document.querySelector('.main2').style.display = 'none';
    document.querySelector('.main3').style.display = 'none';
    document.querySelector('.main4').style.display = 'none';

    export function comoJogar() {
    document.querySelector('.main1').style.display = 'none';
    document.querySelector('.main2').style.display = 'none';
    document.querySelector('.main3').style.display = 'flex';
    document.querySelector('.main4').style.display = 'none';
  }
  export function creditos(){
    document.querySelector('.main1').style.display = 'none';
    document.querySelector('.main2').style.display = 'none';
    document.querySelector('.main3').style.display = 'none';
    document.querySelector('.main4').style.display = 'flex';
  }
  export function retornar(){
    document.querySelector('.main1').style.display = 'flex';
    document.querySelector('.main2').style.display = 'none';
    document.querySelector('.main3').style.display = 'none';
    document.querySelector('.main4').style.display = 'none';
  }

  
