const run = ()=>{
    console.log("HEALLO!");
};
run();
function hoverMenu(toset) {
    var rot = document.getElementById(toset).getElementsByClassName("rotate")[0];
    rot.classList.add('showmenu');
}
function stopHoverMenu(toset) {
    var rot = document.getElementById(toset).getElementsByClassName("rotate")[0];
    rot.classList.remove('showmenu');
}
var quotes = [
    'ee oo -roddy ricch',
    'comparison is the thief of joy -theodore roosevelt',
    'the bad news is time flies. the good news is you’re the pilot. -Michael Altshuler',
    'If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely. -Roald Dahl',
    'Tell me why I never want to hear you say I want it that way -Backstreet Boys',
    'I’m nobody’s pawn, Shawn. I’m a Queen. -Burton Guster',
    'I will eat you in manageable, bite-sized pieces. -Burton Guster',
    'I’m having a clear vision on a cloudy day. -Shawn Spencer',
    'What isn’t clear is why people always say ‘goes without saying,’ yet still feel compelled to say the thing that was supposed to go without saying. Doesn’t that bother you? -Shawn Spencer',
    'Songs are like hugs that mouths give to ears! -Mabel Pines',
    'When there’s no cops around, anything’s legal! -Grunkle Stan',
    'You can’t force someone to love you the best thing you can do is strive to be someone worthy of loving -Dipper Pines',
    'I don’t need to feel like I’m waiting to be noticed. I know who I am, and I’ll know what I want if and when it ever comes along. -Fionna',
    'What you’re feeling is called infatuation. The pain is the product of you overvaluing a projected, imaginary relationship with me. -Princess Bubblegum',
    'Dude, sucking at something is the first step towards being sorta good at something. -Jake the Dog',
    'When bad things happen, I know you want to believe they are a joke, But sometimes life is scary and dark. That is why we must find the light. -BMO.',
    'The things that make me different are the things that make me me -Piglet',
    'You and I are a team. There is nothing more important than our friendship. -Mike wazowski',
    'Your time is limited, so don’t waste it living someone else’s life. -Steve Jobs',
    'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',
    'Let no one ever come to you without leaving happier. -Mother Teresa',
    'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson',
    'In the end, it’s not the years in your life that count. It’s the life in your years. -Abraham Lincoln',
    'Never let the fear of striking out keep you from playing the game. -Babe Ruth',
    'Life is never fair, and perhaps it is a good thing for most of us that it is not. -Oscar Wilde',
    'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
    'Life is what happens when you’re busy making other plans. -John Lennon',
    'In three words I can sum up everything I’ve learned about life: it goes on. -Robert Frost',
    'Sometimes the smallest things take up the most room in your heart. -Winnie the Pooh'
];
var quote_interval = setInterval(quote_cycle, 25);
var quote_box = document.getElementById("quote-scroll");
var initial_quote = false;
var doScrollUpdate = true;
function quote_cycle() {
    var rect = quote_box.getBoundingClientRect();
    if (!initial_quote || rect.right < -10) {
        initial_quote = true;
        var randNum = Math.floor(Math.random() * quotes.length);
        var text = "return \"" + quotes[randNum].toLowerCase() + "\";";
        quote_box.innerHTML = text;
        quote_box.style.transform = "translateX(100vw)";
    } else quote_box.style.transform = "translateX(" + (rect.left - 1) + "px)";
}
quote_cycle();
function shadowUpdate(e) {
    var shadowitems = document.body.getElementsByClassName("mouseshadow");
    for(var i = 0; i < shadowitems.length; ++i){
        var rect = shadowitems[i].getBoundingClientRect();
        var x_offset = (rect.right + rect.left) / 2 - e.pageX;
        var y_offset = (rect.bottom + rect.top) / 2 - e.pageY;
        var len = Math.pow(x_offset * x_offset + y_offset * y_offset, 0.1);
        var mov = 1 / len;
        var col1 = window.getComputedStyle(document.body, null).getPropertyValue('--theme-1-primary');
        var col2 = window.getComputedStyle(document.body, null).getPropertyValue('--theme-2-primary');
        var col3 = window.getComputedStyle(document.body, null).getPropertyValue('--theme-3-primary');
        var col4 = window.getComputedStyle(document.body, null).getPropertyValue('--theme-4-primary');
        shadowitems[i].style.textShadow = `
    ${x_offset * mov * 0.02}px ${y_offset * mov * 0.02}px ${col1},
    ${-x_offset * mov * 0.02}px ${-y_offset * mov * 0.02}px ${col2},
    ${x_offset * mov * 0.02}px ${-y_offset * mov * 0.02}px ${col3},
    ${x_offset * mov * 0.2}px ${y_offset * mov * 0.2}px ${col4}`;
    }
}
window.onmousemove = function(e) {
    shadowUpdate(e);
};

//# sourceMappingURL=index.f1c72d30.js.map
