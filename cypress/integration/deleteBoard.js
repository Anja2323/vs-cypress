import { addNewBoard } from "../page_objects/boardPOM";
import { loginPage } from "../page_objects/loginPOM";
import { configureBoard } from "../page_objects/configureBoardPOM";
describe("configure the board", () => {
  beforeEach("", () => {
    cy.visit("/");
    loginPage.emailInput.type("frederik67@gmail.com");
    loginPage.passwordInput.type("qatester923");
    loginPage.loginBtn.click();
    cy.wait(5000);
    addNewBoard.newBoard("anja");
    cy.wait(5000);
  });
  it("configure", () => {
    cy.intercept({
      method:'GET',
      url:'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/13332/boards-data'
    }).as('configure')
    configureBoard.configureBtn.click();
    configureBoard.boardTitle.clear().type("anja");
    configureBoard.boardDescription.type("hello");
   configureBoard.boardDescription.should('be.visible')
    configureBoard.updateBtn.click();
    configureBoard.deleteBtn.click({ force: true });
    configureBoard.yes.click();
    cy.url().should("include", "/");

    cy.wait("@configure").then((interception) => {
      console.log("RESPONSE", interception);
      expect(interception.response.statusCode).eq(200);
      expect(interception.response.statusMessage).eq("OK");
    });
  });
});
