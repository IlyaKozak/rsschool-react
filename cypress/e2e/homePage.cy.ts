/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  after(() => {
    cy.window().trigger('unload');
  });

  it('renders home page with cards for initial search from ssr', () => {
    cy.intercept('https://openlibrary.org/search.json?q=&limit=20', {
      fixture: 'ssr.json',
    });

    cy.get('.loader').should('not.exist');

    cy.get('article').should(($article) => {
      expect($article).to.have.length(3);

      expect($article).to.contain('Server-Side');
    });
  });

  it('renders home page with cards for entered search value', () => {
    cy.intercept('https://openlibrary.org/search.json?q=harry&limit=20', {
      fixture: 'harry.json',
    });

    cy.get('input[type="search"]').type('harry{enter}');

    cy.get('.loader').should('be.visible');

    cy.get('article').should(($article) => {
      expect($article).to.have.length(20);

      expect($article).to.contain('Harry');
    });
  });

  it('renders modal with full card on mini card click', () => {
    cy.intercept('https://openlibrary.org/search.json?q=&limit=20', {
      fixture: 'ssr.json',
    });
    cy.intercept('https://openlibrary.org/works/OL19545090W.json', {
      fixture: 'OL19545090W.json',
    });
    cy.intercept('https://covers.openlibrary.org/b/olid/OL26835727M-M.jpg', {
      fixture: 'OL26835727M-M.jpg',
    });

    cy.get('.loader').should('not.exist');
    cy.get('article.fullcard').should('not.exist');

    cy.contains('Next.js').click();

    cy.get('.loader').should('be.visible');
    cy.get('article.fullcard').should('be.visible');
    cy.get('img.fullcard__cover').should('be.visible');
    cy.get('h3.fullcard__title').should(
      'have.text',
      'Next.js Quick Start Guide: Server-side rendering done right'
    );
  });

  it('renders modal with full card on mini card click and closes it on click on red cross', () => {
    cy.intercept('https://openlibrary.org/search.json?q=&limit=20', {
      fixture: 'ssr.json',
    });
    cy.intercept('https://openlibrary.org/works/OL19545090W.json', {
      fixture: 'OL19545090W.json',
    });
    cy.intercept('https://covers.openlibrary.org/b/olid/OL26835727M-M.jpg', {
      fixture: 'OL26835727M-M.jpg',
    });

    cy.contains('Next.js').click();
    cy.get('article.fullcard').should('be.visible');

    cy.get('.cross').click();
    cy.get('article.fullcard').should('not.exist');
  });
});
