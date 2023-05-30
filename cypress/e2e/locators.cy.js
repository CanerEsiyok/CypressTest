/// <reference types="cypress" />

describe('find or Get elements',()=>{
    
    beforeEach(()=>{
        //it runs before each test case
        cy.clearCookies();
    })
    
    it('Check different locator strategies',()=>{
        cy.visit('/login');
        cy.get("input[name='username']").type("CydeoStudent");
        cy.get("input[name='password']").type("aaaa");

        cy.get("input").each((item,index,list)=>{
            //assert the length of the list 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })
        
    })
    

})