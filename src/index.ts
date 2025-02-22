import { PersonalNote } from "./models/PersonalNote";
import { WorkNote } from "./models/WorkNote";
import { IdeaNote } from "./models/IdeaNote";
import { Status } from "./models/Status";
import { Note } from "./models/Note";

const isWorkNote = (note: Note): note is WorkNote => note instanceof WorkNote;
const isIdeaNote = (note: Note): note is IdeaNote => note instanceof IdeaNote;

const notes: Note[] = [
  new PersonalNote("Personal Task", "Complete this personal task.", "blue"),
  new WorkNote(
    "Work Task",
    "Complete this work task.",
    "green",
    ["important"],
    Status.InProgress
  ),
  new IdeaNote(
    "Idea",
    "This is a great idea for a project.",
    "yellow",
    ["new", "exciting"],
    8
  ),
];

notes.forEach((note) => {
  note.logNote();
});

console.log("------------\n");

if (isWorkNote(notes[1])) {
  (notes[1] as WorkNote).updateStatus(Status.Completed);
  notes[1].logNote();
}

if (isIdeaNote(notes[1])) {
  (notes[2] as IdeaNote).setFeasibility(20);
  notes[1].logNote();
}
