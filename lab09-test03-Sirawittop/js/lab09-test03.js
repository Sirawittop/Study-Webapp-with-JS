/* add code after this comment */

document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll(".panel");
  
    function togglePanel() {
      this.classList.toggle("open");
    }
  
    panels.forEach(panel => {
      panel.addEventListener("click", togglePanel);
    });
  });
  