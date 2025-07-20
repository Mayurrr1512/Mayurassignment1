window.onload = () => {
  document.getElementById("footer-text").innerHTML = `© ${new Date().getFullYear()} Mayur Harshadbhai Patel`;

  // Show image after 10s
  setTimeout(() => {
    document.getElementById("profile-pic").style.display = "block";
  }, 10000);
};
