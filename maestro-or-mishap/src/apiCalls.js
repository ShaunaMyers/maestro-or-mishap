export const fetchQuestions = () => {
    return fetch('https://opentdb.com/api.php?amount=12&category=12&difficulty=medium&type=multiple')
    .then(response => {
        if(!response.ok) {
            throw Error('Error fetching reservations')
        }
        return response.json()
    })
}