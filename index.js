const gTTS = require('gtts');

var gtts = new gTTS('Dante eres un pendejo', 'es');

gtts.save('/tmp/hello.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file /tmp/hello.mp3 to hear result.');
});