import { Strategy } from './strategies/strategy.interface'

type Strategies = {
  [key: string]: Strategy
}

export class Scrapper {
  private strategies: Strategies

  constructor() {
    this.strategies = {}
  }

  use(name: string | Strategy, strategy?: Strategy) {
    if (typeof name === 'string') {
      if (!strategy) throw new Error('Scrapper must have a strategy instance')
      this.strategies[name] = strategy
    } else {
      this.strategies[(name as Strategy).getName()] = name
    }

    return this
  }

  unuse(name: string) {
    delete this.strategies[name]

    return this
  }

  async getText(strategyName: string, uri: string): Promise<string> {
    const text = await this.strategy(strategyName).loadTextFromUri(uri)

    return text
  }

  private strategy(name: string): Strategy {
    if (!this.strategies[name]) {
      throw new Error('Strategy not found')
    }

    return this.strategies[name]
  }
}
