import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListComponent } from './notes-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesService } from 'src/app/shared/notes.service';

describe('NotesListComponent', () => {
  let component: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;
  let service: NotesService;
  const mockResponse = [
    {
      title: 'first test title',
      body: 'first test body',
    },
    {
      title: 'second test title',
      body: 'second test body',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesListComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(NotesService);
    fixture = TestBed.createComponent(NotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete a note', () => {
    mockResponse.forEach((note) => service.add(note));
    component.deleteNote(1);
    expect(component.notes.length).toEqual(1);
  });

  it('should show two notes when filtering with `first test title`', () => {
    mockResponse.forEach((note) => service.add(note));
    component.filter('first test title');
    expect(component.relevantNotes('first test title').length).toEqual(1);
  });

  it('not should show notes when filtering with `body`', () => {
    mockResponse.forEach((note) => service.add(note));
    component.filter('body');
    expect(component.relevantNotes('body').length).toEqual(0);
  });
});
