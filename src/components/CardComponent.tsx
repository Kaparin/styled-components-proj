import {Card, CardImg} from "./Card";

interface CardComponentProps {
    title: string;
    description: string;
    imageUrl: string;
}
function CardComponent({title, description, imageUrl}: CardComponentProps) {
    return (
        <Card>
            <CardImg src={imageUrl} alt={title}/>
            <h1>{title}</h1>
            <p>{description}</p>
        </Card>
    )
}

export default CardComponent;