describe('first', () => {
    beforeEach(()=>{
        cy.log('beforeEach') 
    })
    afterEach(()=>{
        cy.log('afterEach') 
    })
    it.skip('TC1', () => {
        cy.log('Hello word')
    });
    it('TC2', () => {
        cy.log('Hello word')
    });
    it('TC3', () => {
        cy.log('Hello word')
    });
});