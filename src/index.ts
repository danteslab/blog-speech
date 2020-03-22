import * as gTTS from 'gtts'
import { spawn } from 'child_process'
import { Scrapper } from './modules/Scrapper'
import { DevtoStrategy } from './modules/strategies/devto.strategy'

const scrapper = new Scrapper()

scrapper.use(new DevtoStrategy())

const filePath = '/tmp/hello.mp3'

async function main() {
  const text = await scrapper.getText(
    'devto',
    'https://dev.to/singh1114/create-react-based-blog-using-netlify-cms-and-gatsby-2c21'
  )
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
