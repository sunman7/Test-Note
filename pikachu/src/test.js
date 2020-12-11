import string from "./css"


const player = {
    id: undefined,
    n: 1,
    speed: 100,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2"),
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.play();
        player.bindEvents();
    },
    events: {
        "#btnPause": "pause",
        "#btnPlay": "play",
        "#slow": "slow",
        "#normal": "normal",
        "#fast": "fast",
    },
    bindEvents: () => {
        for (let key in player.events) {
            //避免出现这种Object.prototype.x = 1;情况发生
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key];
                document.querySelector(key).onclick = player[value];

            }
        }
    },
    run: () => {
        player.n += 1;
        if (player.n > string.length) {
            clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: () => {
        player.id = setInterval(player.run, player.speed);
    },
    slow: () => {
        player.pause();
        player.speed = 300;
        player.play();

    },
    normal: () => {
        player.pause();
        player.speed = 70;
        player.play();
    },
    fast: () => {
        player.pause();
        player.speed = 10;
        player.play();
    },
    pause: () => {
        console.log(player.id);
        window.clearInterval(player.id);
    }
}

player.init();


