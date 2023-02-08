import { terminalLog } from '../support/functions/terminalLog';

describe('home a11y test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('checks general accessibility', () => {
    cy.checkA11y(null, null, terminalLog);
  });
});
