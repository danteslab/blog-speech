import { BaseStrategy } from './base.strategy'
import * as cheerio from 'cheerio'
import { Strategy } from './strategy.interface'

export class DanteCalderonStrategy extends BaseStrategy implements Strategy {
  constructor() {
    super('dantecalderon')
  }

  async loadTextFromUri(uri: string): Promise<string> {
    const html = await this.loadFromUri(uri)

    const $ = cheerio.load(html)

    const title = $('#post_id').text()
    const by = `by  ${$('#post_authorname').text()}.`
    const body = $('#post_body').text()

    const text = title + by + body

    return text
  }
}
