import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMinerTableComponent } from './add-miner-table.component';

describe('AddMinerTableComponent', () => {
  let component: AddMinerTableComponent;
  let fixture: ComponentFixture<AddMinerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMinerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMinerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
