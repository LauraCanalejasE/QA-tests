describe('', () => {
    beforeEach(() => {
        cy.fixture('reserve.json').as('reserveData')
      cy.visit('https://mggp.pythonanywhere.com')
     

    })
    it('Reserve OK', () => {
        cy.get('.btn').click()
        cy.get('.col-2 > .form-control').type('1')
        cy.fillDates()
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .text-end').should('be.visible').click()
        cy.get('@reserveData').then((reserveData)=> {
            cy.get('.justify-content-between > :nth-child(2) > .col-12 > .input-group > .form-control').should('be.visible')
            cy.get('.justify-content-between > :nth-child(3) > .col-12 > .input-group > .form-control').should('be.visible')
            cy.get(':nth-child(4) > .col-12 > .input-group > .form-control').type(reserveData.passenger)
            cy.get(':nth-child(1) > .col-12 > .input-group > .form-control').type(reserveData.name)
            cy.get('.col > :nth-child(2) > .col-12 > .input-group > .form-control').type(reserveData.email)
            cy.get('.col > :nth-child(3) > .col-12 > .input-group > .form-control').type(reserveData.tel)
            cy.get('.btn').click()
        })
    })

})