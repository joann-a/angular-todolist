import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTmrComponent } from './todo-tmr.component';

describe('TodoTmrComponent', () => {
  let component: TodoTmrComponent;
  let fixture: ComponentFixture<TodoTmrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTmrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
