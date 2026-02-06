import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-client-data',
  imports: [ReactiveFormsModule],
  templateUrl: './client-data.html',
  styleUrl: './client-data.css',
})
export class ClientData {
  clientForm: FormGroup = new FormGroup({});
  formBuilder = inject(FormBuilder);

  initializeForm() {
    this.clientForm = new FormGroup({
      clientId: new FormControl(0),
      contactPersonName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      companyName: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl(''),
      state: new FormControl(''),
      EmployeeStrength: new FormControl(''),
      gstNo: new FormControl(''),
      contactNo: new FormControl(''),
      regNo: new FormControl(''),
    });
    this.clientForm = this.formBuilder.group({
      clientId: new FormControl(0),
      contactPersonName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  opneModal() {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
    //document.getElementById('myModal').style.display = 'block';
    // debugger;
    // if(this.modalInstance) {
    //   this.modalInstance.nativeElement.style.display = 'block'
    // }

    // const alertComp =  this.alertCompoInstance.alertTitle;
  }
}
