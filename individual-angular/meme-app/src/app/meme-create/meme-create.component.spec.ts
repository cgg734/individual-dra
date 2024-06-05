import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeCreateComponent } from './meme-create.component';

describe('MemeCreateComponent', () => {
  let component: MemeCreateComponent;
  let fixture: ComponentFixture<MemeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
