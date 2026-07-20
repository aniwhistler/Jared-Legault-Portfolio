import { Application } from "@hotwired/stimulus";

import EventController from "./JS/event_controller.js";

window.Stimulus = Application.start();
Stimulus.register("event", EventController);
