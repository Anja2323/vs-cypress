class Login {
    get loginHeading() {
      return cy.get("h1");
    }
    get emailInput() {
      return cy.get("input").first();
    }
    get passwordInput() {
      return cy.get('input[type="password"]');
    }
    get loginBtn() {
      return cy.get("button").first();
    }
    
    get signUp() {
      return cy.get("a").last();
  
  }
  }
  export const loginPage = new Login();
  