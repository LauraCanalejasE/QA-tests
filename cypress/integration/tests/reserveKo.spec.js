describe('', () => {
    beforeEach(() => {
      cy.visit('https://mggp.pythonanywhere.com')
     

    })

    it('This should fail with date less that current', () => {
        cy.get('.btn').click()
        cy.get('.col-2 > .form-control').type('1')
        cy.get(':nth-child(1) > .input-group > .form-control').type('2022-05-29')
        cy.get(':nth-child(2) > .input-group > .form-control').type('2022-05-26')
        cy.get('.btn').click()
        cy.get('.text-end > .navbar-brand > .d-inline-block').should('not.exist')   
    })
   
    it('this cant search without data', () => {
        cy.get('.btn').click()
        cy.get('.btn').click()
        cy.get('.text-end > .navbar-brand > .d-inline-block').should('not.exist')   
    
    })
    it('form errors', ()=>{
        cy.get('.btn').click()
        cy.get('.col-2 > .form-control').type('1')
        cy.get(':nth-child(1) > .input-group > .form-control').type('2022-12-05')
        cy.get(':nth-child(2) > .input-group > .form-control').type('2022-12-06')
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .text-end').click()
        cy.get('.btn').click()
        cy.get('.col > :nth-child(3) > .col-12 > .input-group > .form-control').then(($input)=>{
            expect($input[0].validationMessage).to.eq('Completa este campo')
        })
        cy.get('.col > :nth-child(3) > .col-12 > .input-group > .form-control').type('675876545')
        cy.get('.col > :nth-child(3) > .col-12 > .input-group > .form-control').clear()
        cy.get('.col > :nth-child(3) > .col-12 > .input-group > .form-control').type('ErrorTel')
        cy.get('.btn').click()
        cy.get(':nth-child(4) > .col-12 > .input-group > .form-control').then(($input)=>{
            expect($input[0].validationMessage).to.eq('Completa este campo')
        })
        cy.get(':nth-child(4) > .col-12 > .input-group > .form-control').type('3')
        cy.get(':nth-child(4) > .col-12 > .input-group > .form-control').then(($input)=>{
            expect($input[0].validationMessage).to.eq('El valor debe ser inferior o igual a 2')
        })
        cy.get(':nth-child(4) > .col-12 > .input-group > .form-control').clear()
        cy.get(':nth-child(4) > .col-12 > .input-group > .form-control').type('2')
        cy.get('.btn').click()
        cy.get(':nth-child(1) > .col-12 > .input-group > .form-control').then(($input)=>{
            expect($input[0].validationMessage).to.eq('Completa este campo')
        })
        cy.get(':nth-child(1) > .col-12 > .input-group > .form-control').type('lau')
        cy.get('.btn').click()
        cy.get('.col > :nth-child(2) > .col-12 > .input-group > .form-control').then(($input)=>{
            expect($input[0].validationMessage).to.eq('Completa este campo')
        })
        cy.get('.col > :nth-child(2) > .col-12 > .input-group > .form-control').type('sdhfbswb')
        cy.get('.col > :nth-child(2) > .col-12 > .input-group > .form-control').clear()
        cy.get('.col > :nth-child(2) > .col-12 > .input-group > .form-control').type('sdhfbswb@')
        cy.get('.col > :nth-child(2) > .col-12 > .input-group > .form-control').clear()
        cy.get('.col > :nth-child(2) > .col-12 > .input-group > .form-control').type('sdhfbswb@.com')
        cy.get('.col > :nth-child(2) > .col-12 > .input-group > .form-control').clear()
        cy.get('.col > :nth-child(2) > .col-12 > .input-group > .form-control').type('sdhfbsw15_Tb@gmail.com')
        
     

    })   
 
})  