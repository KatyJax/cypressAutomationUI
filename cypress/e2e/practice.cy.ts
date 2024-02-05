describe('Practice', () => {
    it('WaitForElementVisible', () => {
        cy.visit(`${Cypress.env('camp')}/expected_conditions.html`);
        cy.get('#visibility_trigger').should('be.visible').and('exist').click();
        cy.get('#visibility_target').should('be.visible').and('exist').click();
        cy.get('.popover-header').should('have.text', 'Can you see me?');
        cy.get('.popover-body').should('have.text', 'I just removed my invisibility cloak!!');
    });

    it('WaitForElementInvisible', () => {
        cy.visit(`${Cypress.env('camp')}/expected_conditions.html`);
        cy.get('.text-primary').should('be.visible').and('exist');
        cy.get('#invisibility_trigger').should('be.visible').and('exist').click();
        cy.get("//*[contains(text(),'Thank God that spinner is gone!')]").should('have.text', 'Thank God that spinner is gone!');
    });




});