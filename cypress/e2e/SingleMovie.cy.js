describe('Movie Knight single movie user flow', () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      fixture: "../fixtures/AllMovies.json"
    })
    cy.visit("http://localhost:3000")
  })

  it("should show details about the movie when its card is clicked", () => {
    cy.get("a").eq(0).click();
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        method: "GET",
        fixture: "../fixtures/singlemovie.json",
      }
    )
      .get(".single-page-container")
      .should("be.visible")
      .get(".image")
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
      )
      .get(".single-movie-description")
      .should("contain", "Black Adam")
      .and("contain", "4")
      .and(
        "contain",
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
      );
      cy.location().should((loc) =>
      expect(loc.href).to.eq("http://localhost:3000/movies/436270")
    );
  });
  
  it("should show a different url in the address bard when a movie is clicked", () => {
    cy.get("a").eq(0).click();
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        method: "GET",
        fixture: "../fixtures/singlemovie.json",
      }
    );
    cy.location().should((loc) =>
      expect(loc.href).to.eq("http://localhost:3000/movies/436270")
    );
  });
  
  it("should show an error message when there is a network problem", () => {
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        method: "GET",
        fixture: "",
      }
    );
    cy.get("a").eq(0).click();
    cy.visit("http://localhost:3000/movies/436270");
    cy.get("h4").contains(
      "Couldn't communicate with the server. Please try again later."
    );
  });

  it("should show an error message when the Go Back button is clicked and there is a network problem", () => {
    cy.get("a").eq(0).click();
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        method: "GET",
        fixture: "../fixtures/singlemovie.json",
      }
    );
    cy.visit("http://localhost:3000/movies/436270");
    cy.get(".back-button").click();
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      fixture: "",
    });
    cy.visit("http://localhost:3000/");
    cy.get(".text--error").contains(
      "Couldn't communicate with the server. Please try again later."
    );
  });
});