// Footer function
function exp(){
    const exp = document.getElementsByClassName("expand");
  var i;
  for (i = 0; i < exp.length; i++) {
    exp[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      var coll = document.getElementById("change");
      if (content.style.display === "block") {
        content.style.display = "none";
        coll.textContent = "Collapse All ▲";
      } else {
        content.style.display = "block";
        coll.textContent = "Show All ▼";
      }
    });
  }
  }
  
  // Hidden Go to Top Button Function
  function scrollFunction() {
    let btn = document.querySelector(".topbutton");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  }

  // Go to Top Function
  function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }