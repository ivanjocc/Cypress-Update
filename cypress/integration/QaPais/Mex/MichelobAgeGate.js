import { URLPRUEBA_SI_NO, UrlTapIntoYourBeer } from "./urls";
import { URLPRUEBA_SI_NO as url } from "./urls";

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


// AGE GATE

describe("Age gate de si y no ", () => {
  beforeEach(() => {
    cy.setCookie("OptanonAlertBoxClosed", "2021-02-01T21:55:00.524Z");
    cy.visit(url);
  });

  //Validación del Age Gate
  it("Test Age gate si", () => {
    cy.get("[data-qadp=age_gate_yes").click();
    cy.url().should("include", url);
  });

  it("Age gate no", () => {
    cy.get("[data-qadp=age_gate_no").click();
    cy.url().should("include", UrlTapIntoYourBeer);
  });
});


// BLOQUE LEGAL

describe("Bloque legal", () => {
  beforeEach(() => {
    cy.setCookie("OptanonAlertBoxClosed", "2021-02-01T21:55:00.524Z");
    cy.visit(url);
    cy.get("[data-qadp=age_gate_yes").click();
  });
  
  it("Mexico", () => {
    cy.get('button')
    .contains('CANALES DE ATENCIÓN Y RESPUESTA A PETICIONES, CONSULTAS, QUEJAS Y RECLAMOS DE TITULARES DE DATOS PERSONALES')
    .click({force: true});

    cy.get('p')
    .contains('Procedimiento para Atención y Respuesta a Peticiones, Consultas, Quejas y Reclamos de los Titulares de Datos Personales: Los Titulares de Datos Personales tratados por LA COMPAÑÍA tienen derecho a acceder a sus Datos Personales y a los detalles de dicho Tratamiento, así como a rectificarlos y actualizarlos en caso de ser inexactos o a solicitar su eliminación cuando consideren que resultan ser excesivos o innecesarios para las finalidades que justificaron su obtención u oponerse al Tratamiento de los mismos para fines específicos. Las vías que se han implementado para garantizar el ejercicio de dichos derechos a través de la presentación de la solicitud respectiva son: Comunicación dirigida a Cervecería Modelo de México, S. de R.L. de C.V., área de compliance, ubicada en la calle Cerrada Palomas # 22, piso 6, colonia Reforma Social, alcaldía Miguel Hidalgo, C.P. 11650, Ciudad de México, México, o envío de solicitud al correo electrónico datos.legal@ab-inbev.com');
  });
});


// Elementos del Footer

describe("Validación Footer", () => {
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach("set cookie", () => {
    cy.setCookie("OptanonAlertBoxClosed", "2021-02-09T17:25:04.013Z");
    cy.visit(URLPRUEBA_SI_NO);
  });

  //Textos Legales
  it("No comparta contenido con menores de edad", () => {
    cy.contains("NO COMPARTA ESTE CONTENIDO CON MENORES DE EDAD", {
      matchCase: false,
    }).should("be.visible");
  });

  it("Todo con medida", () => {
    cy.contains("TODO CON MEDIDA").should(
      "be.visible"
    );
  });

  //Links Legales
  it("ANHEUSER-BUSCH INBEV © 2022", () => {
    cy.get("a")
      .contains("Anheuser-Busch InBev", { matchCase: false })
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "https://www.ab-inbev.com");
  });

  it("Términos y condiciones de uso", () => {
    cy.get("a")
      .contains("TÉRMINOS Y CONDICIONES DE USO", { matchCase: false })
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "https://portal.grupomodelo.com/es/terminos.html");
  });

  it("Aviso de privacidad", () => {
    cy.get("a")
      .contains("Aviso de privacidad")
      .and("have.attr", "href")
      .and("include", "https://www.grupomodelo.com/abilegal/politica-deproteccion-de-datos-personales");
  });

  it("Hablemos de alcohol", () => {
    cy.get("a")
      .contains("Hablemos de alcohol", { matchCase: false })
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "https://www.tapintoyourbeer.com");
  });

  it("Contáctenos", () => {
    cy.get("a")
      .contains("Contáctenos", { matchCase: false })
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "https://portal.grupomodelo.com/es/noticias/contactanos");
  });

  //Links Redes Sociales

  it("Facebook", () => {
    const facebook = "https://www.facebook.com/MichelobUltraMx/";
    // const facebook = "https://www.facebook.com/MichelobUltraMx";
    cy.get(`a[href="${facebook}"]`).should("be.visible");
  });

  it("Instagram", () => {
    const instagram = "https://www.instagram.com/michelobultramx/";
    cy.get(`a[href="${instagram}"]`).should("be.visible");
  });
  
  it("Twitter", () => {
    const twitter = "https://twitter.com/michelobultramx";
    // const twitter = "https://twitter.com/michelobultramx?s=21";
    cy.get(`a[href="${twitter}"]`).should("be.visible");
  });

  it("Youtube", () => {
    const youtube = "https://www.youtube.com/c/MichelobUltraMexico";
    cy.get(`a[href="${youtube}"]`).should("be.visible");
  });
});


// PREGUNTAR COMO FUNCIONAN GTM

// VALIDACION GTM

// describe("Validación GTM", () => {
//   it("Test GTM Presente", () => {
//     cy.visit(URLPRUEBA_SI_NO);
//     cy.window({ timeout: 1000 })
//       .should("have.property", "google_tag_manager")
//       .and("have.property", "GTM-T4MHS8R");
//     // cy.window({ timeout: 1000 }).should("have.property", "dataLayer");
//   });
// });

