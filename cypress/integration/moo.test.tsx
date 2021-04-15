import { expect, describe, it, cy, before, beforeEach } from "local-cypress";

// @TODO: we should probably abstract alot of these mock utils,
// as they will likely be repeated across many test suits
const routeComponentPropsMock = {
  match: { path: "", params: { contractId: "", tokenId: "" } } as any,
  history: {} as any,
  location: {} as any,
};

describe("<BrowsePage />", () => {
  beforeEach(() => {
    cy.viewport(1000, 800);

    cy.intercept(
      {
        method: "GET",
        pathname: "/v1/collections",
      },
      (req) => {
        req.reply({
          fixture: "mockCollections.json",
        });
      }
    ).as("collectionsStub");
    cy.intercept(
      {
        method: "GET",
        pathname: "/v1/collections/*/filters",
      },
      (req) => {
        req.reply({
          fixture: "mockCollectionMetadata.json",
        });
      }
    ).as("collectionMetadataStub");
    cy.intercept(
      {
        method: "GET",
        pathname: "/v1/orders",
      },
      (req) => {
        req.reply({
          fixture: "orders.json",
        });
      }
    ).as("ordersStub");
  });

  it("renders out a list of collection names, when the page first loads", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="collectionsFilter"]').as("collectionsContainer");
    cy.get("@collectionsContainer").children().as("collectionChildren");
    cy.get("@collectionChildren").should("have.length", 5);
    cy.get("@collectionChildren").eq(0).as("firstChild");
    cy.get("@firstChild")
      .should("have.css", "display", "flex")
      .should("contain.text", "Gods Unchained");
  });

  it("renders out a list of collection names, when the page first loads", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="collectionsFilter"]').as("collectionsContainer");
    cy.get("@collectionsContainer").children().as("collectionChildren");
    cy.get("@collectionChildren").should("have.length", 5);
    cy.get("@collectionChildren").eq(0).as("firstChild");
    cy.get("@firstChild")
      .should("have.css", "display", "flex")
      .should("contain.text", "Gods Unchained");
  });
});
