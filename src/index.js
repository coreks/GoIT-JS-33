import "./styles/main.scss";
import { test } from "./utils/utils";

class Test {
  constructor(item) {
    this.item = item;
  }

  consoleItem() {
    console.log(this.item);
  }
}

const test1 = new Test("Привет");

test1.consoleItem();
