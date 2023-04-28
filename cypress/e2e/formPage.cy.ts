/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  after(() => {
    cy.window().trigger('unload');
  });

  it('renders validation messages on submit with empty fields', () => {
    cy.get('form').submit();

    cy.get('.validation-text').should(($validation) => {
      const NUMBER_OF_VALIDATION_MESSAGES = 7;
      expect($validation).to.have.length(NUMBER_OF_VALIDATION_MESSAGES);

      expect($validation).to.contain('It is a mandatory field.');
    });
  });

  it('renders form card on submit in modal', () => {
    cy.get('input[name="author"]').type('Author');
    cy.get('input[name="title"]').type('Title');
    cy.get('input[name="published"]').click().type('2000-12-12');
    cy.get('select[name="genre"]').select('Novel');
    cy.get('input#Hardcover[name="bookcover"]').click();
    cy.get('input[name="isAvailable"]').click();
    cy.get('input[name="image"]').selectFile('./cypress/fixtures/OL26835727M-M.jpg');
    cy.get('input[name="isAgreed"]').click();

    cy.get('form').submit();

    cy.get('article.card').should('be.visible');
  });

  it('renders form card on submit under the form', () => {
    cy.get('input[name="author"]').type('Author');
    cy.get('input[name="title"]').type('Title');
    cy.get('input[name="published"]').click().type('2000-12-12');
    cy.get('select[name="genre"]').select('Novel');
    cy.get('input#Hardcover[name="bookcover"]').click();
    cy.get('input[name="isAvailable"]').click();
    cy.get('input[name="image"]').selectFile('./cypress/fixtures/OL26835727M-M.jpg');
    cy.get('input[name="isAgreed"]').click();

    cy.get('form').submit();

    cy.get('article.card').should('be.visible');

    cy.get('.cross').click();
    cy.get('article.card').should('be.visible');
  });
});
