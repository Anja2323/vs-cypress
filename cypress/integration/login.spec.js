import { loginPage } from "../page_objects/loginPOM";

describe("login POM", () => {
  beforeEach("", () => {
    cy.visit("/");
  });
  it("validate page", () => {
    loginPage.loginHeading
      .should("be.visible")
      .and("have.text", "Log in with your existing account");
  });
  it("login with email and address", () => {
    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
    }).as("login");

    loginPage.emailInput.type("jelenajelena861@yahoo.com");
    loginPage.passwordInput.type("kakosimiti23");
    loginPage.loginBtn.click();
    cy.wait("@login").then((interception) => {
      console.log("RESPONSE", interception);
      expect(interception.response.statusCode).eq(200);
      expect(interception.response.statusMessage).eq("OK");
    });
    cy.url().should("not.include", "/login");
  });
});