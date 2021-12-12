import { Navbar } from "../components/ui/Navbar"
import { Routes, Route } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="hero/:heroId" element={<HeroesScreen />} />
                    
                    <Route path="search" element={<SearchScreen />} />
                    
                    <Route path="/" element={<DcScreen />} />
                </Routes>
            </div>
        </>
    )
}
