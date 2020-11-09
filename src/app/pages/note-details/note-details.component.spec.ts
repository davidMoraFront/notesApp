import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { NoteDetailsComponent } from './note-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

describe('NoteDetailsComponent', () => {
  let component: NoteDetailsComponent;
  let fixture: ComponentFixture<NoteDetailsComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteDetailsComponent],
      imports: [RouterTestingModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', fakeAsync(() => {
    spyOn(component, 'cancel');
    const cancel = fixture.debugElement.nativeElement.querySelector(
      'button.is-light'
    );
    cancel.click();
    tick();
    expect(component.cancel).toHaveBeenCalled();
  }));

  it('should navigate when click cancel is pressed', fakeAsync(() => {
    location = TestBed.get(Location);
    const cancel = fixture.debugElement.nativeElement.querySelector(
      'button.is-light'
    );
    cancel.click();
    tick();
    expect(location.path()).toBe('/');
  }));
});
