import { Strategy } from './strategies/strategy.interface'

type Strategies = {
  [key: string]: Strategy
}

export class Scrapper {
  private strategies: Strategies

  constructor() {
    this.strategies = {}
  }

  use(strategy: Strategy) {
    this.strategies[strategy.getName()] = strategy
  }

  async getText(strategyName: string, uri: string): Promise<string> {
    const text = await this.strategies[strategyName].loadTextFromUri(uri)
    return text
  }
}
