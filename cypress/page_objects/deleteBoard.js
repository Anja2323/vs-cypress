class ConfigureBoard {
    get configureBtn() {
      return cy.get(".vs-l-project__menu").find("li").last();
    }
    get boardTitle() {
      return cy.get('input[name="name"]');
    }
    get boardDescription() {
      return cy.get(
        ":nth-child(1) > .vs-c-settings-section > .vs-c-settings-section-form > .el-form > :nth-child(3) > .el-form-item__content > .el-input > .el-input__inner"
      );
    }
    get updateBtn() {
      return cy.get(".vs-u-text--left").find("button");
    }
    get deleteBtn() {
      return cy
        .get(
          ":nth-child(1) > .vs-c-settings-board > :nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form"
        )
        .find("button")
        .last();
    }
    get yes() {
      return cy.get(".vs-u-text--right").find("button").last();
    }
    configure(title, description) {
      this.configureBtn.click();
      this.boardTitle.clear().type(title);
      this.boardDescription.type(description);
      this.updateBtn.click();
      this.deleteBtn.click({ force: true });
    }
  }
  export const configureBoard = new ConfigureBoard();