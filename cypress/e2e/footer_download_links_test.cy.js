describe('Record and Play Hubtel', () => {
    // Check if the download icons with links work in the footer
    it('Footer-Download-link-tests', function() {
      cy.visit('https://blog.hubtel.com/');
  
      // Check if the install app text is present
      cy.get('.d-md-block > .mb-2').should('have.text', 'Install the app');
      
      // App store download element clicking
      cy.get('.d-md-block > .d-flex > :nth-child(1) > a > .d-xl-none').click();
      
      // Return to homepage
      cy.visit('https://blog.hubtel.com/');
  
      // Handle Huawei download element clicking with cy.origin
      cy.origin('https://appgallery.huawei.com', () => {
        cy.on('uncaught:exception', (e) => {
          // Ignore expected error
          if (e.message.includes('Script error.')) {
            return false;
          }
        });
        cy.visit('https://appgallery.huawei.com/app/C101763075'); // Visit the Huawei AppGallery link
      });
    });
  });
  