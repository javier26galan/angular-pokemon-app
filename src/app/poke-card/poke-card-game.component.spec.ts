import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCardGameComponent } from './poke-card-game.component';

describe('PokeCardGameComponent', () => {
  let component: PokeCardGameComponent;
  let fixture: ComponentFixture<PokeCardGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeCardGameComponent]
    });
    fixture = TestBed.createComponent(PokeCardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
