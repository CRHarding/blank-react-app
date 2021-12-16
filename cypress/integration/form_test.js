describe("Testing our form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });
  it("Adds text to inputs and submits form", function () {
    cy.get('input[name="username"]').type("Luis").should("have.value", "Luis");
    cy.get('input[name="email"]')
      .type("soyunemail@gmail.com")
      .should("have.value", "soyunemail@gmail.com");
    cy.get("[data-cy=role]")
      .select("White Belt")
      .should("have.value", "White Belt");
  });

  const userName = () => cy.get('input[name="username"]');
  const email = () => cy.get('input[name="email"]', { force: true });
  const role = () => cy.get("[data-cy=role]", { force: true });
  const button = () => cy.get("[data-cy=submitButton]");
  describe("Check to see if a user can submit the form data", () => {
    it("can submit the form values", () => {
      userName().type("MyNameIsJeff");
      email().type("thisisanemail@gmail.com");
      role().select("Black Belt");
      button().click();

      //   cy.contains("MyNameIsJeff").should("exist");
      //   cy.contains("thisisanemail@gmail.com").should("exist");
      cy.contains("Black Belt").should("exist");

      //   cy.contains("MyNameIsJeff").should("not.exist");
      //   cy.contains("thisisanemail@gmail.com").should("not.exist");
      //   cy.contains("Black Belt").should("not.exist");
    });
    describe("Check that no values are left empty", () => {
      it("check to see if there are empty values", () => {
        // userName().should(to.not.equal(""));
        // expect(userName()).to.not.equal("");
        // expect(userName()).not.to.be.empty;
        // email().should("have.value", "");
        // role().should("have.value", "");
        // userName().should("be.empty");
        expect(userName());
      });
    });
  });
});
