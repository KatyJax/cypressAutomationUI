describe('first', () => {
    before(()=>{
        cy.log('before') 
    })
    after(()=>{
        cy.log('after') 
    })
    it('TC1', () => {
        cy.log('Hello word')
    });
    it('TC2', () => {
        cy.log('Hello word')
    });
});