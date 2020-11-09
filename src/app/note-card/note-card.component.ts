import { NotesService } from './../shared/notes.service';
import { Note } from './../shared/note.model';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() body: string;
  @Input() link: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  @ViewChild('cardContent') cardContent: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let viewableHeight = 72;

    if (this.cardContent.nativeElement.scrollHeight <= viewableHeight)
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
  }

  close(): void {
    this.deleteEvent.emit();
  }
}
