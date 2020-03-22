export interface Strategy {
  getName(): string
  loadHtml(uri: string): Promise<string>
}
