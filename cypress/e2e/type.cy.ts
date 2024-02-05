const textName = 'Cypress'

describe('Text Input', () => {
    it('text test', () => {
        cy.visit('/textinput')
        cy.get('[id="newButtonName"]').type(textName)
        cy.contains('button', 'Button That Should').click()
        cy.get('.btn-primary').then(Element=>{

        console.log(Element.text(), 'text');
        cy.log(Element.text());
        cy.wrap(Element).should('have.text', textName)

        })
        cy.get('.form-group').within(text=>{
            console.log(text.text(), 'text')
            cy.get('[type="button"]').should('have.text', textName)
        })
    });
});