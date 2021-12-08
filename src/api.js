class cowAPI {
    getUnits() {
        fetch("https://cs-gras.spatialfrontlab.com/gras-test/api/domains/units")
            .then((response) => response.json)
            .then((data) => {
                return data;
            });
    }
}
export default cowAPI;
