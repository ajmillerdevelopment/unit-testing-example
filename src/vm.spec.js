import vm from "./vm";
import someOtherVm from "./someOtherVm";
import cowAPI from "./api";

it("simple test of count cow", () => {
    vm.cowsCounted = 2;
    someOtherVm.isEven = jest.fn();
    // const checkSpy = jest.spyOn(vm, "checkCowCount");
    vm.countCow();
    expect(vm.cowsCounted).toBe(3);
    expect(someOtherVm.isEven).toBeCalledWith(3);
    // expect(checkSpy).toBeCalled();
});
it("tests check cow cout", () => {
    document.body.innerHTML = `<div id="title"/>`;
    const title = document.getElementById("title");
    vm.cowsCounted = 10;
    vm.checkCowCount();
    expect(title).toHaveClass("red");
});
it("tests call api", () => {
    cowAPI.getUnits = jest.fn().mockImplementation(() => {
        return Promise.resolve(true);
    });
    const funcSpy = jest.spyOn(vm, "nextFunc");
    //@ts-ignore
    vm.callApi((done) => {
        expect(funcSpy).toBeCalledWith(true);
        done();
    });
});
