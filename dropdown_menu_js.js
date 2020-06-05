let drp_menu = document.getElementById("dropdown");

document.getElementById("menu").addEventListener("click", openMenu);

function openMenu() {

  if (drp_menu.style.display === "block") {
    drp_menu.style.display = "none";
    // console.log("acum e none");
  }
  else {
    drp_menu.style.display = "block";
    // console.log("acum e block");
  }
}

window.onclick = function(event) {
      if (!event.target.matches('#menu')) {
        // console.log("it didn't match");
        drp_menu.style.display = "none";
      }
}

