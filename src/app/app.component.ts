import {
  AfterViewInit,
  ANALYZE_FOR_ENTRY_COMPONENTS,
  Component,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { TransformHelper } from './transform-helper';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;
  @ViewChild('main') main: ElementRef<HTMLCanvasElement>;
  @ViewChild('draft') draft: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const context1 = this.draft.nativeElement.getContext(
      '2d'
    ) as CanvasRenderingContext2D;
    context1.rect(10 + 20, 10 + 30, 50, 50);
    context1.stroke();

    const context2 = this.draft.nativeElement.getContext(
      '2d'
    ) as CanvasRenderingContext2D;
    context2.rect(10, 10, 50, 50);
    context2.stroke();

    context1.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context2.fillRect(100, 100, 50, 50);

    context2.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context2.fillRect(110, 110, 50, 50);

    const w = 200;
    const h = 10;

    // context1.fillStyle = 'rgba(255, 0, 0, 0.5)';
    // context1.fillRect(0, 0, w, h);

    // context1.save();
    // TransformHelper.transform(context1, 90, w, h);
    // context1.fillStyle = 'rgba(255, 0, 0, 0.5)';
    // context1.fillRect(0, 0, w, h);
    // context1.restore();

    // context1.save();
    // TransformHelper.transform(context1, 180, w, h);
    // context1.fillStyle = 'rgba(255, 0, 0, 0.5)';
    // context1.fillRect(0, 0, w, h);
    // context1.restore();

    context1.save();
    TransformHelper.transform(context1, 270, w, h);
    context1.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context1.fillRect(0, 0, w, h);
    context1.restore();
  }
}
