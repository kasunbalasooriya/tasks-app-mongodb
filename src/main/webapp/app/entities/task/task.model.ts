import * as dayjs from 'dayjs';

export interface ITask {
  id?: string;
  name?: string | null;
  dueDate?: dayjs.Dayjs | null;
  completed?: boolean | null;
}

export class Task implements ITask {
  constructor(public id?: string, public name?: string | null, public dueDate?: dayjs.Dayjs | null, public completed?: boolean | null) {
    this.completed = this.completed ?? false;
  }
}

export function getTaskIdentifier(task: ITask): string | undefined {
  return task.id;
}
