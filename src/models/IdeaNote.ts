import { IIdeaNote } from "../interfaces/IIdeaNote";
import { Note } from "./Note";

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

  generateString(): string {
    let info = super.generateString();
    info += `Feasibility: ${this.feasibility}\n`;
    return info;
  }

  setFeasibility(feasibility: number): void {
    if (feasibility >= 1 && feasibility <= 10) {
      this.feasibility = feasibility;
    }
  }
}
