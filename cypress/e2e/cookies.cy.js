import { home } from '../support/pageElements/home.elements';
import { acceptCookie, denyCookie } from '../fixtures/cookiesValues';

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

  it.only('allow cookies must contain "fs-cc" cookie with true values', () => {
    cy.get(home.cookieBannerAcceptBtn).click();
    cy.getCookie('fs-cc').its('value').should('contain', acceptCookie);
  });

  it.only('deny cookies must contain "fs-cc" cookie with false values', () => {
    cy.get(home.cookieBannerDenyBtn).click();
    cy.getCookie('fs-cc').its('value').should('contain', denyCookie);
    cy.getCookie('fs-cc-updated').its('value').should('eq', 'true');
  });
});
