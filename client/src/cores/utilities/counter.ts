import { compose } from "ramda";

export class Counter {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  private removeBreaks(chars: string[]) {
    const index = chars.findIndex((str) => str.match(/\r?\n|\r/g));
    if (index === -1) {
      return chars;
    }
    const newChars = [
      ...chars.slice(0, index),
      ...chars[index].split(/\r?\n|\r/),
      ...chars.slice(index + 1, chars.length),
    ];

    return newChars;
  }

  private removeEmptyElements(chars: string[]) {
    const index = chars.findIndex((char) => char.trim() === "");

    if (index === -1) return chars;

    chars.splice(index, 1);

    return chars;
  }

  getCharacters(): number {
    return this.text.trim().length;
  }

  getWords(): number {
    const value = this.text.trim();
    const words = compose(
      this.removeEmptyElements,
      this.removeBreaks
    )(value.split(" "));

    return words.length;
  }

  getSentences(): number {
    const value = this.text.trim();
    const sentences = compose(
      this.removeEmptyElements,
      this.removeBreaks
    )(value.split("."));

    return sentences.length;
  }

  getParagraphs(): number {
    const value = this.text.trim();
    const paragraphs = this.removeEmptyElements(value.split(/\r?\n|\r/));

    return paragraphs.length;
  }
}
