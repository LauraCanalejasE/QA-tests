import {getTwoDays} from '../utils/getTwoDays' 

Cypress.Commands.add("fillDates", () => {
    const days = getTwoDays() 
    cy.get(':nth-child(1) > .input-group > .form-control').type(days[0])
    cy.get(':nth-child(2) > .input-group > .form-control').type(days[1])
  });