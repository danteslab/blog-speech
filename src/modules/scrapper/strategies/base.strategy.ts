import fetch from 'node-fetch'
import { UrlValidator } from '../../urlValidator'

export class BaseStrategy {
  private name: string
  private validator: UrlValidator

  constructor(name: string, baseUrl: string) {
    this.name = name
    this.validator = new UrlValidator(baseUrl)
  }

  getName(): string {
    return this.name
  }

  protected async loadFromUri(uri): Promise<string> {
    this.validator.validate(uri)

    return await fetch(uri).then(res => res.text())
  }
}
