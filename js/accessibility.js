const themeButton = document.getElementById("themeToggle");

let currentTheme = "dark";

themeButton.addEventListener("click", () => {

    if(currentTheme === "dark") {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        currentTheme = "light";
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        currentTheme = "dark";
    }
});
