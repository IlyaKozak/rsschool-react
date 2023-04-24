/// <reference types="cypress" />

// afterEach(() => {
//   cy.window().trigger('unload');
// });

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  after(() => {
    cy.window().trigger('unload');
  });

  it('renders home page with cards for initial search', () => {
    cy.contains(/next.js/i).click();
  });
});
