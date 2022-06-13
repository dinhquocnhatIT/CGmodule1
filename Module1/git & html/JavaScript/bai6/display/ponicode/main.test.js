const rewire = require("rewire")
const main = rewire("../main")
const showMessage2 = main.__get__("showMessage2")
const showMessage1 = main.__get__("showMessage1")
// @ponicode
describe("showMessage2", () => {
    test("0", () => {
        let result = showMessage2()
        expect(result).toMatchSnapshot()
    })
})

describe("showMessage1", () => {
    test("0", () => {
        document.body.insertAdjacentHTML("afterbegin", `<div id="wrapper0"><div>
        	<div id="messageDiv"></div>
        </div>
        </div>`)
        showMessage1()
        expect(document.getElementById("wrapper0")).to.matchSnapshot()
        document.body.removeChild(document.getElementById("wrapper0"))
    })
})

// @ponicode
describe("showMessage1", () => {
    test("0", () => {
        document.body.insertAdjacentHTML("afterbegin", `<div id="wrapper0"><div>
        	<div id="messageDiv"></div>
        </div>
        </div>`)
        showMessage1()
        expect(document.getElementById("wrapper0")).to.matchSnapshot()
        document.body.removeChild(document.getElementById("wrapper0"))
    })
})
