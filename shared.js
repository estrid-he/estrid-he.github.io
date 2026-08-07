fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
    const yearTarget = document.querySelector('[data-current-year]');
    if (yearTarget) {
      yearTarget.textContent = new Date().getFullYear();
    }
  });
