import { expect, describe, it, cy, before, beforeEach } from "local-cypress";

describe("<BrowsePage />", () => {
  beforeEach(() => {
    cy.viewport(1000, 800);
  });

  it("moo", () => {
    cy.wrap(true).should("be.true");
  });
});
