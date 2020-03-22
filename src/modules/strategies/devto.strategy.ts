import { BaseStrategy } from './base.strategy'
import * as cheerio from 'cheerio'
import { Strategy } from './strategy.interface'

export class DevtoStrategy extends BaseStrategy implements Strategy {
  constructor() {
    super('devto')
  }

  async loadHtml(uri: string): Promise<string> {
    const res = await this.loadFromUri(uri)
    console.log('Dante: DevtoStrategy -> res', res)
    return 'Traduce esto'
  }
}
