


function jogo() {
    document.querySelector('.main1').style.display = 'none';
    document.querySelector('.main2').style.display = 'flex';
    document.querySelector('.main3').style.display = 'none';
    document.querySelector('.main4').style.display = 'none';
  
  
  
    const audio = document.getElementById('audio');
    const upCpu = document.getElementById('upCpu');
    const downCpu = document.getElementById('downCpu');
    const leftCpu = document.getElementById('leftCpu');
    const rightCpu = document.getElementById('rightCpu');
    const upPlayer = document.getElementById('upPlayer');
    const downPlayer = document.getElementById('downPlayer');
    const leftPlayer = document.getElementById('leftPlayer');
    const rightPlayer = document.getElementById('rightPlayer');
  
    const upCheck = false;
    const downCheck = false;
    const leftCheck = false;
    const rightCheck = false;
  
    audio.play();
  
    
    const teclaSpan = document.getElementById('tecla');
  
  
    document.addEventListener('keydown', function (event) {
      
      switch (event.keyCode) {
        case 37:
          leftPlayer.pause();
          leftPlayer.currentTime = 0;
          leftPlayer.play();
          teclaSpan.textContent = 'Seta para a esquerda';
          break;
        case 38:
          upPlayer.pause();
          upPlayer.currentTime = 0;
          upPlayer.play();
          teclaSpan.textContent = 'Seta para cima';
          break;
        case 39:
          rightPlayer.pause();
          rightPlayer.currentTime = 0;
          rightPlayer.play();
          teclaSpan.textContent = 'Seta para a direita';
          break;
        case 40:
          downPlayer.pause();
          downPlayer.currentTime = 0;
          downPlayer.play();
          teclaSpan.textContent = 'Seta para baixo';
          break;
        default:
          teclaSpan.textContent = 'Outra tecla';
          break;
      }
    });
  
    let tempoInicial = null;
  
  setTimeout(function () {
    upCpu.play();
    setTimeout(function () {
      setTimeout(function () {
    
        document.addEventListener("keydown", function(event) {
          const tempoPressionado = Date.now() - tempoInicial;
          if (tempoPressionado >= 500 && tempoPressionado <= 1500) {
          
            alert("Tecla pressionada no tempo certo!");
          } else {
     
            alert("Nenhuma tecla foi pressionada no tempo certo!");
          }
        });
      }, 1500);
    }, 500);
  }, 11500);
  
  document.addEventListener("keydown", function(event) {
    if (tempoInicial === null) {
      tempoInicial = Date.now();
    }
  });
  
  
  }
  
  
  
  