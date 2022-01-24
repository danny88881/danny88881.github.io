var gscrollTimer, glastScrollFireTime = 0;
var gminScrollTime = 100;
function throttledGameScroll() {
    if (doScrollUpdate) {
        var now = new Date().getTime();
        if (!gscrollTimer) {
            if (now - glastScrollFireTime > 3 * gminScrollTime) {
                scrollUpdate();
                glastScrollFireTime = now;
            }
            gscrollTimer = setTimeout(function() {
                gscrollTimer = null;
                glastScrollFireTime = new Date().getTime();
                var scrollY = window.scrollY;
                var scrollPointProfessional = document.getElementById("professional").offsetTop;
                var scrollPointIndie = document.getElementById("indie").offsetTop;
                var scrollPointGraveyard = document.getElementById("graveyard").offsetTop;
                if (scrollY >= scrollPointGraveyard) {
                    //console.log("GRAVE")
                    document.body.style.background = "rgb(100, 100, 100)";
                    document.body.style.setProperty("--theme-1-primary", "black");
                } else if (scrollY >= scrollPointIndie) {
                    //console.log("INDIE")
                    document.body.style.background = "";
                    document.body.style.setProperty("--theme-1-primary", "");
                } else if (scrollY >= scrollPointProfessional) {
                    //console.log("PROFESSIONAL")
                    document.body.style.background = "rgb(10, 10, 10)";
                    document.body.style.setProperty("--theme-1-primary", "rgb(200, 200, 200)");
                } else {
                    //console.log("NONE")
                    document.body.style.background = "";
                    document.body.style.setProperty("--theme-1-primary", "");
                //document.body.style.setProperty("--theme-2-primary", "rgb(162, 53, 53)");
                }
            }, gminScrollTime);
        }
    }
}
function initGame() {
    document.getElementById("launchMinimize").onmouseup = function() {
        document.getElementById("windowThing").classList.add("closed");
        document.getElementById("launchScale").classList.add("closed");
    };
    document.getElementById("launchClose").onmouseup = function() {
        document.getElementById("windowThing").classList.add("closed");
        document.getElementById("launchScale").classList.add("closed");
    };
    document.getElementById("okbutton").onmouseup = function() {
    };
    document.getElementById("nobutton").onmouseup = function() {
        document.getElementById("windowThing").classList.add("closed");
        document.getElementById("launchScale").classList.add("closed");
    };
    document.getElementById("exe").onmouseup = function() {
        document.getElementById("windowThing").classList.remove("closed");
        document.getElementById("launchScale").classList.remove("closed");
    };
} /*
var tetris = [[]];
var tetris_width = 16;
var tetris_height = 32;
var block_size = 16;

class Block {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    draw(ctx) {
        var col = window.getComputedStyle( document.body ,null).getPropertyValue('--theme-1-primary');
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.fillRect(this.x - block_size / 2, this.y - block_size / 2, block_size, block_size);
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
            if (Math.abs(this.x - this.baseX) > 8) {
                this.x -= bdx / 10;
            }
            if (Math.abs(this.y - this.baseY) > 8) {
                this.y -= bdy / 10;
            }
        }
        this.size = canvas.width / 200 + canvas.width / 200 / (Math.max(1, distFromBase*0.01));
    }
}

var tetris_pieces = [
        [
            [4,4],
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [3,3],
            [1,0,0],
            [1,1,1],
            [0,0,0]
        ],
        [
            [3,3],
            [0,0,1],
            [1,1,1],
            [0,0,0]
        ],
        [
            [2,2],
            [1,1],
            [1,1]
        ],
        [
            [3,3],
            [0,1,1],
            [1,1,0],
            [0,0,0]
        ],
        [
            [3,3],
            [0,1,0],
            [1,1,1],
            [0,0,0]
        ],
        [
            [3,3],
            [1,1,0],
            [0,1,1],
            [0,0,0]
        ]
    ];

function tetrisInit() {
    canvas = document.getElementById("tetriscanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight;

    block_size = canvas.height / tetris_height;

    console.log("TETRIS OK");

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particleArr.length; ++i) {
            particleArr[i].draw(ctx);
            particleArr[i].update(ctx);
        }
        if (currentPage == "art") {
            requestAnimationFrame(animate);
        }
    }

    animate();  

    var frames = document.querySelectorAll(".galleryitem .image");
    var iframes = document.getElementById("websiteart");
    var framespans = document.querySelectorAll("#gallery span.galleryitem");
    
    if (Math.random() < 0.8 || true) {
        iframes.style.borderImage = borderarr[Math.floor(Math.random() * borderarr.length)];
    }
    for (var i = 0; i < frames.length; ++i) {
        if (Math.random() < 0.6) {
            frames[i].style.borderWidth = ((Math.random() * 80) + 20) + "px";
            frames[i].style.borderImage = borderarr[Math.floor(Math.random() * borderarr.length)];
        }
    }
    for (var i = 0; i < framespans.length; ++i) {
        framespans[i].style.animation = `wiggle-float-${Boolean(Math.floor(Math.random() * 2))?"l":"r"} ${(Math.random() * 0.4 - 0.2) + 3.2}s ease-in-out ${Math.random() * 1}s infinite`;
    }
}
*/ 

//# sourceMappingURL=me.82c554bf.js.map
