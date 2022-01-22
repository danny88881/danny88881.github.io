// I manually downloaded everything :-|
// NEED TO PASTE songs FOLDER INTO dist
const playpause_indicators = document.getElementsByClassName('playpause');
const audio = document.getElementById("music-player");
const control = document.getElementById("music-control");
const playpause = document.getElementById("playpause-control");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const progresscontainer = document.getElementById("progress-container");
const volume_bar = document.getElementById("volume");
const volumecontainer = document.getElementById("volume-container");
const record = document.getElementById("record");
const record_image = document.getElementById("image");
const songname = document.getElementById("song-name");
const songnote = document.getElementById("song-note");
const SRC = 0;
const IMG = 1;
const DATE = 2;
const VOL = 3;
const SEC = 4;
//sort date vertically
//sort genre horizontally
// using audacity ogg quality 3
var songs = {
    "Takoyaki - Ocean Song": [
        "Takoyaki/ocean_song_collegeJam",
        "takoyaki",
        "4/5/21",
        100,
        "games"
    ],
    "Takoyaki - Dungeon Song": [
        "Takoyaki/dungeon_song_collegeJam",
        "takoyaki",
        "4/5/21",
        100,
        "games"
    ],
    "The Game of Mao - Chillax": [
        "TheGameofMao/chillax",
        "thegameofmao",
        "8/6/19",
        100,
        "games"
    ],
    "5 minutes to save the world - 5 minutes to compose": [
        "5minutes/beepbox",
        "5minutes",
        "4/7/19",
        100,
        "games"
    ],
    "tiny people BIG GUNS - yeeee": [
        "tinypeopleBIGGUNS/yeeee",
        "tinypeopleBIGGUNS",
        "11/4/18",
        100,
        "games"
    ],
    "Finite Space - space age": [
        "Finite Space/space-age",
        "finitespace",
        "5/13/18",
        100,
        "games"
    ],
    "A Knight of Music - Song 1": [
        "AKnightOfMusic/ld-41-song-1",
        "aknightofmusic",
        "4/22/18",
        100,
        "games"
    ],
    "A Knight of Music - Song 2": [
        "AKnightOfMusic/ld-41-song-2",
        "aknightofmusic",
        "4/22/18",
        100,
        "games"
    ],
    "A Knight of Music - Song 3": [
        "AKnightOfMusic/ld-41-song-3",
        "aknightofmusic",
        "4/22/18",
        100,
        "games"
    ],
    "A Knight of Music - Song 4": [
        "AKnightOfMusic/ld-41-song-4",
        "aknightofmusic",
        "4/22/18",
        100,
        "games"
    ],
    "[ - - - ]": [
        "[ - - - ]",
        "[ - - - ]",
        "6/4/19",
        100,
        "me"
    ],
    "[intro]": [
        "[intro]",
        "unknown",
        "8/27/20",
        100,
        "me"
    ],
    "sounds of the seaside": [
        "1 - 12 - 19",
        "1-12-19",
        "1/12/19",
        100,
        "me"
    ],
    "cup noodles": [
        "1 2 3",
        "cup noodles",
        "1/20/19",
        100,
        "me"
    ],
    "smr": [
        "1-10-19",
        "smr",
        "1/11/19",
        100,
        "me"
    ],
    "31° CLOUDY feels like 22° H 31° / L 22° UV Index 1 of 10": [
        "1-13-19",
        "1-13-19",
        "1/13/19",
        100,
        "me"
    ],
    "1": [
        "1",
        "1",
        "1/8/21",
        70,
        "me"
    ],
    "3 30 20 alt": [
        "3 30 20 alt",
        "tom",
        "3/30/20",
        100,
        "me"
    ],
    "10-7-17": [
        "10-7-17",
        "10-7-17",
        "10/7/17",
        100,
        "me"
    ],
    "11-14-21guitar": [
        "11-14-21guitar",
        "11-14-21guitar",
        "11/14/21",
        100,
        "me"
    ],
    "1985": [
        "1985",
        "synth",
        "4/9/19",
        100,
        "me"
    ],
    "a week in minutes": [
        "a week in minutes",
        "unknown",
        "9/1/20",
        100,
        "me"
    ],
    "club penguin 🤤": [
        "beaches",
        "tom",
        "5/30/20",
        100,
        "me"
    ],
    //"boggers":                                                      ["boggers",                 "unknown",           "8/28/20",  90, "me"],
    "bombpopthing": [
        "bombpopthing",
        "unknown",
        "6/24/20",
        100,
        "me"
    ],
    "breathe": [
        "breathe-edit",
        "synth",
        "10/22/18",
        100,
        "me"
    ],
    "sound test": [
        "bruh",
        "soundtest",
        "5/30/20",
        100,
        "me"
    ],
    "kwk_lps": [
        "bruh2",
        "1",
        "7/17/20",
        100,
        "me"
    ],
    "days like these": [
        "days like these",
        "days like these",
        "12/2/18",
        100,
        "me"
    ],
    "earthquakes": [
        "earthquakes",
        "synth",
        "2/25/20",
        100,
        "me"
    ],
    "ending2": [
        "ending2",
        "ending2",
        "8/18/21",
        100,
        "me"
    ],
    "floppy disk": [
        "floppy disc",
        "synth",
        "4/19/19",
        100,
        "me"
    ],
    "frosty mornings": [
        "frosty mornings_alt",
        "frosty",
        "11/22/18",
        100,
        "me"
    ],
    "g1": [
        "g1",
        "g1",
        "1/22/21",
        100,
        "me"
    ],
    "heyU!": [
        "heyU!",
        "heyu",
        "10/26/18",
        100,
        "me"
    ],
    "is this music or something?": [
        "is this music or something. (shortened)",
        "isthismusic",
        "10/25/18",
        100,
        "me"
    ],
    "it rains": [
        "itrains",
        "itrains",
        "6/23/20",
        100,
        "me"
    ],
    "L8": [
        "L8",
        "l8",
        "12/8/18",
        100,
        "me"
    ],
    "minecraft 🤤": [
        "minecraft",
        "tom",
        "2/25/20",
        100,
        "me"
    ],
    "new dawn": [
        "new-dawn cut",
        "synth",
        "10/22/18",
        100,
        "me"
    ],
    "normal tuesday night": [
        "normal tuesday night (mp3cut.net)",
        "anormal",
        "10/29/18",
        100,
        "me"
    ],
    "numb": [
        "numb",
        "numb",
        "6/27/20",
        100,
        "me"
    ],
    "nvr4get": [
        "nvr4get",
        "synth",
        "4/9/19",
        100,
        "me"
    ],
    "nadnaks": [
        "skandandrakething",
        "unknown",
        "4/24/20",
        100,
        "me"
    ],
    "sky dance": [
        "sky-dance-edit",
        "synth",
        "10/22/18",
        100,
        "me"
    ],
    "spring": [
        "spring",
        "unknown",
        "3/3/20",
        100,
        "me"
    ],
    "testasd": [
        "testasd",
        "unknown",
        "4/3/20",
        100,
        "me"
    ],
    "tetrishit": [
        "tetrishit-final",
        "tetrishit",
        "6/21/20",
        100,
        "me"
    ],
    "game over": [
        "thisisntwhatiwanted",
        "synth",
        "5/30/20",
        100,
        "me"
    ],
    "waiting for the bus": [
        "waiting for the bus",
        "waitingforthe",
        "10/29/18",
        100,
        "me"
    ],
    "-waiting-": [
        "waiting",
        "waiting",
        "6/9/19",
        100,
        "me"
    ],
    "waltz of a better past": [
        "waltz of a better past",
        "waltzofa",
        "11/15/18",
        100,
        "me"
    ],
    "can’t help falling in love": [
        "1 2 3 4",
        "unme",
        "1/20/19",
        100,
        "illegal"
    ],
    "jelly filled doughnuts": [
        "awaY",
        "ghibli2",
        "4/14/19",
        100,
        "illegal"
    ],
    "b careful w/ my heart": [
        "b careful with my heart",
        "bcareful",
        "5/30/20",
        100,
        "illegal"
    ],
    "Castle In The Sky": [
        "castle in the sky",
        "ghibli",
        "1/20/19",
        100,
        "illegal"
    ],
    "dearly beloved": [
        "dearly beloved",
        "dearly beloved",
        "2/13/19",
        100,
        "illegal"
    ],
    "do i dance inside ur head": [
        "do i dance inside ur head",
        "unknown",
        "8/7/20",
        100,
        "illegal"
    ],
    "fly me to the moon": [
        "flyme",
        "ohio",
        "7/27/20",
        100,
        "illegal"
    ],
    "for the best": [
        "for the best",
        "for the best",
        "8/29/20",
        100,
        "illegal"
    ],
    "fr fr fr this time": [
        "frfrfrthistime_v2",
        "tyler",
        "1/20/22",
        100,
        "illegal"
    ],
    "hope": [
        "good byes",
        "avatar",
        "12/10/19",
        100,
        "illegal"
    ],
    "goodbye": [
        "goodbye",
        "kingdomhearts",
        "6/24/20",
        100,
        "illegal"
    ],
    "花": [
        "hana",
        "hana",
        "7/27/20",
        100,
        "illegal"
    ],
    "heard.": [
        "heard.",
        "heard",
        "4/12/19",
        100,
        "illegal"
    ],
    "how did i get here": [
        "how did i get here",
        "howdidigethere",
        "8/28/20",
        100,
        "illegal"
    ],
    "how did we get here": [
        "how did we get here again.",
        "inuyasha",
        "9/19/19",
        100,
        "illegal"
    ],
    "losing interest": [
        "interest",
        "shiloh",
        "3/24/19",
        100,
        "illegal"
    ],
    "Koreaboo": [
        "koreaboo3",
        "koreaboo",
        "6/22/20",
        100,
        "illegal"
    ],
    "luv": [
        "l u v u",
        "fallinlove",
        "12/30/19",
        100,
        "illegal"
    ],
    "listen": [
        "listen",
        "unme",
        "1/20/19",
        100,
        "illegal"
    ],
    "[ . . . ]": [
        "lmAo",
        "[ . . . ]",
        "4/14/19",
        100,
        "illegal"
    ],
    "the wisp sings": [
        "love me",
        "wisp",
        "8/30/20",
        100,
        "illegal"
    ],
    "memories of a distant past": [
        "memories of the past",
        "zelda",
        "7/25/20",
        100,
        "illegal"
    ],
    "monsters": [
        "monsters",
        "monsters",
        "1/14/20",
        100,
        "illegal"
    ],
    "procrastination": [
        "nylo_1_edit",
        "unknown",
        "9/23/20",
        100,
        "illegal"
    ],
    "hide away": [
        "nylo_3_edit195",
        "hideaway",
        "9/23/20",
        100,
        "illegal"
    ],
    "One Summers Night": [
        "one summers night",
        "ghibli",
        "1/20/19",
        100,
        "illegal"
    ],
    "hot potato": [
        "our stars",
        "hotpotato",
        "9/19/19",
        100,
        "illegal"
    ],
    "さくら色の夢": [
        "sakura colored dreams",
        "deemo",
        "6/24/20",
        100,
        "illegal"
    ],
    "2009": [
        "sundays",
        "pokemon",
        "12/10/19",
        100,
        "illegal"
    ],
    "U&ME": [
        "U&ME",
        "unme",
        "11/29/18",
        100,
        "illegal"
    ],
    "weather": [
        "weather",
        "weather",
        "2/21/20",
        100,
        "illegal"
    ],
    "where have u been": [
        "where have u been (faster)",
        "persona",
        "2/12/19",
        100,
        "illegal"
    ],
    "youth": [
        "youth",
        "youth",
        "2/20/20",
        100,
        "illegal"
    ]
};
var notes = {
    "[ - - - ]": "i wish i could find the original image i took",
    "[intro]": "to what? i don't know",
    "sounds of the seaside": "",
    "cup noodles": "",
    "1": "i wish i made this one shorter",
    "smr": "",
    "31° CLOUDY feels like 22° H 31° / L 22° UV Index 1 of 10": "",
    "3 30 20 alt": "this goes so soft",
    "10-7-17": "i made this on an iphone. it is not very good",
    "11-14-21guitar": "i've been told this sounds like keshi, whoever that is.",
    "1985": "",
    "a week in minutes": "two and one tenth to be exact",
    "club penguin 🤤": "the ninja card game thing from club pengin",
    "boggers": "can't say the p-word anymore (penis)",
    "bombpopthing": ":-|",
    "breathe": "",
    "kwk_lps": "i do not like this one",
    "days like these": "",
    "earthquakes": "",
    "ending2": "there is no ending 1.",
    "floppy disk": "",
    "frosty mornings": "",
    "g1": "this sounds so familiar, just don't know from where...",
    "heyU!": "",
    "is this music or something?": "",
    "it rains": "this one is on spotify!",
    "L8": "",
    "minecraft 🤤": "actually tho",
    "new dawn": "yeah, i also don't believe that i created this",
    "normal tuesday night": "yes, every tuesday.",
    "numb": "i do not like this one either",
    "nvr4get": "",
    "nadnaks": "A genuine™ nadnaks remix",
    "sky dance": "",
    "spring": "more of a winter guy",
    "testasd": "why bass so loud",
    "tetrishit": "is it tetris-hit or tetri-shit?",
    "game over": "",
    "waiting for the bus": "",
    "-waiting-": "everything is ok",
    "waltz of a better past": "",
    "can't help falling in love": "..",
    "jelly filled doughnuts": "delicious",
    "b careful w/ my heart": "this one is good i think",
    "Castle In The Sky": "",
    "dearly beloved": "there is another",
    "do i dance inside ur head": "really really, gregory and the hawk is good",
    "fly me to the moon": "ohio",
    "for the best": "i like gregory and the hawk",
    "fr fr fr this time": "i can't help but ruin my favorite songs",
    "hope": "what a good show",
    "goodbye": "this is the other",
    "花": "i do like this one",
    "heard.": "",
    "how did i get here": "it go hard",
    "how did we get here": "yes, all i did was add a drum kit",
    "losing interest": "you gotta have a shiloh",
    "Koreaboo": "i-- nevermind",
    "luv": "all lofi producers gotta have this one",
    "listen": "i can't tell tbh",
    "[ . . . ]": "",
    "the wisp sings": "i do really like this one",
    "memories of a distant past": "haha, don't sue me nintendo",
    "monsters": "",
    "procrastination": "",
    "hide away": "i messed up the bass",
    "One Summers Night": "",
    "hot potato": "",
    "さくら色の夢": "deemo 😙",
    "2009": "it's a feeling y-know",
    "U&ME": "",
    "weather": "",
    "where have u been": "",
    "youth": ""
};
var songQueue = [];
var current_song = null;
var current_index = -1;
var volume = 0.4;
var max_volume = 100;
function loadSong(song) {
    context.resume();
    var current_song1 = song;
    current_index = songQueue.indexOf(current_song1);
    audio.src = "./songs/audio/" + songs[current_song1][SEC] + "/" + songs[current_song1][SRC] + ".ogg";
    record_image.src = "./songs/images/" + songs[current_song1][IMG] + ".webp";
    max_volume = songs[current_song1][VOL];
    audio.volume = max_volume * volume / 100;
    songname.innerText = song;
    songnote.innerText = "";
    if (song in notes) songnote.innerText = notes[song];
    playing = true;
    set_playpause(playing);
}
var percentDone = 0;
audio.addEventListener('timeupdate', (e)=>{
    const { duration , currentTime  } = e.target;
    const perc = currentTime / duration * 100;
    progress.style.width = `${perc}%`;
});
setProgress = function() {
//percentDone += 0.01;
//if( percentDone<=100 ) {
//    progress.style.width = percentDone + "%";
//};
};
//progress.addEventListener('transitionend', setProgress);
//setProgress();
var playing = false;
function set_playpause(play) {
    if (audio.src != "") {
        setProgress();
        playing = play;
        control.classList.add("touched");
        record.classList.add("touched");
        if (!playing) audio.pause();
        else audio.play();
        for(let i = 0; i < playpause_indicators.length; i++){
            const ind = playpause_indicators[i];
            if (playing) {
                ind.classList.add("play");
                control.classList.add("play");
                record.classList.add("play");
            } else {
                ind.classList.remove("play");
                control.classList.remove("play");
                record.classList.remove("play");
            }
        }
    }
}
audio.addEventListener('ended', ()=>{
    console.log("A");
    loadSong(songQueue[(current_index + 1 + songQueue.length) % songQueue.length]);
});
playpause.addEventListener('click', ()=>{
    set_playpause(!playing);
});
prev.addEventListener('click', ()=>{
    if (audio.src != "") loadSong(songQueue[(current_index - 1 + songQueue.length) % songQueue.length]);
});
next.addEventListener('click', ()=>{
    if (audio.src != "") loadSong(songQueue[(current_index + 1 + songQueue.length) % songQueue.length]);
});
progresscontainer.addEventListener('click', (e)=>{
    const width = progresscontainer.clientWidth;
    const xpos = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = xpos / width * duration;
});
volumecontainer.addEventListener('click', (e)=>{
    const width = volumecontainer.clientWidth;
    const xpos = e.offsetX;
    volume = xpos / width;
    volume_bar.style.width = `${volume * 100}%`;
    audio.volume = max_volume * volume / 100;
});
function scrollUpdate() {
    var fade_items = document.getElementsByClassName("fade");
    for(var i = 0; i < fade_items.length; ++i){
        var rect = fade_items[i].getBoundingClientRect();
        var bottom = rect.bottom;
        var top = rect.top;
        var sc_pos_bot = bottom / window.innerHeight;
        var sc_pos_top = top / window.innerHeight;
        /*if (sc_pos_top < 0.0) {
            var dist = Math.abs(sc_pos_top - 0.2);
            var n = Math.pow(1 / (dist + 1), 15);
            var perc = n;
            fade_items[i].style.opacity = `${perc * 100}%`;
            console.log(n);
        } else*/ if (sc_pos_bot > 0.86) {
            var dist = Math.abs(sc_pos_bot - 0.8);
            var n = Math.pow(1 / (dist + 1), 15);
            var perc = n;
            fade_items[i].style.opacity = `${perc * 100}%`;
            fade_items[i].style.pointerEvents = 'none';
        } else {
            fade_items[i].style.opacity = `${100}%`;
            fade_items[i].style.pointerEvents = 'all';
        }
    }
}
var scrollTimer, lastScrollFireTime = 0;
var minScrollTime = 10;
window.onscroll = function() {
    if (doScrollUpdate) {
        var now = new Date().getTime();
        if (!scrollTimer) {
            if (now - lastScrollFireTime > 3 * minScrollTime) {
                scrollUpdate();
                lastScrollFireTime = now;
            }
            scrollTimer = setTimeout(function() {
                scrollTimer = null;
                lastScrollFireTime = new Date().getTime();
                scrollUpdate();
            }, minScrollTime);
        }
    }
};
function dateComparison(a, b) {
    var d1 = songs[a][DATE].split('/');
    var d2 = songs[b][DATE].split('/');
    var comp_order = [
        2,
        0,
        1
    ];
    for (i of comp_order){
        if (parseInt(d1[i]) > parseInt(d2[i])) return -1;
        if (parseInt(d1[i]) < parseInt(d2[i])) return 1;
    }
    return 0;
}
/*
                        <div class="song item fade" style="animation: wiggle-float-l 3.2s ease-in-out 0.0s infinite;">
                            <div>
                                SONG NAME
                            </div>
                        </div>
*/ var context = new AudioContext();
var src = context.createMediaElementSource(audio);
var analyser = context.createAnalyser();
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function loadSongs(mine, illegal, date) {
    var keys = Object.keys(songs);
    keys = keys.sort(dateComparison);
    songQueue = keys;
    var last_month = "-1";
    var last_year = "-1";
    for (key of keys){
        var val = songs[key];
        if (val[SEC] == "games") continue;
        var valdate = songs[key][DATE].split('/');
        var year = valdate[2];
        var month = valdate[0];
        if (year != last_year || month != last_month) {
            last_year = year;
            last_month = month;
            var inhtml = date.innerHTML;
            inhtml += `<div class="colspacer fade">${months[month - 1]}<br>20${year}<br>|</div>`;
            date.innerHTML = inhtml;
        } else {
            var inhtml = date.innerHTML;
            inhtml += `<div class="colspacer fade"></div>`;
            date.innerHTML = inhtml;
        }
        var elem = null;
        if (val[SEC] == "me") {
            elem = mine;
            var inhtml = illegal.innerHTML;
            inhtml += `<div class="colspacer fade"></div>`;
            illegal.innerHTML = inhtml;
        } else if (val[SEC] == "illegal") {
            elem = illegal;
            var inhtml = mine.innerHTML;
            inhtml += `<div class="colspacer fade"></div>`;
            mine.innerHTML = inhtml;
        }
        if (elem != null) {
            var inhtml = elem.innerHTML;
            inhtml += `<div onclick='loadSong("${key}")' class='song item fade' style='animation: wiggle-float-${Boolean(Math.floor(Math.random() * 2)) ? "l" : "r"} ${Math.random() * 0.4 - 0.2 + 3.2}s ease-in-out ${Math.random() * 1}s infinite; 
            background-image: url("./songs/images/${val[IMG]}.webp");'><div>${key}</div></div>`;
            elem.innerHTML = inhtml;
        }
    }
    var soundtracks = document.querySelector("#sound_tracks").children;
    for(var i = 0; i < soundtracks.length; ++i)soundtracks[i].style.animation = `wiggle-float-${Boolean(Math.floor(Math.random() * 2)) ? "l" : "r"} ${Math.random() * 0.4 - 0.2 + 3.2}s ease-in-out ${Math.random() * 1}s infinite`;
}
// I love nick https://codepen.io/nfj525/pen/rVBaab
function visualizationInit() {
    context.resume();
    var canvas = document.getElementById("audiocanvas");
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight;
    canvas.style.bottom = "0px";
    canvas.style.width = "100%";
    canvas.style.zIndex = "-3";
    //console.log(canvas.width);
    var ctx = canvas.getContext("2d");
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
    //console.log(bufferLength);
    var dataArray = new Uint8Array(bufferLength);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = WIDTH / bufferLength * 2.5;
    var barHeight;
    var x = 0;
    function renderFrame() {
        requestAnimationFrame(renderFrame);
        x = 0;
        analyser.getByteFrequencyData(dataArray);
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = "#0000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.globalCompositeOperation = "multiply";
        for(var i = 0; i < bufferLength; i++){
            barHeight = dataArray[i];
            var r = barHeight + 25 * (i / bufferLength);
            var g = 250 * (i / bufferLength);
            var b = 50;
            var col = window.getComputedStyle(document.body, null).getPropertyValue('background-color'); //"#94949494"
            //window.getComputedStyle( document.body ,null).getPropertyValue('--theme-2-primary');
            //window.getComputedStyle( document.body ,null).getPropertyValue('background-color');
            ctx.fillStyle = col;
            ctx.globalAlpha = 0.9 * (r / 255);
            ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
            x += barWidth + 1;
        }
    }
    renderFrame();
} /*
Don't touch
soundcloud sucks ass.


        <script src="https://w.soundcloud.com/player/api.js" type="text/javascript"></script>

var iframeElement = document.querySelector('iframe');
var widget = SC.Widget(iframeElement);

widget.bind(SC.Widget.Events.READY, function() {
    // load new widget
    //widget.bind(SC.Widget.Events.FINISH, function() {
      //widget.load(newSoundUrl, {
      //  show_artwork: false
      //});
    //});
    console.log("WIDGET READY!!! SOUNDCLOUD API SUCKS!!!");
});

//widget.load("https://soundcloud.com/b-i-r-b-y2/ending2");

var playpause_indicators = document.getElementsByClassName('playpause');

var playing = false;
document.getElementById("playpause-control").addEventListener('click', function () {
    if (playing) {
        playing = false;
        widget.pause();
    } else {
        playing = true;
        widget.play();
    }
    
    for (let i = 0; i < playpause_indicators.length; i++) {
        const ind = playpause_indicators[i];
        if (playing) {
            ind.classList.add("play");
        } else {
            ind.classList.remove("play");
        }
    }
});

/* I guess this is illegal
function extractArtwork() {
    var frameContent = iframeElement.
    contentWindow.document.body.innerHTML;
    
    alert("frame content : " + frameContent);
}*/  /*sca.fetchKey().then(key=>{
    console.log(key);

    f9j7S63sJeOLnp0u8FxGfaHkYaleHoti

});*/ 

//# sourceMappingURL=music.cc140282.js.map
