import { URLPRUEBA_SI_NO, UrlTapIntoYourBeer } from "./urls";
import { URLPRUEBA_SI_NO as url } from "./urls";
import { dataBase, db as prueba } from './db.js';
import { diaAnterior, diaHoy, diaSiguiente, fechaMax, mesActual, pruebaDia, pruebaMes, pruebaYear } from "./Fechas";


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

describe("Validación fechas", () => {
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach("set cookie", () => {
    cy.setCookie("OptanonAlertBoxClosed", "2021-02-09T17:25:04.013Z");
    cy.visit(URLPRUEBA_SI_NO);
  });

  // que año es hoy?
  // que mes es hoy?
  // que dia es hoy?

  // Mayor de edad (Cumple hoy)
  it("Mayor de edad - Fecha hoy", () => {
    cy.visit(url);
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);

    cy.get('#edit-day').select(diaHoy);
    cy.get('#edit-month').select(mesActual);
    cy.get('#edit-year').select(fechaMax);
    cy.get('#edit-continue').click();
  });

  // Mayor de edad (Cumplio ayer)
  it("Mayor de edad - Fecha ayer", () => {
    cy.visit(url);
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);
    
    cy.get('#edit-day').select(diaAnterior);
    cy.get('#edit-month').select(mesActual);
    cy.get('#edit-year').select(fechaMax);
    cy.get('#edit-continue').click();
  });
  
    // Menor de edad (Cumple mañana, todavia es menor de edad)
    it("Menor de edad - Fecha mañana", () => {
      cy.visit(url);
      cy.get("[data-qadp=age_gate_yes").click();
      cy.url().should("include", url);
  
      cy.get('#edit-day').select(diaSiguiente);
      cy.get('#edit-month').select(mesActual);
      cy.get('#edit-year').select(fechaMax);
      cy.get('#edit-continue').click();
    });
});

// describe("Validación fechas", () => {
//   before(() => {
//     cy.on("uncaught:exception", (err, runnable) => {
//       return false;
//     });
//   });

//   beforeEach("set cookie", () => {
//     cy.setCookie("OptanonAlertBoxClosed", "2021-02-09T17:25:04.013Z");
//     cy.visit(URLPRUEBA_SI_NO);
//   });

//   // que año es hoy?
//   // que mes es hoy?
//   // que dia es hoy?

//   // Mayor de edad (Cumplio ayer)
//   it("Mayor de edad - Fecha ayer", () => {
//     cy.visit(url);
//     cy.get("[data-qadp=age_gate_yes").click();
//     cy.url().should("include", url);
    
//     cy.get('#edit-day').select(diaAnterior);
//     cy.get('#edit-month').select(mesActual);
//     cy.get('#edit-year').select(fechaMax);
//     cy.get('#edit-continue').click();
//   });

// });

// describe("Validación fechas", () => {
//   before(() => {
//     cy.on("uncaught:exception", (err, runnable) => {
//       return false;
//     });
//   });

//   beforeEach("set cookie", () => {
//     cy.setCookie("OptanonAlertBoxClosed", "2021-02-09T17:25:04.013Z");
//     cy.visit(URLPRUEBA_SI_NO);
//   });

//   // que año es hoy?
//   // que mes es hoy?
//   // que dia es hoy?

//   //  Menor de edad (Cumple mañana, todavia es menor de edad)
//     it("Menor de edad - Fecha mañana", () => {
//       cy.visit(url);
//       cy.get("[data-qadp=age_gate_yes").click();
//       cy.url().should("include", url);
  
//       cy.get('#edit-day').select(diaSiguiente);
//       cy.get('#edit-month').select(mesActual);
//       cy.get('#edit-year').select(fechaMax);
//       cy.get('#edit-continue').click();
//     });

// });
