/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://mggp.pythonanywhere.com')
  })

  it('List headers', () => {
    cy.get('thead > .justify-content-between > :nth-child(1)').should('have.text', 'Localizador')
    cy.get('.justify-content-between > :nth-child(2)').should('have.text', 'Check-in')
    cy.get('.justify-content-between > :nth-child(3)').should('have.text', 'Check-out')
    cy.get('.justify-content-between > :nth-child(4)').should('have.text', 'Habitación')
    cy.get('.justify-content-between > :nth-child(5)').should('have.text', 'N° pasajeros')
    cy.get('.justify-content-between > :nth-child(6)').should('have.text', 'Precio')
  })
})
