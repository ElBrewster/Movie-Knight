describe("Rancid Tomatillos user interface", () => {
  it("should show an error if there is a network problem", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      fixture: "",
    });
    cy.visit("http://localhost:3000/");
    cy.get(".text--error").contains(
      "Couldn't communicate with the server. Please try again later."
    );
  });

  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      fixture: "../fixtures/allmovies.json",
    });
    cy.visit("http://localhost:3000");
  });

  it("should show a header with a title", () => {
    cy.contains("MOVIE KNIGHT");
  });

  it("should show a collection of movies", () => {
    cy.get(".movie-card-overview").should("exist");
    cy.get(".movie-card").should("have.length", 4).should("be.visible");
    cy.get(".frontPage")
      .eq(0)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
      );
    cy.get(".frontPage")
      .eq(1)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"
      );
    cy.get(".frontPage")
      .eq(2)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
      );
    cy.get(".frontPage")
      .eq(3)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg"
      );
  });

  it("should show each movie's poster", () => {
    cy.get(".frontPage").eq(0).should("have.attr", "width", "220vw");
    cy.get(".frontPage").eq(1).should("have.attr", "width", "220vw");
    cy.get(".frontPage").eq(2).should("have.attr", "width", "220vw");
    cy.get(".frontPage").eq(3).should("have.attr", "width", "220vw");
  });

  it("should show the footer", () => {
    cy.contains("Created By: Karrar")
    cy.contains("El")
  })
})