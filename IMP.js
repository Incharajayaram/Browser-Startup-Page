document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.circle-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
              document.querySelector('.circle-cursor').style.border = '3px solid black';
        });
        link.addEventListener('mouseleave', function() {
              document.querySelector('.circle-cursor').style.border = '3px solid white';
        });
    });

document.addEventListener('scroll', () => {
    const cursor = document.querySelector('.circle-cursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + window.scrollY + 'px';
});
  
  
  
var cursor = document.querySelector(".circle-cursor");

document.addEventListener("mouseout", function(event) {
  if (event.relatedTarget === null) {
   document.querySelector(".circle-cursor").style.display = "none";
   document.body.style.cursor = "default"; // Change cursor back to default if it's out of the page
  }
});

document.addEventListener("mouseover", () => {
        document.querySelector(".circle-cursor").style.display = "block";
        document.body.style.cursor = "none"; // Hide default cursor when mouse is over the page
    });