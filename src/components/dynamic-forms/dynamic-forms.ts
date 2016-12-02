import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'dynamic-forms',
  templateUrl: 'dynamic-forms.html'
})
export class DynamicFormsComponent {

  @Input() inputs = [];
  @Output('send') submitted: EventEmitter<any> = new EventEmitter();
  inputsForms = [];
  form: FormGroup;
  values = '';

  constructor(
    public fb: FormBuilder
  ) {
    
  }

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

  onSubmit(){
    this.values = JSON.stringify(this.form.value);
    this.submitted.emit(this.form.value);
    console.log(this.values)
  }

} 