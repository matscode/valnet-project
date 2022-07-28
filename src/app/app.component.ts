import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { Project, ProjectTask, TreePath } from './const/project';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'valnet-project';
  projects: Project[] = [];
  selectedTreePath: Subject<TreePath> = new Subject<TreePath>();
  selectedTask?: ProjectTask;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.fetchProjects().
      subscribe(({projects}) => this.projects = projects);
  }

  deleteTaskNode(id: number): void {
    // filter projects
    function walkThroughProjects(nodes: Array<any>, id: number): void {
      // console.log(nodes);
      // const taskIndex = nodes.findIndex(node => node.id === id);
      // if ( taskIndex > -1) {
      //   nodes.splice(taskIndex, 1)
      // } else {
      //   nodes.some(item => {
      //     if (item.tasks) {
      //       walkThroughProjects(item.children, id);
      //     } else if (item.children) {
      //       walkThroughProjects(item.children, id)
      //     }
      //   });
      // }
    }

    // const projects =

    console.log(this.projects);
    walkThroughProjects(this.projects, id);
  }

  selectTaskTreeNode(treePath: TreePath, task: ProjectTask): void {
    this.selectedTreePath.next(treePath);

    // TODO: find a use for task
    this.selectedTask = task;
  }
}
