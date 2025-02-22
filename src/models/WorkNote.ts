import { Note } from "./Note";
import { Status } from "./Status";
import { IWorkNote } from "../interfaces/IWorkNote";

export class WorkNote extends Note implements IWorkNote {
  public status: Status = Status.NotStarted;

  constructor(
    title: string,
    content: string,
    color: string,
    tags?: string[],
    status?: Status
  ) {
    super(title, content, color, tags);
    if (status !== undefined) {
      this.status = status;
    }
  }

  generateString(): string {
    let info = super.generateString();
    info += `Status: ${this.status}\n`;
    return info;
  }

  displayNote(): void {
    console.log(this.generateString());
  }

  updateStatus(status: Status): void {
    this.status = status;
  }
}
