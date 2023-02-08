describe('Movie Knight main page user flow', () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      fixture: "../fixtures/AllMovies.json"
    })
    cy.visit("http://localhost:3000")
  })

  it('Should show the title', () => {
    cy.contains("Movie Knight")
  })

  it("Should show a drop-down menu that says Filter By Rating", () => {
    cy.contains(".heading-all-movies", "Filter By Rating")
    cy.get('select[name="filter-movies"]')
      .select(1)
      .invoke("val")
      .should("eq", "two-stars")
  })

  it("Should show a grid of movie posters", () => {
    cy.get(".movie-card-overview").should("exist")
    cy.get(".movie-card").should("have.length", 4)
      .should("be.visible")
    cy.get(".image").eq(0).should("have.attr", "src", "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg")
    cy.get(".image").eq(1).should("have.attr", "src", "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg")
    cy.get(".image").eq(2).should("have.attr", "src", "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg")
    cy.get(".image").eq(3).should("have.attr", "src", "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg")
  })

  it("Should show the Footer", () => {
    cy.contains("Our Git Hub Tags")
  })
})