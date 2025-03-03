import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: any[] = [];

  addTasks(createTaskDto: CreateTaskDto) {
    const { name, description } = createTaskDto;
    const task = { id: uuidv4(), name, description };
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

  upDateTask(id: any, createTaskDto: CreateTaskDto) {
    const newTask = this.getTaskById(id);
    if (!newTask) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
    newTask.name = createTaskDto.name;
    newTask.description = createTaskDto.description;
    return newTask;
  }
}
