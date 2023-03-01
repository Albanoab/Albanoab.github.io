    // youtube api
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // variables para control de video
    var player;
    var videoControls = document.getElementById('video-controls');
    var prevButton = document.getElementById('prev-video');
    var nextButton = document.getElementById('next-video');

    // videos para el display de youtube
    var videoIds = ['LNNCFZzfAvc', '3ONwnZ613Mk', 'ahrKbLMexUs', '9qYRTcFcFKE', '4BKPFfCMivM', '6fE7YFJk17Y', 'vd5OPjZ4hvc', 'bknqZ1dosdY'];

    // variable de video index
    var currentVideoIndex = 0;

    // funcion para inicializar el reproductor
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoIds[currentVideoIndex],
        playerVars: {
          'autoplay': 1,
          'controls': 0,
          'disablekb': 1,
          'iv_load_policy': 3,
          'modestbranding': 1,
          'rel': 0,
          'showinfo': 0
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    // funcion para manejar al reproductor
    function onPlayerReady(event) {
      // oculta los controles
      event.target.setPlaybackQuality('hd1080');
      event.target.playVideo();
      event.target.mute();

      // muestra controles de video custom
      videoControls.style.display = 'block';

      // event listeners para los botones
      prevButton.addEventListener('click', playPreviousVideo);
      nextButton.addEventListener('click', playNextVideo);
    }

    // funcion cuando cambia el estado del reproductor
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.ENDED) {
        // si termina el video va el siguiente
        playNextVideo();
      }
    }

    // funcion para video previo
    function playPreviousVideo() {
      currentVideoIndex--;
      if (currentVideoIndex < 0) {
        currentVideoIndex = videoIds.length - 1;
      }
      player.loadVideoById(videoIds[currentVideoIndex]);
    }

// funcion para proximo video
function playNextVideo() {
  currentVideoIndex++;
  if (currentVideoIndex >= videoIds.length) {
    currentVideoIndex = 0;
  }
  player.loadVideoById(videoIds[currentVideoIndex]);
}
// funcion para mute/unmute
const toggleAudioButton = document.getElementById('toggle-audio');
toggleAudioButton.addEventListener('click', function() {
  if (player.isMuted()) {
    player.unMute();
  } else {
    player.mute();
  }
});