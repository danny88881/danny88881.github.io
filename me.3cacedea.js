var light_mode = false;
const themeButton = document.getElementById('color-mode');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
let body = document.body;
themeButton.onclick = ()=>{
    if (light_mode) {
        light_mode = false;
        body.classList.replace('light', 'dark');
        moon.classList.replace('other-mode', 'current-mode');
        sun.classList.replace('current-mode', 'other-mode');
    } else {
        light_mode = true;
        body.classList.replace('dark', 'light');
        moon.classList.replace('current-mode', 'other-mode');
        sun.classList.replace('other-mode', 'current-mode');
    }
};

//# sourceMappingURL=me.3cacedea.js.map
