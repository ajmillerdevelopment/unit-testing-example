import { makeObservable, observable, action } from "mobx";
import someOtherVm from "./someOtherVm";
class vm {
    constructor() {
        makeObservable(this, {
            cowsCounted: observable,
            countCow: action,
        });
    }

    cowsCounted = 0;

    countCow() {
        this.cowsCounted += 1;
        this.checkCowCount();
        someOtherVm.isEven(this.cowsCounted);
    }

    //every ten cows, make the title red
    checkCowCount() {
        if (this.cowsCounted % 10 === 0) {
            document.getElementById("title").classList.add("red");
        } else {
            document.getElementById("title").classList.remove("red");
        }
    }
}
export default new vm();
