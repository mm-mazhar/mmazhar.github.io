const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");
var icon=document.getElementById("icon");
//work around from https://stackoverflow.com/questions/65045510/what-is-the-best-method-to-change-an-img-src-using-javascript-with-django
var src = icon.getAttribute("data-original");

/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the body */
if (theme === "dark") {
    document.body.classList.add("dark");
    //work around from https://stackoverflow.com/questions/65045510/what-is-the-best-method-to-change-an-img-src-using-javascript-with-django
    icon.setAttribute("src", src);
    // original
    // icon.src="{% static 'images/sun.png' %}";
    //window.location.reload();
    
}

// event listener stops when the change theme button is clicked
toggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
if (theme === "dark") {
    // original
    //icon.src="{% static 'images/sun.png' %}";
    //work around from https://stackoverflow.com/questions/65045510/what-is-the-best-method-to-change-an-img-src-using-javascript-with-django
    icon.setAttribute("src", src);
    window.localStorage.setItem("theme", "light");
    window.location.reload();
} else {
    icon.src="{% static 'images/moon.png' %}";
    window.localStorage.setItem("theme", "dark");
    window.location.reload();
}
});