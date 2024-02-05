describe('WebSite', () => {
    beforeEach(()=>{
        cy.visit('/home') 
    })
    it('Verify page', () => {
        cy.title()
        .should('eq', "UI Test Automation Playground")
    });

    it('Verify page', () => {
        cy.window().title().then(Element =>{
            cy.log(Element)
            expect(Element === "UI Test Automation Playground").to.be.true;
            expect(Element).to.eq('UI Test Automation Playground');
            cy.wrap(Element).should('eq', 'UI Test Automation Playground');
        })
    });
});