import { URLPRUEBA_SI_NO, UrlTapIntoYourBeer } from "./urls";
import { URLPRUEBA_SI_NO as url } from "./urls";
import { dataBase, db as prueba } from './db.js';

var moment = require("moment"); // require
describe("Test age gate Budweiser", () => {
  beforeEach(() => {
    cy.setCookie("OptanonAlertBoxClosed", "2021-02-12T19:14:28.120Z");
    cy.visit(URLPRUEBA_SI_NO);
  });
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});


// Formulario vacio

describe("FORMULARIOS", () => {
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach("set cookie", () => {
    cy.setCookie("OptanonAlertBoxClosed", "2021-02-09T17:25:04.013Z");
    cy.visit(URLPRUEBA_SI_NO);
  });

  // Form para que arroje copys de error por campos vacios
  it('Formulario vacio', () => {
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);

    cy.get("[data-drupal-selector=edit-continue]").click();
  });

  // Correos + 1
  it('Correos + 1', () => {
    cy.visit(url);
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);

    cy.get('#edit-first-name').type(dataBase.nombre);
    cy.get('#edit-last-name').type(dataBase.apellido);
    cy.get('#edit-email').type(dataBase.correo);
    cy.get('#edit-phone').type(dataBase.telefono_11);
    cy.get('#edit-gender').select(dataBase.checkbox);
    cy.get('#edit-day').select(dataBase.checkbox);
    cy.get('#edit-month').select(dataBase.checkbox);
    cy.get('#edit-year').select(dataBase.checkbox_año);
    cy.get('#edit-state').select(dataBase.checkbox);
    cy.get('#edit-zip').type(dataBase.postal_5);
    cy.get('#edit-tyc').click();
    cy.get('#edit-continue').click();
  });

  // Correos temporales
  it('Correos temporales', () => {
    cy.visit(url);
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);

    cy.get('#edit-first-name').type("prueba");
    cy.get('#edit-last-name').type('Pruebá Apeñido');
    cy.get('#edit-email').type('prueba@1mail.x24hr.com');
    cy.get('#edit-phone').type('7894561890');
    cy.get('#edit-gender').select(1);
    cy.get('#edit-day').select(1);
    cy.get('#edit-month').select(1);
    cy.get('#edit-year').select(10);
    cy.get('#edit-state').select(1);
    cy.get('#edit-zip').type("12345");
    cy.get('#edit-tyc').click();
    cy.get('#edit-continue').click();
  });

  // Correos temporales-2
  it('Correos temporales-2', () => {
    cy.visit(url);
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);

    cy.get('#edit-first-name').type('Pruebá Ñombre');
    cy.get('#edit-last-name').type('Pruebá Apeñido');
    cy.get('#edit-email').type('prueba@just4fun.me');
    cy.get('#edit-phone').type('7894561890');
    cy.get('#edit-gender').select(1);
    cy.get('#edit-day').select(1);
    cy.get('#edit-month').select(1);
    cy.get('#edit-year').select(10);
    cy.get('#edit-state').select(1);
    cy.get('#edit-zip').type(dataBase.postal_5);
    cy.get('#edit-tyc').click();
    cy.get('#edit-continue').click();
  });

  // Correos temporales-3
  it('Correos temporales-3', () => {
    cy.visit(url);
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);

    cy.get('#edit-first-name').type('Pruebá Ñombre');
    cy.get('#edit-last-name').type('Pruebá Apeñido');
    cy.get('#edit-email').type('prueba@trashmail.at');
    cy.get('#edit-phone').type('7894561890');
    cy.get('#edit-gender').select(1);
    cy.get('#edit-day').select(1);
    cy.get('#edit-month').select(1);
    cy.get('#edit-year').select(10);
    cy.get('#edit-state').select(1);
    cy.get('#edit-zip').type(dataBase.postal_5);
    cy.get('#edit-tyc').click();
    cy.get('#edit-continue').click();
  });

  // Telefono con 9 caracteres (No deberia pasar)
  it('Telefono 9 caracteres', () => {
    cy.visit(url);
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);

    cy.get('#edit-first-name').type('Pruebá Ñombre');
    cy.get('#edit-last-name').type('Pruebá Apeñido');
    cy.get('#edit-email').type('prueba-prueba@gmail.com');
    cy.get('#edit-phone').type('789456189');
    cy.get('#edit-gender').select(1);
    cy.get('#edit-day').select(1);
    cy.get('#edit-month').select(1);
    cy.get('#edit-year').select(10);
    cy.get('#edit-state').select(1);
    cy.get('#edit-zip').type(dataBase.postal_5);
    cy.get('#edit-tyc').click();
    cy.get('#edit-continue').click();
  });

  // Telefono con 11 caracteres (No deberia pasar)
  it('Telefono 11 caracteres', () => {
    cy.visit(url);
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);

    cy.get('#edit-first-name').type('Pruebá Ñombre');
    cy.get('#edit-last-name').type('Pruebá Apeñido');
    cy.get('#edit-email').type('prueba-prueba-2@gmail.com');
    cy.get('#edit-phone').type('78945618910');
    cy.get('#edit-gender').select(1);
    cy.get('#edit-day').select(1);
    cy.get('#edit-month').select(1);
    cy.get('#edit-year').select(10);
    cy.get('#edit-state').select(1);
    cy.get('#edit-zip').type(dataBase.postal_5);
    cy.get('#edit-tyc').click();
    cy.get('#edit-continue').click();
  });

  // Documento 7 caracteres (No deberia pasar)
  // it('Documento 7 caracteres, correo repetido', () => {
  //   cy.visit(url);
  //   cy.get("[data-qadp=age_gate_yes").click();
  //   cy.url().should("include", url);

  //   cy.get('#edit-first-name').type('Pruebá Ñombre');
  //   cy.get('#edit-last-name').type('Pruebá Apeñido');
  //   cy.get('#edit-email').type('prueba-prueba-2@gmail.com');
  //   cy.get('#edit-phone').type('7894561890');
  //   cy.get('#edit-gender').select(1);
  //   cy.get('#edit-day').select(1);
  //   cy.get('#edit-month').select(1);
  //   cy.get('#edit-year').select(10);
  //   cy.get('#edit-state').select(1);
  //   cy.get('#edit-zip').type(dataBase.postal_5);
  //   cy.get('#edit-tyc').click();
  //   cy.get('#edit-continue').click();
  // });

  // // Documento 11 caracteres (No deberia pasar)
  // it('Documento 11 caracteres, correo repetido', () => {
  //   cy.visit(url);
  //   cy.get("[data-qadp=age_gate_yes").click();
  //   cy.url().should("include", url);

  //   cy.get('#edit-first-name').type('Pruebá Ñombre');
  //   cy.get('#edit-last-name').type('Pruebá Apeñido');
  //   cy.get('#edit-email').type('prueba-prueba-2@gmail.com');
  //   cy.get('#edit-phone').type('7894561890');
  //   cy.get('#edit-gender').select(1);
  //   cy.get('#edit-day').select(1);
  //   cy.get('#edit-month').select(1);
  //   cy.get('#edit-year').select(10);
  //   cy.get('#edit-state').select(1);
  //   cy.get('#edit-zip').type(dataBase.postal_5);
  //   cy.get('#edit-tyc').click();
  //   cy.get('#edit-continue').click();
  // });


  // PENDIENTE MENORES DE EDAD
  // PENDIENTE MENORES DE EDAD
  // PENDIENTE MENORES DE EDAD
  // PENDIENTE MENORES DE EDAD
  // PENDIENTE MENORES DE EDAD


  // PAQUETE COMPLETO FORM + TRIVIA
  // it('Formulario + Trivia', () => {

  //   // Carga inicial - 0 Cookies, Pasar Agegate
  //   cy.visit(url);
  //   cy.get("[data-qadp=age_gate_yes").click();
  //   cy.url().should("include", url);

  //   // Formulario Bueno
  //   cy.get('#edit-first-name').type('Pruebá Ñombre');
  //   cy.get('#edit-last-name').type('Pruebá Apeñido');
  //   cy.get('#edit-email').type('prueba-formulario-validado@gmail.com');
  //   cy.get('#edit-phone').type('5648972310');
  //   cy.get('#edit-gender').select(1);
  //   cy.get('#edit-day').select(1);
  //   cy.get('#edit-month').select(1);
  //   cy.get('#edit-year').select(10);
  //   cy.get('#edit-state').select(1);
  //   cy.get('#edit-zip').type(dataBase.postal_5);
  //   cy.get('#edit-tyc').click();
  //   cy.get('#edit-continue').click();

  //   // Empieza trivia
  //   cy.get('#quiz-start-btn').click();
  //   cy.get('[data-index="0"]').click({ multiple: true, force: true });
  //   cy.get('#quiz-next-btn').click();
  //   cy.get('[data-index="0"]').click({ multiple: true, force: true });
  //   cy.get('#quiz-next-btn').click();
  //   cy.get('[data-index="0"]').click({ multiple: true, force: true });
  //   cy.get('#quiz-finish-btn').click();
  //   cy.get('#quiz-restart-btn')
  //     .should("be.visible")
  //     .and("have.attr", "href")
  //     .and("include", "/");
  // });
});
