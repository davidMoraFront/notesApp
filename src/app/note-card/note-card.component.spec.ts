import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { NoteCardComponent } from './note-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NoteCardComponent', () => {
  let component: NoteCardComponent;
  let fixture: ComponentFixture<NoteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteCardComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain property title and body', () => {
    component.title = 'This is title of a note';
    component.body = 'This is body of a note';
    fixture.detectChanges();
    const cardTitle = fixture.debugElement.query(By.css('.card-header-title'));
    const cardBody = fixture.debugElement.query(By.css('.content'));
    expect(cardTitle.nativeNode.innerHTML).toContain('This is title of a note');
    expect(cardBody.nativeNode.innerHTML).toContain('This is body of a note');
  });

  it('should emit on click when close is pressed', fakeAsync(() => {
    spyOn(component, 'close');
    const closeCard = fixture.debugElement.nativeElement
      .querySelector('div.card')
      .getElementsByTagName('div')[3];
    closeCard.click();
    tick();
    expect(component.close).toHaveBeenCalled();
  }));

  it('should emit on click', () => {
    spyOn(component.deleteEvent, 'emit');
    const close = fixture.nativeElement.querySelector('.card-header-icon');
    close.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.deleteEvent.emit).toHaveBeenCalled();
  });
});
