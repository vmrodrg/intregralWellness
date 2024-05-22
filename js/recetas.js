// mostrar ocultar recetas 

function sdes() {
    var x = document.getElementById("decDesayuno")
    if (x.style.display === "block") {
      x.style.display = "none"
    } else {
      x.style.display = "block"
    }
    decAlmuerzo.style.display = "none"
    decMerienda.style.display = "none"
    decCena.style.display = "none"
  }
  
  function salm() {
    var x = document.getElementById("decAlmuerzo")
    if (x.style.display === "block") {
      x.style.display = "none"
    } else {
      x.style.display = "block"
    }
    decDesayuno.style.display = "none"
    decMerienda.style.display = "none"
    decCena.style.display = "none"
  }
  
  function smer() {
    var x = document.getElementById("decMerienda")
    if (x.style.display === "block") {
      x.style.display = "none"
    } else {
      x.style.display = "block"
    }
    decDesayuno.style.display = "none"
    decAlmuerzo.style.display = "none"  
    decCena.style.display = "none"
  }
  
  function scen() {
    var x = document.getElementById("decCena")
    if (x.style.display === "block") {
      x.style.display = "none"
    } else {
      x.style.display = "block"
    }
    decDesayuno.style.display = "none"
    decAlmuerzo.style.display = "none"
    decMerienda.style.display = "none"
    
  }
  
  // fin** mostrar ocultar recetas 