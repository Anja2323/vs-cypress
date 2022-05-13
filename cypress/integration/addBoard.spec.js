import { addNewBoard } from "../page_objects/addBoardPOM";
import { loginPage } from "../page_objects/loginPOM";
describe("new board", () => {
  beforeEach("", () => {
    cy.visit("/");
    // cy.loginWithBackend();
    // cy.visit("https://cypress-api.vivifyscrum-stage.com/api/v2/my-organizations");
    // ovo sam probala login preko backenda ali iz nekog razloga ne radi
    loginPage.emailInput.type("frederik67@gmail.com");
    loginPage.passwordInput.type("qatester923");
    loginPage.loginBtn.click();
    cy.wait(5000);
  });
  it('validate page', ()=>{
    addNewBoard.heading
    .should('be.visible')
    .and('have.text', 'My Organization')
  })
  it("new board", () => {
    cy.intercept({
      method:'POST',
      url:'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
    }).as('newBoard')
    addNewBoard.newBoard("anja");
    cy.url().should('include','/')
    cy.wait("@newBoard").then((interception) => {
      console.log("RESPONSE", interception);
      expect(interception.response.statusCode).eq(201);
      expect(interception.response.statusMessage).eq("Created");
    });
    
  });
});