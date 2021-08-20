import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemCreatorComponent } from './view-item-creator.component';

describe('ViewItemCreatorComponent', () => {
    let component: ViewItemCreatorComponent;
    let fixture: ComponentFixture<ViewItemCreatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewItemCreatorComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewItemCreatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
