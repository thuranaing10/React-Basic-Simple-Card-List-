function Card(props){
    
    const {title, image, description, number, children} = props;

    return (
        <div className="card">
            <img src={image}></img>
            <h1 style={{marginTop:'1rem'}}>{title}</h1>
            <p>{description}</p>
            <p>{number}</p>
            {children}
        </div>
    )
}

export default Card;