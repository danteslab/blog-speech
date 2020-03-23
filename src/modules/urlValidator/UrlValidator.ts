import * as isUrl from 'is-valid-http-url'

export class UrlValidator {
  private baseUrl: string
  private regexp: RegExp

  constructor(baseUrl: string) {
    if (!isUrl(baseUrl)) {
      throw new Error('The baseUrl is not valid')
    }

    this.baseUrl = baseUrl
    this.regexp = new RegExp(`^${baseUrl}`, 'i')
  }

  validate(url: string): string {
    if (!this.regexp.test(url)) {
      throw new Error(`Url is not valid, should contain ${this.getBaseUrl()}`)
    }

    return url
  }

  getBaseUrl(): string {
    return this.baseUrl
  }
}
