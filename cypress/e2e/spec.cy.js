describe('/App/App.js', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  it('should visit ', () => {
    cy.visit('localhost:3000')
  })
  it('Should have a title', () => {
    cy.get('nav').find('div').find('.heading').contains('Rancid Tomatillos')
    
  })
  it('Should display all movies', () => {
    cy.intercept('GET', ' https://rancid-tomatillos.herokuapp.com/api/v2/movies').as('movies')
    cy.wait('@movies')
    expect('movies.length' > 2);
})
})