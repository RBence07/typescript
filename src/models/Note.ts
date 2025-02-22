import { Note as INote } from "../interfaces/Note";

export class Note implements INote {
  public created: Date = new Date();

  constructor(
    public title: string,
    public content: string,
    public color: string = "white",
    public tags: string[] = []
  ) {}

  toString(): string {
    let info = `Title: ${this.title}\n`;
    info += `Content: ${this.content}\n`;
    info += `Created At: ${this.created}\n`;
    info += `Color: ${this.color}\n`;

    if (this.tags.length > 0) {
      info += `Tags: ${this.tags.join(", ")}\n`;
    }

    return info;
  }

  addTag(tag: string): void {
    if (!this.tags.includes(tag)) {
      this.tags.push(tag);
    }
  }

  logNote(): void {
    console.log(this.toString());
  }
}
