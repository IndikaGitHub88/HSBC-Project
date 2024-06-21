describe('HSBC India Home Page Tests', () => {
  it('should open the HSBC India website', () => {
    cy.visit('https://www.hsbc.co.in/');
       
  });

  it('should validate the HSBC Bank logo', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.get('img[src="/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg"][alt="HSBC India Bank"]').should('be.visible');
     });


  it('should validate the home page title', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');
      });

  it('should click on the Login button', () => {
    cy.visit('https://www.hsbc.co.in/');
    // cy.contains('a.selected-item.login-button.only-one-link[href="/security/"][tabindex="0"][role="button"]').click(); // Assuming the login button has text "Login"
    cy.get('a').contains('Log On').click({force: true});
      });
});

describe('HSBC India Login Page Tests', () => {
  it('should navigate to the login page', () => {
    cy.visit('https://www.hsbc.co.in/security/');
    cy.screenshot();
    
  });

  it('should validate the "Log On" header on the login page', () => {

   cy.visit('https://www.hsbc.co.in/security/')
    cy.title().should('eq', 'Username | Log on | HSBC')
   
  });

  describe('HSBC Login scenario', () => {
  
    beforeEach(() => {
       cy.visit('https://www.hsbc.co.in/security/');
       
     })
   
     it('Validate Continue button is available', () => {
      cy.get('button#username_submit_btn').should('be.visible');
      
      })
     it('Validate Continue button is disabled', () => {
          cy.get('button#username_submit_btn').should('be.disabled');
         
     
      it('Type any random email in the username field', () => {
          cy.get('input.email').type('abc@xyz.com');
          
      })

      it('Validate Continue button is enable', () => {
        cy.get('button#username_submit_btn').should('be.enabled');
       
     })

     it('Validate the Question marl tooltip present on the page', () => {
      cy.get('a#username_help_link').should('be.visible');
     
   })

   it('Click on the tooltip', () => {
    cy.get('a#username_help_link').click({force: true});
   
 })

 it('Now validate the username header in the new pop-up screen', () => {
  cy.get('.t16b').should('be.visible');
  cy.get('#help_content_1').should('contain.text', 'Username');
 
})

cy.wait(1000);

it('Validate there is a Close button in the new pop-up screen', () => {
  cy.get('.close-btn').should('be.visible');
  cy.get('.close-btn').should('be.visible').click();

})

cy.screenshot();

//cy.screenshot('HSBClogintest');

    })
    
})


})