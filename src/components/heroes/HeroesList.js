import React, { useMemo } from 'react';

import { getHeroByPublisher } from '../../helpers/getHero';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroByPublisher( publisher ), [ publisher ] );

    return (
        <div className="row row-col-3 g-3">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
