describe('Main Page', () => {
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

            .get('p')
            .contains('Please try your hand at our music trivia game and see if you are a music maestro!')
    })

    it('Should have a button visible that indicates that a game can start', () => {
        cy
            .get('.greeting-container')
            .get('button')
            .contains('Start Game')
    })

    it('Should be able to click on the "Start Game" button and be taken to the first question', () => {
        cy 
            .get('.greeting-container')
            .get('button')
            .click()
            .url()
            .should('eq','http://localhost:3000/question/0')
            // .get('.question-card')
            // .get('h3')
            // .should('be.visible')
    })  

    it('Should be able to view the initial score of 0 at the top of the question card', () => {
        cy 
            .get('.greeting-container')
            .get('button')
            .click()
            .get('.score-save-box')
            .get('p')
            .contains("Score: 0")
    })
    
  })
  