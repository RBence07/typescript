import { Note } from "./Note";
import { IdeaNote as IIdeaNote} from "../interfaces/IdeaNote";

export class IdeaNote extends Note implements IIdeaNote {
  public feasibility: number | null = null;

  constructor(
    title: string,
    content: string,
    color: string,
    tags?: string[],
    feasibility?: number
  ) {
    super(title, content, color, tags);
    if (feasibility !== undefined && feasibility >= 1 && feasibility <= 10) {
      this.feasibility = feasibility;
    }
  }

  toString(): string {
    let info = super.toString();
    info += `Feasibility: ${this.feasibility}\n`;
    return info;
  }

  setFeasibility(feasibility: number): void {
    if (feasibility >= 1 && feasibility <= 10) {
      this.feasibility = feasibility;
    }
  }

  logNote(): void {
    console.log(this.toString());
  }
}
