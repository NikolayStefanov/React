const Pet = ({
    id,
    name,
    description,
    imageURL,
    category,
    likes
}) =>{
    return(
        <li className="otherPet">
                <h3>Name: {name}</h3>
                <p>Category: {category}</p>
                <p className="img"><img src={imageURL}/></p>
                <p className="description">{description}</p>
                <div className="pet-info">
                    <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                    <a href="#"><button className="button">Details</button></a>
                    <i className="fas fa-heart"></i> <span> {likes}</span>
                </div>
        </li>
    );
}

export default Pet;