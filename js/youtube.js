;

// VIDEO

if($('#player').length){
  var player;
  function onYouTubeIframeAPIReady() {
    console.log('onYouTubeIframeAPIReady');
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'AYOwxNYvs3I',
      playerVars: { 'autoplay': 1, 'controls': 1, 'info': 0, 'rel': 0, 'wmode': 'transparent' },
      events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      }
    });
  }
  function onPlayerReady(event) {
    console.log('onPlayerReady');
    event.target.playVideo();

    player.setSize(window.innerWidth, window.innerWidth * 9/16);

    player.mute();
    player.stopVideo();

    var videoPlay = false;
    $(window).scroll(function() {
      var winTop = parseInt($(window).scrollTop());
      var vidTop = parseInt($('#video').offset().top);

      if(vidTop - winTop <= 200){
        player.playVideo();
      }else{
        player.stopVideo();
      }
    });
  }
}

