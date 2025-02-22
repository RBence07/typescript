import { INote } from "./INote";

export interface IIdeaNote extends INote {
  feasibility: number | null;

  setFeasibility(feasibility: number): void;
}
