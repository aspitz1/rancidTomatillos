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
})