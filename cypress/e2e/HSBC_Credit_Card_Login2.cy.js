describe('HSBC India Navigation', () => {
  it('should hover over the Banking menu', () => {
    // Visit the HSBC India website
    cy.visit('https://www.hsbc.co.in/');
    
    // Wait for the page to fully load
    cy.wait(2000);

    // Hover over the Banking menu
    cy.get('.header-main-navigation-title') 
      .contains('Banking') 
      .trigger('mouseover');
    
      cy.get('a').contains('Credit Cards').click({force: true});
      cy.url().should('include', '/credit-cards');

      //Validate Credit Card as a header text
      cy.get('h1').contains('Credit cards').should('be.visible');
     
      //Validate second credit Card header text is HSBC Cashback Credit Card 
     cy.get('h3').contains('HSBC Cashback Credit Card').should('be.visible');

     //Click on the HSBC cashback Credit card 
     cy.get('a').contains('HSBC Cashback Credit Card').click({force: true});

    // Validate there is Apply now button
     cy.get('a#pp_intro_button_1').contains('Apply now').should('be.visible');

    //Validate the URL contains credit-cards/products/visa-cashback/
      cy.url().should('include', 'credit-cards/products/visa-cashback');

      //cy.get('h1').should('contain.text', 'HSBC Cashback Credit Card');

      //Validate the HSBC credit card image is displayed
      cy.get('#pp_intro_image_3').should('be.visible');

    //Validate the joining fee mentioned as INR999
    cy.get('#pp_tools_richtext_2').contains('INR999').should('be.visible');

    //Validate the text mentioned as INR999 (waived if you spend more than INR200,000 per year)
    cy.get('#pp_tools_richtext_3').contains('INR999 (waived if you spend more than INR200,000 per year) ').should('be.visible');

    //Validate the Chat image is displayed in the bottom 
   cy.get('img[src="https://www.hsbc.co.in/content/dam/hsbc/in/images/webchat/chat-button-en-pwsimg-2841.png"][alt="Chat"]').should('be.visible');

    //Click on HSBC Logo

    cy.get('[alt="HSBC India Bank"]').first().click();

    //Validate page is navigating to home page by its title
    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');

        cy.screenshot('creditcard');
           
        });
});


