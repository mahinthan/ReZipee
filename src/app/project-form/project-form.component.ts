import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectStatuses: string[] = ['Stable', 'Critical', 'Finished'];

  projectForm: FormGroup;

  invalidProjectName: string = 'test';

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      // 'projectName': new FormControl(null, [Validators.required, this.isProjectNameValid.bind(this)]),
      'projectName': new FormControl(null, [Validators.required], this.isProjectNameValid.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  /*isProjectNameValid(control: FormControl) : { [message: string]: boolean } {
    return (control.value === this.invalidProjectName) ? { 'isProjectNameValid': true } : null;
  }*/

  isProjectNameValid(control: FormControl): Observable<any> | Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        (control.value === this.invalidProjectName) ? resolve({ 'isProjectNameValid': true })
          : resolve(null);
      }, 1500);
    });
    return promise;
  }

}