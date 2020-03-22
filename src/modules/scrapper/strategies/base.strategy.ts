import fetch from 'node-fetch'

export class BaseStrategy {
  private name

  constructor(name) {
    this.name = name
  }

  getName(): string {
    return this.name
  }

  protected async loadFromUri(uri): Promise<string> {
    return await fetch(uri).then(res => res.text())
  }
}
