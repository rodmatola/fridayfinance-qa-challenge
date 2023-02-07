import { home } from '../support/pageElements/home.elements';

describe('check cookies', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('banner must be visible and contains a link to Privacy Police and Accept and Deny buttons', () => {
    cy.get(home.cookieBanner).should('be.visible');
    cy.get(home.cookieBannerText)
      .find('a')
      .should('have.attr', 'href', '/privacy-policy');
    cy.get(home.cookieBannerAcceptBtn).should('contain.text', 'Accept');
    cy.get(home.cookieBannerDenyBtn).should('contain.text', 'Deny');
  });
});
