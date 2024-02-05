

describe("text box", ()=> {
    it("test", ()=>{
        cy.visit("http://uitestingplayground.com/textinput")
        cy.get("#newButtonName").type("Hello world!")
        cy.get("#updatingButton").click()
        cy.contains("button", "Hello world!")
        cy.get("#updatingButton").should("have.text", "Hello world!")
        cy.get("#updatingButton").then(element=>{
            expect(element.text()).to.equal("Hello world!")
        })
    })
})