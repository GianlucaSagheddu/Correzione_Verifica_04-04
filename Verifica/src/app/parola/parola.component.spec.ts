import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParolaComponent } from './parola.component';

describe('ParolaComponent', () => {
  let component: ParolaComponent;
  let fixture: ComponentFixture<ParolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
