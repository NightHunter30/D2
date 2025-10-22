function Card(props) {
    const cardStyles = {
        padding: "10px",
        backgroundColor: "lightblue",
        borderRadius: "10px",
    };
    return <div style={cardStyles}>{props.children}</div>;
}

export default Card;

