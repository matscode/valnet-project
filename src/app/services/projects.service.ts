import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { ProjectJsonResponse } from '../const/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  constructor(private http: HttpClient) { }

  fetchProjects(): Observable<ProjectJsonResponse> {
    return this.http.get<ProjectJsonResponse>('assets/projects.json');
  }
}
