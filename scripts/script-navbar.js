const url = window.location.href;
const segments = url.split("/");
const lastSegment = segments[segments.length - 2];

var pageLink = document.getElementById(lastSegment);

if(pageLink) {
  pageLink.classList.toggle('active');
} else {
  homeLink = document.getElementById('home');
  homeLink.classList.toggle('active');
}