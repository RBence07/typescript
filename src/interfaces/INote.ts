export interface INote {
  title: string;
  content: string;
  color: string;
  tags: string[];
  created: Date;

  generateString(): string;
  addTag(tag: string): void;
  displayNote(): void;
}
