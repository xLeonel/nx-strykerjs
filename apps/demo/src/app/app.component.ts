import { Component } from "@angular/core";

@Component({
  selector: "study-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  podeTirarCarta(idade: number) {
    if (idade >= 18) {
      return true;
    }

    return false;
  }

  isAdulto(idade: number) {
    return idade >= 18;
  }
}
