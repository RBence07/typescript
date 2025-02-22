import { Note } from "./Note";
import { Status } from "../models/Status";

export interface WorkNote extends Note {
  status: Status;

  updateStatus(status: Status): void;
}
