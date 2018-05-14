/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableCardComponent } from './table-card.component';

describe('TableCardComponent', () => {
  let component: TableCardComponent;
  let fixture: ComponentFixture<TableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
