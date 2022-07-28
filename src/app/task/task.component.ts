import { Component, Input, OnInit } from '@angular/core';
import { StatusClasses } from '../const/default';
import { ProjectTask, TreePath } from '../const/project';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  statusClasses: typeof StatusClasses = StatusClasses

  @Input() task!: ProjectTask;
  @Input() treePath!: TreePath;
  @Input() selectedTreePath?: Subject<TreePath>;
  @Input() selectedTreePathValue?: TreePath;
  @Input() onNodeSelect?: (treePath: TreePath, task: ProjectTask) => void;
  @Input() onDeleteNode?: (id: number) => void;
  localTreePath: TreePath = [];

  get hasChildren(){
    return this.task.children && this.task.children.length
  }

  get isSelected(){
    return this.selectedTreePathValue?.toString() === this.localTreePath.toString();
  }

  ngOnInit() {
    this.selectedTreePath?.subscribe((r) => this.selectedTreePathValue = r);
    this.localTreePath = [...this.treePath, this.task.id]
  }

  noop():void {}
}
