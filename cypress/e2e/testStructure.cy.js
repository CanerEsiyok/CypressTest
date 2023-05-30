/// <reference types="cypress" />

describe('Context: My first tests',()=>{
    before(()=>{
        //this one runs once before all test cases in this describe block,
    })
    beforeEach(()=>{
        //it runs before each test case
        cy.clearCookies();
    })
    after(()=>{
        //similar to afterClass, runs once when all the test cases are done
    })
    afterEach(()=>{
        //runs after each test case
    })
    it('Opening a web application',()=>{
        cy.visit('/registration_form');
        
    })

})