import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["intro", "project", "welcome"]
  connect() {
    console.log("Hello there.")
  }

  introclicked() {
    this.welcomeTarget.classList.add("fade-out")
    this.introTarget.classList.remove("d-none")
    this.introTarget.classList.add("fade-in")
  }
}
