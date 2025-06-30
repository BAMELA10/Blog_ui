/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetPostComponent } from './GetPost.component';

describe('GetPostComponent', () => {
  let component: GetPostComponent;
  let fixture: ComponentFixture<GetPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
