describe('Hubtel test-3', () => {
    // Main Article Check: Verify the main article exists
    it('Main Article Check', function() {
      cy.visit('https://blog.hubtel.com/');
      cy.get('.text-decoration-none > .h-100').should('exist'); // Verify the main article exists
    });
  });
  
