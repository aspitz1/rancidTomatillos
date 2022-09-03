import mulan from './mockData/mulanGET.json';
import movies from './mockData/movies.json';

describe('Movie', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    it('Should see a movies detail when the cover is clicked', () => {
        cy.get('a[id="337401"]')
        .contains('Mulan')
        .click()
        .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
        statusCode: 200,
        body: mulan
        })
        .get('h2')
        .contains('Mulan')
        .get('p[class="description"]')
        .contains('When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.')
    })

    it('Should go back home from Movie details', () => {
        cy.get('a[id="337401"]')
        .contains('Mulan')
        .click()
        .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
        statusCode: 200,
        body: mulan
        })
        .get('h2')
        .contains('Mulan')
        .get('p[class="description"]')
        .contains('When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.')
        .get('a[class="navbar-home"]')
        .click()
        .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 200,
            body: movies
        })
        .get('div[class="movies-container"]')
        .get('a[id="694919"]')
        .contains('Money Plane')
        .get('a[id="585244"]')
        .contains('I Still Believe')
    })

    it('Should give message if no movie is found', () => {
        cy.intercept({
            method: 'GET', 
            url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/45'
        }, 
        {
            statusCode: 404,
            body: {
                error: "No movie found with id:45"
            }
        })
        .visit('http://localhost:3000/45')
        .contains('Looks like something went wrong.')
    })
})