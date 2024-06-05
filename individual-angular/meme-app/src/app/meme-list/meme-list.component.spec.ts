import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeListComponent } from './meme-list.component';

describe('MemeListComponent', () => {
  let component: MemeListComponent;
  let fixture: ComponentFixture<MemeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
