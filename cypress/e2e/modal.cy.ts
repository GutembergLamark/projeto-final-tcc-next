describe("Teste de carregamento do modal", () => {
  beforeEach(() => {
    cy.fixture("users.json").as("users");
  });

  it("deve medir o tempo de carregamento do modal", function () {
    const startTime = new Date().getTime();
    const user = this.users[0];

    cy.visit("/");

    cy.get('[name="email"]').type(user.email);
    cy.get('[name="password"]').type(user.password);

    cy.get('[data-cy="login"]').submit();

    cy.url().should("include", "/dashboard");

    cy.get('[data-cy="card-button"]').eq(0).click();

    cy.get('[data-cy="modal"]')
      .should("be.visible")
      .then(() => {
        const endTime = new Date().getTime();
        const loadTime = endTime - startTime;
        cy.log(
          `O tempo de carregamento do modal foi de ${loadTime} milissegundos.`
        );
      });
  });
});
