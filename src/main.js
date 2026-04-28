import "./styles.css";
import { todoItem } from "./todoItem.js";

let a = todoItem();
console.log(a.getDateCreated() + ' ' + a.getDueDate())