import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMiniViewComponent } from './task-mini-view.component';

describe('TaskMiniViewComponent', () => {
  let component: TaskMiniViewComponent;
  let fixture: ComponentFixture<TaskMiniViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskMiniViewComponent]
    });
    fixture = TestBed.createComponent(TaskMiniViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
