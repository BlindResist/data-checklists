import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() public type: string = 'submit'
    @Input() public modifier: string = ''

    @Output() public onClick = new EventEmitter()

    get classObject(): {[el: string]: boolean} {
        return {
            'app-button--primary': this.modifier === 'primary',
            'app-button--second': this.modifier === 'second',
            'app-button--third': this.modifier === 'third'
        }
    }

    clickHandler(): void {
        this.onClick.emit()
    }
}