import { expect, describe, it, cy, before, beforeEach } from "local-cypress";

import { sum } from "./foo";

describe("<BrowsePage />", () => {
  beforeEach(() => {
    cy.viewport(1000, 800);
  });

  it("moo", () => {
    cy.wrap(true).should("be.true");
  });

  it("sum import test", () => {
    cy.wrap(sum(1, 2)).should("eq", 3);
  });
});
