const gTTS = require('gtts');
const { spawn } = require('child_process')

var gtts = new gTTS('Dante eres un pendejo', 'es');

gtts.save('/tmp/hello.mp3', function (err, result) {
  if (err) { throw new Error(err) }
  try {
    spawn('vlc', ['/tmp/hello.mp3'], { detached: true })
  } catch (err) {
    console.error('Error on play audio')
  }
  console.log('Success! Open file /tmp/hello.mp3 to hear result.');
})