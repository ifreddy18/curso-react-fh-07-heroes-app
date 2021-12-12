import { useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { getHeroById } from '../../helpers/getHero';

export const HeroesScreen = () => {

    const { heroId } = useParams(); 

    const hero = useMemo( () => getHeroById( heroId ), [ heroId ] );

    const navigate = useNavigate();
    const handleReturn = () => {        
        navigate(-1); // -1 para regresar a la página anterior
    }

    if ( !hero ) {
        return <Navigate to="/" />;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const imgPath = `/assets/${ heroId }.jpg`;

    

    return (
        <div className="row mt-5">
            
            <div className="col-4">
                <img 
                    src={ imgPath } 
                    alt={ superhero }
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Alter ego: </b> { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b> { first_appearance }
                    </li>
                </ul>

                <h4 className="mt-3">Characters</h4>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-danger"
                    onClick={ handleReturn }
                >
                    Go back
                </button>

            </div>

        </div>
    )
}
