export class Density {
  private text: string;
  private keyword: string;

  constructor(text: string, keyword: string) {
    this.text = text;
    this.keyword = keyword;
  }

  private getPhrases(): number {
    const phrases = this.keyword.split(" ");
    return phrases.length;
  }

  getMatches(): number {
    const words = this.text.trim().split(" ");
    const keywordRegex = new RegExp(this.keyword, "gim");
    const matches = words.filter((word) => keywordRegex.test(word));

    return matches.length;
  }

  getDensity(): number {
    const words = this.text.trim().split(" ");

    const dominator =
      words.length - this.getMatches() * (this.getPhrases() - 1);

    const density = dominator > 0 ? this.getMatches() / dominator : 1;

    return density;
  }
}
