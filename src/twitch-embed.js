console.log("This is a thing");
var options = { width: "100%", height: "100%", channel: "linusfrog", parent: [] };
var player = new Twitch.Player("twitch-embed", options);
player.addEventListener(Twitch.Player.PLAYING, () => { console.log(JSON.stringify(player.getQualities())); });
player.addEventListener(Twitch.Player.ENDED, () => {
    player.setChannel("kitboga");
    player.play();
});