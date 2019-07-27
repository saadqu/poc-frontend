import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../http-services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  public pocForm: FormGroup;
  public errors: any = [];
  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.pocForm = fb.group({
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      budget: ['', [Validators.required]],
      gender: ['Male', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  get name() { return this.pocForm.get('name'); }
  get email() { return this.pocForm.get('email'); }
  get dob() { return this.pocForm.get('dob'); }
  get budget() { return this.pocForm.get('budget'); }
  get gender() { return this.pocForm.get('gender'); }

  onSubmit() {
    if (this.pocForm.valid) {
      this.dataService.post(this.pocForm.value).then(res => {
        if (res.id) {
          alert('Values Added');
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
