// // Apply the initial theme based on localStorage or system preference
// document.documentElement.classList.toggle(
//     "dark",
//     localStorage.currentTheme === "dark" ||
//       (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
//   );
  
//   // Function to set the theme to light mode
//   function setLightMode() {
//     document.documentElement.classList.remove("dark");
//     localStorage.currentTheme = "light";
//   }
  
//   // Function to set the theme to dark mode
//   function setDarkMode() {
//     document.documentElement.classList.add("dark");
//     localStorage.currentTheme = "dark";
//   }
  
//   // Function to respect the OS preference
//   function respectOSPreference() {
//     localStorage.removeItem("theme");
//     document.documentElement.classList.toggle(
//       "dark",
//       window.matchMedia("(prefers-color-scheme: dark)").matches
//     );
//   }
  
//   // Event listener for theme toggle button
//   document.getElementById('theme-toggle').addEventListener('click', () => {
//     if (document.documentElement.classList.contains('dark')) {
//       setLightMode();
//     } else {
//       setDarkMode();
//     }
//   });