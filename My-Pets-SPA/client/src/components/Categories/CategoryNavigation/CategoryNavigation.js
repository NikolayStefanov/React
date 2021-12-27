import { NavLink } from 'react-router-dom'
const CategoryNavigation = () =>{
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink className={({isActive}) => isActive? "active" : ''} to="/categories/all">All</NavLink></li>
                <li><NavLink className={({isActive}) => isActive? "active" : ''} to="/categories/cats">Cats</NavLink></li>
                <li><NavLink className={({isActive}) => isActive? "active" : ''} to="/categories/dogs">Dogs</NavLink></li>
                <li><NavLink className={({isActive}) => isActive? "active" : ''} to="/categories/parrots">Parrots</NavLink></li>
                <li><NavLink className={({isActive}) => isActive? "active" : ''} to="/categories/reptiles">Reptiles</NavLink></li>
                <li><NavLink className={({isActive}) => isActive? "active" : ''} to="/categories/other">Other</NavLink></li>

                <style jsx>{`
                    .active {
                        background: lightgreen !important;
                    }
           `}</style>
            </ul>
        </nav>
    )
}

export default CategoryNavigation;