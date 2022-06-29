describe('renders the site', () => {
   it("successfully loads", () => {
     cy.visit("/");
   });
  it('has search bar', () => {
    cy.get(".search-bar");
  })
})
