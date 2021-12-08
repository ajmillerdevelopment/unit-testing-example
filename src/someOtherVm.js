import { makeObservable, action } from "mobx";
class someOthervm {
    constructor() {
        makeObservable(this, {
            isEven: action,
        });
    }

    isEven(input) {
        if (input % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}
export default new someOthervm();
