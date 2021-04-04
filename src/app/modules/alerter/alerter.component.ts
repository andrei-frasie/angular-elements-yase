import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-alerter",
  templateUrl: "./alerter.component.html",
  styleUrls: ["./alerter.component.scss"],
})
export class AlerterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public alert() {
    alert("Alert!");
    console.log("Alert!");
  }
}
