import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {
    @Input() value: string = ''
    @Input() type: string = 'text'
    @Input() name: string = 'input'
    @Input() placeholder: string = ''
    @Input() focused: boolean = false

    @Output() onChange: EventEmitter<string> = new EventEmitter()

    @ViewChild('input') input!: ElementRef<HTMLInputElement>

    ngAfterViewInit() {
        if (this.focused) this.input.nativeElement.focus()
    }

    changeHandler(): void {
        this.onChange.emit(this.value)
    }
}
