describe('Produc Search Journey', () => {
  const FRONTEND_URL = 'http://localhost:3000/';

  beforeEach(() => {
    cy.server();
  });

  it('should visit home page', () => {
    cy.visit(FRONTEND_URL);

    cy.get('#filterText').should('have.value', '');
  });

  it('should search product', () => {
    cy.contains('Company');

    // Get an input, type into it and verify that the value has been updated
    cy.get('#filterText').type('1').should('have.value', '1');

    cy.contains('Marca1');
  });
});
