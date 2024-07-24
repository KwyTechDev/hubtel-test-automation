describe('Hubtel test-4', () => {
    // Navigation Links Test: Click on each navigation link
    it('Navigation Links Test', () => {
      cy.visit('https://blog.hubtel.com/');
      cy.get('.navbar-nav > :nth-child(1) > .nav-link').click(); // Click on the first navigation link
      cy.get(':nth-child(2) > .nav-link').click(); // Click on the second navigation link
      cy.get(':nth-child(3) > .nav-link').click(); // Click on the third navigation link
      cy.get(':nth-child(4) > .nav-link').click(); // Click on the fourth navigation link
      cy.get(':nth-child(5) > .nav-link').click(); // Click on the fifth navigation link
      cy.get(':nth-child(6) > .nav-link').click(); // Click on the sixth navigation link
    });
  });
  
