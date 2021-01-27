import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePage1Component } from './table-page1.component';

describe('TablePage1Component', () => {
  let component: TablePage1Component;
  let fixture: ComponentFixture<TablePage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
