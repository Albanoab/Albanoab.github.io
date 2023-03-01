
//  
function changeBackground() {
    const colors = ['#a8c0ff', '#cbb4d4', '#7b8dbe', '#a8c0ff', '#cbb4d4'];
    let i = 0;
  
    setInterval(() => {
      document.body.style.background = colors[i];
      i = (i + 1) % colors.length;
    }, 5000); 
  }
  
  changeBackground(); // funcion para cambiar el color del fondo

  document.addEventListener('DOMContentLoaded', () => {
    changeBackground();
  });