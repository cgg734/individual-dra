import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMemesComponent } from './info-memes.component';

describe('InfoMemesComponent', () => {
  let component: InfoMemesComponent;
  let fixture: ComponentFixture<InfoMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoMemesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
