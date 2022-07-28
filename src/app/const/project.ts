export enum TaskStatus {
  inProgress = 'in-progress',
  backlog = 'backlog',
  active = 'active',
  completed = 'completed',
}

export type TreePath = number[];

export interface ProjectTask {
  id: number;
  name: string;
  status: TaskStatus;
  description: string;
  children?: ProjectTask[]
}

export interface Project {
  id: number;
  name: String;
  tasks: ProjectTask[]
}

export type ProjectJsonResponse = Record<string, Project[]>
