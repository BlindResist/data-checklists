import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemCreatorComponent } from './list-item-creator.component';

describe('CreatorComponent', () => {
  let component: ListItemCreatorComponent;
  let fixture: ComponentFixture<ListItemCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
