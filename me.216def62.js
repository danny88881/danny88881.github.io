var fontarr = [
    "Abril",
    "Lobster",
    "Architects",
    "VCR",
    "MajorMono"
];
var prevfontindex = 0;
var borderarr = [
    "url(./PictureFrames/frame1.webp) 158",
    "url(./PictureFrames/frame2.webp) 178",
    "url(./PictureFrames/frame3.webp) 187",
    "url(./PictureFrames/frame4.webp) 97",
    "url(./PictureFrames/frame5.webp) 190", 
];
function artUpdate() {
//var title = document.getElementById("arttitle");
//title.style.fontFamily = fontarr[Math.floor(Math.random() * fontarr.length)];
}
var ascrollTimer, alastScrollFireTime = 0;
var aminScrollTime = 200;
function throttledArtScroll() {
    if (doScrollUpdate) {
        var now = new Date().getTime();
        if (!ascrollTimer) {
            if (now - alastScrollFireTime > aminScrollTime) {
                artUpdate();
                alastScrollFireTime = now;
            }
        }
    }
}
// https://www.youtube.com/watch?v=XGioNBHrFU4 awesome vid
var canvas = null;
var particleArr = [];
const mouse = {
    x: null,
    y: null,
    radius: 150
};
class Particle {
    constructor(x, y, bx, by){
        this.x = x;
        this.y = y;
        this.size = 20;
        this.baseX = bx;
        this.baseY = by;
        this.density = Math.random() * 10 + 10;
    }
    draw(ctx) {
        var col = window.getComputedStyle(document.body, null).getPropertyValue('--theme-3-primary');
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update(ctx) {
        var dx = mouse.x - this.x;
        var dy = mouse.y - this.y;
        var len = Math.sqrt(dx * dx + dy * dy);
        var forceDirX = dx / len;
        var forceDirY = dy / len;
        var maxDist = mouse.radius;
        let force = (maxDist - len) / maxDist;
        let dirX = forceDirX * force * this.density;
        let dirY = forceDirY * force * this.density;
        let bdx = this.x - this.baseX;
        let bdy = this.y - this.baseY;
        let distFromBase = Math.sqrt(bdx * bdx + bdy * bdy);
        if (len < mouse.radius) {
            this.x -= dirX;
            this.y -= dirY;
            this.size = 25;
        } else {
            if (Math.abs(this.x - this.baseX) > 8) this.x -= bdx / 10;
            if (Math.abs(this.y - this.baseY) > 8) this.y -= bdy / 10;
        }
        this.size = canvas.width / 200 + canvas.width / 200 / Math.max(1, distFromBase * 0.01);
    }
}
function initArt() {
    canvas = document.getElementById("arttitlecanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight;
    console.log("ART OK");
    ctx.fillStyle = 'white';
    ctx.font = '40px Abril';
    ctx.fillText('ART', 0, 50);
    const data = ctx.getImageData(0, 0, 100, 100);
    var xOffset = canvas.width * 0.1;
    var yOffset = -80;
    particleArr = [];
    for(let y = 0; y < data.height; ++y){
        for(let x = 0; x < data.width; ++x)if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
            var xpos = x * document.body.clientWidth / 100 + xOffset;
            var ypos = y * document.body.clientWidth / 100 + yOffset;
            //console.log(Math.round(xpos / document.body.clientWidth) * (document.body.clientWidth - 100) + 50)
            var xstart = Math.round(xpos / document.body.clientWidth) * (document.body.clientWidth - 100) + 50;
            //var ystart = Math.round(ypos / window.innerHeight) * (window.innerHeight - 100) + 50;
            //console.log(document.body.clientWidth)
            particleArr.push(new Particle(xstart, ypos, xpos, ypos));
        }
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < particleArr.length; ++i){
            particleArr[i].draw(ctx);
            particleArr[i].update(ctx);
        }
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        //ctx.putImageData(data, 0, 0);
        requestAnimationFrame(animate);
    }
    animate();
    var frames = document.querySelectorAll(".galleryitem .image");
    var iframes = document.getElementById("websiteart");
    var framespans = document.querySelectorAll("#gallery span.galleryitem");
    iframes.style.borderImage = borderarr[Math.floor(Math.random() * borderarr.length)];
    for(var i1 = 0; i1 < frames.length; ++i1)if (Math.random() < 0.6) {
        frames[i1].style.borderWidth = Math.random() * 80 + 20 + "px";
        frames[i1].style.borderImage = borderarr[Math.floor(Math.random() * borderarr.length)];
    }
    for(var i1 = 0; i1 < framespans.length; ++i1)framespans[i1].style.animation = `wiggle-float-${Boolean(Math.floor(Math.random() * 2)) ? "l" : "r"} ${Math.random() * 0.4 - 0.2 + 3.2}s ease-in-out ${Math.random() * 1}s infinite`;
}
function randomizeFont() {
    canvas = document.getElementById("arttitlecanvas");
    if (canvas != null) {
        const ctx = canvas.getContext("2d");
        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = 'white';
        var rand = Math.floor(Math.random() * fontarr.length);
        if (rand == prevfontindex) {
            rand += 1;
            rand = rand % fontarr.length;
        }
        prevfontindex = rand;
        ctx.font = '40px ' + fontarr[rand];
        ctx.fillText('ART', 0, 50);
        const data = ctx.getImageData(0, 0, 100, 100);
        var xOffset = canvas.width * 0.1;
        var yOffset = -80;
        var newPartArr = [];
        for(let y = 0; y < data.height; ++y){
            for(let x = 0; x < data.width; ++x)if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
                var xpos = x * document.body.clientWidth / 100 + xOffset;
                var ypos = y * document.body.clientWidth / 100 + yOffset;
                if (newPartArr.length < particleArr.length) newPartArr.push(new Particle(particleArr[newPartArr.length].x, particleArr[newPartArr.length].y, xpos, ypos));
                else particleArr.push(new Particle(xpos, ypos, xpos, ypos));
            }
        }
        particleArr = newPartArr;
    }
}
function artMouseMove(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}
function artClickMouse() {
    randomizeFont();
}

//# sourceMappingURL=me.216def62.js.map
