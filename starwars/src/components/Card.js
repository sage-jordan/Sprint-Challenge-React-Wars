import React from "react";
import { Card } from "semantic-ui-react";

export default function PersonCard (key, person) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{key.person.name}</Card.Header>
                <Card.Meta>Birth Year: {key.person.birth_year}</Card.Meta>
                <Card.Description>Gender: {key.person.gender} Hair Color: {key.person.hair_color} Height: {key.person.height} Mass: {key.person.mass} Skin Color: {key.person.skin_color}</Card.Description>
            </Card.Content>
        </Card>
    )
};