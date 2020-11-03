import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() body: string;
  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  @ViewChild('cardContent') cardContent: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // let style = window.getComputedStyle(this.cardContent.nativeElement, null);
    // let viewableHeight = parseInt(style.getPropertyValue('height'), 72);
    let viewableHeight = 72;

    this.cardContent.nativeElement.scrollHeight > viewableHeight
      ? this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block')
      : this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
  }
}
