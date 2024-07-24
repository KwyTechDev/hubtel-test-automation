describe('Hubtel test-1', () => {
    // Article Component Validation: Validate the presence of required elements in each article component
    it('Article Component Validation', function() {
      cy.visit('https://blog.hubtel.com/');
      cy.get(':nth-child(2) > .nav-link').click(); // Click on the second navigation link
  
      // Loop through the articles and validate required elements
      for (let i = 2; i <= 13; i++) {
        // Check if the article container is visible
        cy.get(`:nth-child(${i}) > .text-decoration-none > .row`).should('be.visible');
  
        // Check if the article image has a 'src' attribute
        cy.get(`:nth-child(${i}) > .text-decoration-none > .row > .col-lg-5 > div > .w-100`).should('have.attr', 'src');
  
        // Check if the article title is visible and not empty
        cy.get(`:nth-child(${i}) > .text-decoration-none > .row > .col-lg-7 > .pe-0 > .fw-bold`)
          .should('be.visible')
          .invoke('text')
          .then((text) => {
            expect(text.trim()).not.to.be.empty;
          });
  
        // Check if the article reading duration contains the text 'minutes read'
        cy.get(`:nth-child(${i}) > .text-decoration-none > .row > .col-lg-7 > .pe-0 > .mb-4`)
          .should('be.visible')
          .should('contain.text', 'minutes read');
  
        // Check if the article contains a properly formatted date
        cy.get(`:nth-child(${i}) > .text-decoration-none > .row > .col-lg-7 > .pe-0 > .mb-4`)
          .should('be.visible')
          .invoke('text')
          .then((text) => {
            expect(text.trim()).to.match(/[A-Za-z]+\s\d{1,2},\s\d{4}/); // Regex to match date format
          });
      }
    });
  });
  
