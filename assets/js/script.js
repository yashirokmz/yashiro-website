document.getElementById('textOverlay').addEventListener('click', () => {

    const logoPF = document.getElementById('logoPF')
    const audioPlayer = document.getElementById('audioPlayer');
    const layerNone = document.getElementById('layerNone')
    const textOverlay = document.getElementById('textOverlay')

    textOverlay.style.display = 'none';
    layerNone.style.display = 'block'
    logoPF.style.display = 'none';

    audioPlayer.play();
    audioPlayer.volume = 1.2;

});

async function getUsername(){
    
    await fetch(`https://api.lanyard.rest/v1/users/784563521123254272`, {
    headers: {
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    method: "GET"
    })
    .then(async function (req) {
        const reqdata = await req.json()

        const username = reqdata.data.discord_user.username;

        document.getElementById('nameUser').innerText = username;
    })
    
}
getUsername()

const github = () => (window.open("https://github.com/yashirokmz"))
const spotify = () => (window.open("https://open.spotify.com/user/31kgl43tra6zu2zxnpwud2inkai4?si=WCWZmCaRRyKHPOzZYW99Sg"))