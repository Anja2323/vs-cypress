class NewBoard {
    get heading(){
      return cy.get('.vs-c-my-organization__title').first();
    }
    get addNewBtn() {
      return cy.get('li[title="Add new Board"]');
    }
    get orgName() {
      return cy.get('input[name="name"]');
    }
    get nextBtn() {
      return cy.get("button").last();
    }
    get kanban() {
       return cy.get('span[class="vs-c-radio-check"]').first();
    }
    get nextBtn1() {
      return cy.get('button[name="next_btn"]');
    }
  
    get nextBtn2() {
      return cy.get('button[name="next_btn"]');
    }
    get nextBtn3() {
      return cy.get("button").last();
    }
    get finish() {
      return cy.get("button").last();
    }
    newBoard(title) {
      this.addNewBtn.click();
      this.orgName.type(title);
      this.nextBtn.click();
      this.kanban.click();
      this.nextBtn1.click();
      this.nextBtn2.click();
      this.nextBtn3.click();
      this.nextBtn3.click();
    }
  }
  export const addNewBoard = new NewBoard();
  