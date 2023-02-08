describe('home a11y test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it.only('checks general accessibility', () => {
    cy.checkA11y();
  });
});
