import { Component, OnInit } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: User = {
    id: 1,
    name: "Dipen",
    email: "hamal.dipendra@gmail.com",
    mobile: 3803492,
  };

  constructor() {}

  ngOnInit() {}
}
