import { BaseStrategy } from './base.strategy'
import * as cheerio from 'cheerio'
import { Strategy } from './strategy.interface'

export class DevtoStrategy extends BaseStrategy implements Strategy {
  constructor() {
    super('devto')
  }

  async loadTextFromUri(uri: string): Promise<string> {
    const html = await this.loadFromUri(uri)

    const $ = cheerio.load(html)

    const mainTitle = $('#main-title')

    const title = mainTitle.find('h1').text()
    const by = `by  ${mainTitle.find('h3 span span').text()}.`
    const body = $('#article-body').text()

    const text = title + by + body

    return text
  }
}
