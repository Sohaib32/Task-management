import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: any[] = [];

  addTasks(createTaskDto:CreateTaskDto) {
    const{name,description}=createTaskDto
    if (!name && description) {
      return 'Please enter name of task and it`s description';
    }
    const task = { id: uuidv4(), name , description};
    this.tasks.push(task);
    return task;
  }
  getTasks() {
    return this.tasks;
  }

  getTaskById(id: any) {
    return this.tasks.find((task) => task.id === id);
  }

  delTaskById(id: any) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }
}
