/// <reference types="cypress" />

afterEach(() => {
  cy.window().trigger('unload');
});

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
  });
});
