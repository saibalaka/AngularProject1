import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporterComponent } from './exporter.component';

describe('ExporterComponent', () => {
  let component: ExporterComponent;
  let fixture: ComponentFixture<ExporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExporterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
