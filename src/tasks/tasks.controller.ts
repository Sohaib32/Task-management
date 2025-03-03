import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  addTasks(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.addTasks(createTaskDto);
  }
  @Get('all')
  tasks() {
    return this.tasksService.getTasks();
  }
  @Get(':id')
  taskById(@Param('id') id: any) {
    return this.tasksService.getTaskById(id);
  }
  @Delete(':id')
  delTask(@Param('id') id: any) {
    return this.tasksService.delTaskById(id);
  }
  @Put(':id')
  updateTask(@Param('id') id: any, @Body() updateTaskDto: CreateTaskDto) {
    return this.tasksService.upDateTask(id, updateTaskDto);
  }
}
