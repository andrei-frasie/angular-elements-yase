import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveComponent implements OnInit {
  public attributeName = "ng-my-input";
  public attribute = "attribute does not have a value";
  observer = new MutationObserver(() => {
    this.zone.run(() => {
      console.log("MutationObserver: change detected");
      this.update();
    });
  });

  public constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private cd: ChangeDetectorRef
  ) {
    this.observer.observe(this.elementRef.nativeElement, { attributes: true });
  }

  ngOnInit(): void {
    this.update();
  }

  private update() {
    this.attribute =
      this.elementRef.nativeElement.getAttribute(this.attributeName) ??
      "attribute was undefined";
    this.cd.detectChanges();
  }
}
