document.addEventListener('DOMContentLoaded', function() {
  var url = window.location.href;
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(function(link) {
    if (url === link.href) {
      link.classList.add('active-link');
    }
  });
});
