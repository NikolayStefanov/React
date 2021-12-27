import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import PetCard from '../PetCard/PetCard';
import * as petService from '../../services/petsService';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Categories = () => {
    const {category} = useParams();
    const [pets, setPets] = useState([]);

    useEffect(()=>{
        petService.getAll(category)
        .then(res => setPets(res))
    }, []);

    return (
    <section className="dashboard">
        <h1>Dashboard</h1>
        <CategoryNavigation currentCategory/>
        <ul className="other-pets-list">
            {pets.map(p=> <PetCard key = {p.id} {...p} />)}
        </ul>
    </section>
    )
}

export default Categories;