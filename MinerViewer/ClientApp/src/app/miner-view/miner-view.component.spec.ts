import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinerViewComponent } from './miner-view.component';

describe('MinerViewComponent', () => {
  let component: MinerViewComponent;
  let fixture: ComponentFixture<MinerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
