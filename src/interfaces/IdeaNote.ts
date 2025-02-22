import { Note } from "./Note";

export interface IdeaNote extends Note {
  feasibility: number | null;

  setFeasibility(feasibility: number): void;
}
