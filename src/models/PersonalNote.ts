import { Note } from "./Note";
import { PersonalNote as IPersonalNote } from "../interfaces/PersonalNote";

export class PersonalNote extends Note implements IPersonalNote {
  constructor(title: string, content: string, color: string, tags?: string[]) {
    super(title, content, color, tags);
  }
}
