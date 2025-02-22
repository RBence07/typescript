export interface INote {
  title: string;
  content: string;
  color: string;
  tags: string[];
  created: Date;

  toString(): string;
  addTag(tag: string): void;
  logNote(): void;
}
