import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-logger",
  templateUrl: "./logger.component.html",
  styleUrls: ["./logger.component.scss"],
})
export class LoggerComponent implements OnInit, OnDestroy {
  private counter = 1;
  private interval: any | undefined;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(
      () => console.info(`logger: ${this.counter++}`),
      1000
    );
  }

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
  }
}
