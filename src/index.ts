import * as gTTS from 'gtts'
import { spawn } from 'child_process'
import { Scrapper } from './modules/scrapper'
import { DevtoStrategy } from './modules/scrapper'
import { DanteCalderonStrategy } from './modules/scrapper/strategies/dantecalderon.strategy'

const scrapper = new Scrapper()

scrapper
  .use(new DevtoStrategy())
  .use(new DanteCalderonStrategy())
  .use('danti', new DanteCalderonStrategy())

const filePath = '/tmp/hello.mp3'

async function main() {
  const text = await scrapper.getText('danti', 'https://dantecalderodn.dev/blog/happy-new-year-2020')
  const gtts = new gTTS(text, 'es')

  gtts.save(filePath, (err, result) => {
    if (err) {
      throw new Error(err)
    }
    try {
      spawn('vlc', ['/tmp/hello.mp3'])
    } catch (err) {
      console.error('Error on play audio')
    }
    console.log('Success! Open file /tmp/hello.mp3 to hear result.')
  })
}

main().catch(console.log)
