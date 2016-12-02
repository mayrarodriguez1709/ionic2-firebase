import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'dynamic-forms',
  templateUrl: 'dynamic-forms.html'
})
export class DynamicFormsComponent {

  @Input() inputs = [];
  inputsForms = [];
  form: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {}

  ngOnInit(){
    console.log(this.inputs);
    this.form = this.makeForm;
    this.inputsForms = this.inputs;
  }

  private get makeForm(){
    let inputs = {};
    this.inputs.forEach(item => {
      inputs[item.name] = [item.value || '']
    })
    return this.fb.group(inputs);
  }

}