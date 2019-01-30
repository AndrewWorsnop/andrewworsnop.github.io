document.addEventListener('keydown', function(e) {
  if (event.type == 'keydown') {
    let audio_id = '#audio_' + e.key.toLowerCase();
    console.log(audio_id);
    document.querySelector(audio_id).play();
  }
})
