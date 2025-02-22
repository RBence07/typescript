import { INote } from "./INote";
import { Status } from "../models/Status";

export interface IWorkNote extends INote {
  status: Status;

  updateStatus(status: Status): void;
}
