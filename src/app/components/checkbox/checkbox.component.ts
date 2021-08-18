import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
    @Input() name: string = 'checkbox'
    @Input() checked: boolean = false

    @Output() onChange: EventEmitter<boolean> = new EventEmitter()

    changeHandler(): void {
        this.onChange.emit(this.checked)
    }
}
