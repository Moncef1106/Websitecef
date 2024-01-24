// Function to toggle dark mode for the entire page
function toggleDarkMode() {
  // Get the body element
  var body = document.body;

  // Toggle the "dark-mode" class on the body, switching between light and dark mode
  body.classList.toggle("dark-mode");

  // Get the dark mode icon element
  var darkModeIcon = document.getElementById("darkModeIcon");

  // Update the dark mode icon based on the current mode
  darkModeIcon.textContent = body.classList.contains("dark-mode") ? "🔆" : "🌕";
}
