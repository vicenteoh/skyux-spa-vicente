import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-my-inpute-module',
  templateUrl: './my-inpute-module.component.html',
  styleUrls: ['./my-inpute-module.component.scss']
})
export class MyInputeModuleComponent {
  @Input()
  public message: string;
}
