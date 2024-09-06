describe("Login and Navigate to Planets", () => {
  it("should fill the login form and navigate to the planets page", () => {
    cy.visit("/");
    cy.get("a").click();

    // Remplir l'email et le mot de passe
    cy.get('input[type="email"]').type("test@example.com");
    cy.get('input[type="password"]').type("password123");

    // Soumettre le formulaire
    cy.get("form").submit();

    // Vérifie que l'utilisateur est redirigé vers la page des planètes
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);

    // Vérifie que la page affiche le nom de l'utilisateur (Bonjour toto)
    cy.contains("Bonjour toto");
  });
});
