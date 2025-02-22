import { Note } from "./Note";
import { IPersonalNote } from "../interfaces/IPersonalNote";

export class PersonalNote extends Note implements IPersonalNote {
  constructor(title: string, content: string, color: string, tags?: string[]) {
    super(title, content, color, tags);
  }
}
