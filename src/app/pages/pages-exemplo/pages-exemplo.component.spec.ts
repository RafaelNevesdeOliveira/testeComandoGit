import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesExemploComponent } from './pages-exemplo.component';

describe('PagesExemploComponent', () => {
  let component: PagesExemploComponent;
  let fixture: ComponentFixture<PagesExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesExemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
