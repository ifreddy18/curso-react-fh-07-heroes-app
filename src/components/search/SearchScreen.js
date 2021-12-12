import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../helpers/getHero';
import { HeroCard } from '../heroes/HeroCard';
import { useMemo } from 'react';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = ''} = queryString.parse(location.search);

    const [ { searchText }, handleInputChange ] = useForm({ searchText: q });
    

    const heroesFiltered = useMemo( () => getHeroByName( q ), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( searchText === '') {
            navigate('');
        } else {
            navigate(`?q=${ searchText }`)
        }
    };

    
    return (
        <>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            placeholder="Buscar heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            className="btn btn-outline-primary mt-1 w-100"
                            type="submit"
                        >
                            Buscar
                        </button>

                    </form>


                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {
                        ( q === '')
                            ? <div className="alert alert-info">Buscar un heroe</div>
                            : ( heroesFiltered.length <= 0 )
                                &&  <div className="alert alert-info">
                                        No hay resultados para: { q }
                                    </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero } 
                            />
                        ))
                    }
                </div>

            </div>
        
        
        </>
    )
}
