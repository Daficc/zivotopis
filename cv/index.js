function toggleFact(id) {
    var fact = document.getElementById(id);
    if (fact.style.display === "none") {
      fact.style.display = "block";
    } else {
      fact.style.display = "none";
    }
  }
  

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > (document.body.scrollHeight/99) || document.documentElement.scrollTop > (document.documentElement.scrollHeight/99)) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}



