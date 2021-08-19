import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-creator',
    templateUrl: './creator.component.html',
    styleUrls: ['./creator.component.scss']
})
export class CreatorComponent {
    @Output() onCreate: EventEmitter<string> = new EventEmitter()

    public value: string = ''
    public inited: boolean = false

    addNewItem(): void {
        this.onCreate.emit(this.value)
        this.cancelNewItem()
    }

    initNewItem(): void {
        this.inited = true
    }

    cancelNewItem(): void {
        this.value = ''
        this.inited = false
    }
}
