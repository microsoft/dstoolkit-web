var linkBlock = document.getElementsByClassName("link-block");
var i;

const url = window.location.href;
const segments = url.split("/");
const lastSegment = segments[segments.length - 2];

var pageLink = document.getElementById(lastSegment);
var toggleMenuButton = document.getElementById('toggle-menu');
var menuContent = document.getElementById('links-menu');

if(pageLink) {
  pageLink.classList.toggle('active');
} else {
  homeLink = document.getElementById('home');
  homeLink.classList.toggle('active');
}

toggleMenuButton.addEventListener('click', () => {
  menuContent.classList.toggle('active');
})