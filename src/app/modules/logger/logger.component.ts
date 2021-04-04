import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-logger",
  templateUrl: "./logger.component.html",
  styleUrls: ["./logger.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggerComponent implements OnInit, OnDestroy {
  private counter = 1;
  private interval: any | undefined;

  public get isToggleButtonActive(): boolean {
    return this.interval !== undefined;
  }

  constructor(private readonly cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startInterval();
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  toggle(): void {
    if (this.interval) {
      this.clearInterval();
    } else {
      this.startInterval();
    }
  }

  private startInterval() {
    this.interval = setInterval(
      () => console.info(`logger: ${this.counter++}`),
      1000
    );
    this.cd.detectChanges();
  }

  private clearInterval(applyCd = false) {
    if (this.interval) clearInterval(this.interval);
    this.interval = undefined;

    if (applyCd) this.cd.detectChanges();
  }
}
