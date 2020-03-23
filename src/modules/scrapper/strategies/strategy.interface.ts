export interface Strategy {
  getName(): string

  loadTextFromUri(uri: string): Promise<string>
}
