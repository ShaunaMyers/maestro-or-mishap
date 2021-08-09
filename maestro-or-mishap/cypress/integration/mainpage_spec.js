describe('Home Page', () => {
    beforeEach(() => {
      cy.fixture('questions.json').then((questionData) => {
        cy.intercept('https://opentdb.com/api.php?amount=12&category=12&difficulty=medium&type=multiple', questionData)
      })
      cy.visit('http://localhost:3000/')
    })
  
    it('Should be able to visit http://localhost:3000 and see a title rendered', () => {
      cy
        .get('header')
        .contains('Are you the Maestro?')
    })

    it('Should be able to vist the main page and see "Welcome" with a message to start the game', () => {
        cy
            .get('.greeting-container')
            .get('h2')
            .contains('Welcome!')
    })
  
})