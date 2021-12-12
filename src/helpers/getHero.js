const { heroes } = require("../data/heroes");

const getHeroById = ( id = '') => {
    return heroes.find( hero => hero.id === id );
}

const getHeroByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if ( !validPublisher.includes( publisher )) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( hero => hero.publisher === publisher );
}

const getHeroByName = ( name = '' ) => {

    console.log('getHeroByName called');

    if ( name === '' ) {
        return [];
    }

    name = name.toLowerCase();

    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name));
}


module.exports = {
    getHeroById,
    getHeroByPublisher,
    getHeroByName,
}