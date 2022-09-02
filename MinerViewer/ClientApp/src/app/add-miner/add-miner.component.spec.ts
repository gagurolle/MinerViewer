import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMinerComponent } from './add-miner.component';

describe('AddMinerComponent', () => {
  let component: AddMinerComponent;
  let fixture: ComponentFixture<AddMinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
