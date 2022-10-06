import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsListComponent } from './task-details-list.component';

describe('TaskDetailsListComponent', () => {
  let component: TaskDetailsListComponent;
  let fixture: ComponentFixture<TaskDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
