import { TaskStatus } from './project';

export const StatusClasses = {
  [TaskStatus.inProgress]: 'bg-warning',
  [TaskStatus.active]: 'bg-info',
  [TaskStatus.backlog]: 'bg-secondary',
  [TaskStatus.completed]: 'bg-success',
}
