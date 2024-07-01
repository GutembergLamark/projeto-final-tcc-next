describe("Teste de criação de usuários", () => {
  beforeEach(() => {
    cy.fixture("users.json").as("users");
  });

  it("deve criar 100 usuários", function () {
    cy.visit("/register");

    this.users.forEach((user: any) => {
      cy.get('[name="username"]').type(user.username);
      cy.get('[name="email"]').type(user.email);
      cy.get('[name="cpf"]').type(user.cpf);
      cy.get('[name="password"]').type(user.password);

      cy.get('[data-cy="register"]').submit();

      cy.url().should("not.include", "/register");

      cy.visit("/register");
    });
  });
});
