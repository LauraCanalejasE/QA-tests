
describe('Details of the reserve', () => {
    beforeEach(() => {
      cy.visit('https://mggp.pythonanywhere.com')

    })
    it('Render all headers',()=>{
        cy.get('.btn').click()
        cy.contains('Tipo habitación').should('be.visible')
        cy.contains('Cantidad disponible').should('be.visible')
        cy.contains('Precio reserva').should('be.visible')
    })
    it('Quatity per room types',()=>{
        cy.get('.btn').click()
        cy.get('.col-2 > .form-control').type('1')
        cy.get(':nth-child(1) > .input-group > .form-control').type('2023-01-01')
        cy.get(':nth-child(2) > .input-group > .form-control').type('2023-01-02')
        cy.get('.btn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', '10')
        cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text', '5')
        cy.get(':nth-child(3) > :nth-child(3)').should('have.text', '4')
        cy.get(':nth-child(4) > :nth-child(3)').should('have.text', '6')

    })
    it('Daily price of each type room',() =>{
        cy.get('.btn').click()
        cy.get('.col-2 > .form-control').type('1')
        cy.get(':nth-child(1) > .input-group > .form-control').type('2022-11-01')
        cy.get(':nth-child(2) > .input-group > .form-control').type('2022-11-02')
        cy.get('.btn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', '20,00')
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('have.text', '30,00')
        cy.get(':nth-child(3) > :nth-child(4)').should('have.text', '40,00')
        cy.get(':nth-child(4) > :nth-child(4)').should('have.text', '50,00')
        cy.get(':nth-child(2) > .input-group > .form-control').type('2022-11-03')
        cy.get('.btn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', '40,00')
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('have.text', '60,00')
        cy.get(':nth-child(3) > :nth-child(4)').should('have.text', '80,00')
        cy.get(':nth-child(4) > :nth-child(4)').should('have.text', '100,00')
        cy.get(':nth-child(2) > .input-group > .form-control').type('2022-11-04')
        cy.get('.btn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', '60,00')
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('have.text', '90,00')
        cy.get(':nth-child(3) > :nth-child(4)').should('have.text', '120,00')
        cy.get(':nth-child(4) > :nth-child(4)').should('have.text', '150,00')
        
    })
    it('Capacity by room type',()=>{
        cy.get('.btn').click()
        cy.get('.col-2 > .form-control').type('1')
        cy.get(':nth-child(1) > .input-group > .form-control').type('2022-11-01')
        cy.get(':nth-child(2) > .input-group > .form-control').type('2022-11-02')
        cy.get('.btn').click()
        cy.contains('Individual').should('be.visible')
        cy.contains('Doble').should('be.visible')
        cy.contains('Triple').should('be.visible')
        cy.contains('Cuádruple').should('be.visible')
        cy.get('.col-2 > .form-control').clear()
        cy.get('.col-2 > .form-control').type('2')
        cy.get('.btn').click()
        cy.contains('Individual').should('not.exist')
        cy.contains('Doble').should('be.visible')
        cy.contains('Triple').should('be.visible')
        cy.contains('Cuádruple').should('be.visible')
        cy.get('.col-2 > .form-control').clear()
        cy.get('.col-2 > .form-control').type('3')
        cy.get('.btn').click()
        cy.contains('Individual').should('not.exist')
        cy.contains('Doble').should('not.exist')
        cy.contains('Triple').should('be.visible')
        cy.contains('Cuádruple').should('be.visible')
        cy.get('.col-2 > .form-control').clear()
        cy.get('.col-2 > .form-control').type('4')
        cy.get('.btn').click()
        cy.contains('Individual').should('not.exist')
        cy.contains('Doble').should('not.exist')
        cy.contains('Triple').should('not.exist')
        cy.contains('Cuádruple').should('be.visible')
    })
    it('This cant be grater than 31/12/2022', () => {
        cy.get('.btn').click()
        cy.get('.col-2 > .form-control').type('1')
        cy.get(':nth-child(1) > .input-group > .form-control').type('2023-05-01')
        cy.get(':nth-child(2) > .input-group > .form-control').type('2023-05-01')
        cy.get('.btn').click()
        cy.get('tbody > :nth-child(1) > .text-end').click()
        cy.contains('No se pudo calcular el precio para la reserva. La fecha de salida tiene que ser anterior a 2022-12-31').should('be.visible')
       
    })
})