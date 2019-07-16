import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../http-services/data.service';
import { Router, ActivatedRoute, ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  public pocForm: FormGroup;
  public errors: any = [];
  private id;
  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pocForm = fb.group({
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      budget: ['', [Validators.required]],
      gender: ['Male', [Validators.required]]
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.dataService.get(this.id).then(res => {
        this.pocForm.get('name').setValue(res.name);
        this.pocForm.get('dob').setValue(res.dob);
        this.pocForm.get('email').setValue(res.email);
        this.pocForm.get('budget').setValue(res.budget);
        this.pocForm.get('gender').setValue(res.gender);
      }).catch(err => {
        alert('Invalid ID');
        this.router.navigate(['']);
      });
    });
  }

  onSubmit() {
    if (this.pocForm.valid) {
      this.dataService.update(this.id, this.pocForm.value).then(res => {
        if (res.id) {
          alert('Values Updated');
          this.router.navigate(['']);
        }
      });
    } else {
      const invalidControls = this.findInvalidControls();
      invalidControls.forEach(controlName => {
        this.errors.push(controlName.toUpperCase() + ' is Invalid Please type Again Thanks.');
      });
    }
  }

  findInvalidControls() {
    const invalid = [];
    const controls = this.pocForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
  }

}
