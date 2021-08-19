import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() public type: string = 'submit'
    @Input() public modifier: string = ''

    @Output() public onClick: EventEmitter<void> = new EventEmitter()

    get classObject(): {[el: string]: boolean} {
        return {
            'app-button--third': this.modifier === 'third',
            'app-button--accept': this.modifier === 'accept',
            'app-button--cancel': this.modifier === 'cancel',
            'app-button--second': this.modifier === 'second',
            'app-button--primary': this.modifier === 'primary'
        }
    }

    clickHandler(): void {
        this.onClick.emit()
    }
}
