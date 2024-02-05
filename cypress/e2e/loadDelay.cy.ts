describe('LOAD DELAY', () => {
    it('load delay emulate', () => {
        cy.visit('/', {timeout: 0}); //doesn't work becouse timeout: 0, defauld in config 16_000
    });

    it('load delay emulate', () => {
        cy.visit('/', {timeout: 2_000});
        cy.get('[href="/loaddelay"]').click();
        cy.contains('button', 'Button Appearing After Delay')
    });
});