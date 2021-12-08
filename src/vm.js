import { makeObservable, observable, action } from "mobx";
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
    }
}
export default new vm();
