import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Recipe = ({ recipe }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/recipe/${recipe.Name}`}>
                <Card.Img src={recipe.Image} variant='top' style={{ height: "100%" }} />
            </Link>

            <Card.Body>
                <Link to={`/recipe/${recipe.Name}`}>
                    <Card.Title as='h4'>
                        <strong>{recipe.Name}</strong>
                    </Card.Title>
                </Link>

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
