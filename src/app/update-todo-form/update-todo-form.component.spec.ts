import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodoFormComponent } from './update-todo-form.component';

describe('UpdateTodoFormComponent', () => {
  let component: UpdateTodoFormComponent;
  let fixture: ComponentFixture<UpdateTodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTodoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
