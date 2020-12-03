import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Recipe = ({ recipe }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/recipe/${recipe.Name}`}>
                <Card.Img src={recipe.Image} variant='top' style={{ height: "100%" }} />
            </a>
            <Card.Body>
                <a href={`/recipe/${recipe.Name}`}>
                    <Card.Title as='div'>
                        <strong>{recipe.Name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as='div'>
                    <Rating value={4.5} text={`  50 reviews`} color='gold' />
                </Card.Text>

                <Card.Text as='h6'>
                    <h6>Total Time : {recipe["Total Time"]} minutes</h6>
                </Card.Text>

                <Card.Text as='h6'>
                    <h6>Total Ingredienst : {recipe.Ingredients.length}</h6>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Recipe;
