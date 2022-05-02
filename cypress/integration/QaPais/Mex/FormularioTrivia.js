import { URLPRUEBA_SI_NO, UrlTapIntoYourBeer } from "./urls";
import { URLPRUEBA_SI_NO as url } from "./urls";
import { dataBase, db as prueba } from './db.js';

// Formulario vacio

describe("FORMULARIO + TRIVIA", () => {
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach("set cookie", () => {
    cy.setCookie("OptanonAlertBoxClosed", "2021-02-09T17:25:04.013Z");
    cy.visit(URLPRUEBA_SI_NO);
  });

  // Comienzo
  it('Formulario + Trivia', () => {

    // Carga inicial - 0 Cookies, Pasar Agegate
    cy.visit(url);
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);

    // Formulario Bueno
    cy.get('#edit-first-name').type('Pruebá Ñombre');
    cy.get('#edit-last-name').type('Pruebá Apeñido');
    cy.get('#edit-email').type(dataBase.correo);
    cy.get('#edit-phone').type('5648972310');
    cy.get('#edit-gender').select(1);
    cy.get('#edit-day').select(1);
    cy.get('#edit-month').select(1);
    cy.get('#edit-year').select(10);
    cy.get('#edit-state').select(1);
    cy.get('#edit-zip').type('12345');
    cy.get('#edit-tyc').click();
    cy.get('#edit-continue').click();

    // Empieza trivia
    cy.get('#quiz-start-btn').click();
    cy.get('[data-index="0"]').click({ multiple: true, force: true });
    cy.get('#quiz-next-btn').click();
    cy.get('[data-index="0"]').click({ multiple: true, force: true });
    cy.get('#quiz-next-btn').click();
    cy.get('[data-index="0"]').click({ multiple: true, force: true });
    cy.get('#quiz-finish-btn').click();
    cy.get('#quiz-restart-btn')
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "/");
  });
});
