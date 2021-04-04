import { ApplicationRef, DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";

import { AlerterComponent } from "./modules/alerter/alerter.component";
import { LoggerComponent } from "./modules/logger/logger.component";
import { ReactiveComponent } from "./modules/reactive/reactive.component";

@NgModule({
  declarations: [AlerterComponent, LoggerComponent, ReactiveComponent],
  imports: [BrowserModule],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(_appRef: ApplicationRef): void {
    const alerterComponent = createCustomElement(AlerterComponent, {
      injector: this.injector,
    });
    const loggerComponent = createCustomElement(LoggerComponent, {
      injector: this.injector,
    });
    const reactiveComponent = createCustomElement(ReactiveComponent, {
      injector: this.injector,
    });
    customElements.define("ng-alerter", alerterComponent);
    customElements.define("ng-logger", loggerComponent);
    customElements.define("ng-reactive", reactiveComponent);
  }
}
