import "./styles.css";
import {Controller} from "./controller.js";
import {View} from "./view.js";
import {Model} from "./model.js";
 
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

Controller(Model(), View());





