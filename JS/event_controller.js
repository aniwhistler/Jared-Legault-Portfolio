import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["intro", "game", "movie", "waifood", "welcome", "ibutton", "pbutton"]
  connect() {
  }

  introclicked() {
    this.welcomeTarget.classList.add("fade-out");
    this.welcomeTarget.classList.add("d-none");

    this.introTarget.classList.add("fade-in");
    this.introTarget.classList.remove("d-none");

    this.gameTarget.classList.add("d-none");
    this.movieTarget.classList.add("d-none");
    this.waifoodTarget.classList.add("d-none");

    this.ibuttonTarget.classList.add("button-clicked");
    this.ibuttonTarget.classList.remove("main-button");

    this.pbuttonTarget.classList.remove("fade-in");
    this.pbuttonTarget.classList.remove("button-clicked");
    this.pbuttonTarget.classList.add("main-button");
  }

  projectclicked() {
    this.welcomeTarget.classList.add("fade-out");
    this.welcomeTarget.classList.add("d-none");

    this.gameTarget.classList.add("fade-in");
    this.gameTarget.classList.remove("d-none");

    this.movieTarget.classList.add("fade-in");
    this.movieTarget.classList.remove("d-none");

    this.waifoodTarget.classList.add("fade-in");
    this.waifoodTarget.classList.remove("d-none");

    this.introTarget.classList.add("d-none");

    this.pbuttonTarget.classList.add("button-clicked");
    this.pbuttonTarget.classList.remove("main-button");

    this.ibuttonTarget.classList.remove("fade-in");
    this.ibuttonTarget.classList.remove("button-clicked");
    this.ibuttonTarget.classList.add("main-button");
  }
}
