import { taskStatus } from '../task.model';

export class GetTaskFilterDto {
  status?: taskStatus;
  search?: string;
}
