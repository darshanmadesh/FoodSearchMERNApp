import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
//import Ingredients from "../components/Ingredients";
import recipes from "../recipes";

const RecipeScreen = ({ match }) => {
    const recipe = recipes.find((r) => r.Name === match.params.id);
    const prepTime = Math.floor(0.3 * recipe["Total Time"]);
    const cookTime = recipe["Total Time"] - Math.floor(0.3 * recipe["Total Time"]);
    const totalIngredients = recipe.Ingredients.length;
    const ingredients = recipe.Ingredients;
    return (
        <>
            <Link className='btn btn-primary my-3' to='/'>
                Go Back
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={recipe.Image} alt={recipe.Name} rounded fluid></Image>
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item variant='light'>
                            <h1 className='text-dark'>{recipe.Name}</h1>
                        </ListGroup.Item>
                        <ListGroup.Item variant='light'>
                            <Rating value={4.5} text={`  50 reviews`} color='gold' />
                        </ListGroup.Item>
                        <ListGroup.Item variant='light'>
                            <h5 className='text-primary'>{`Total Time : ${recipe["Total Time"]} min`}</h5>
                            <h5 className='text-primary'>{`Prep Time : ${prepTime} min`}</h5>
                            <h5 className='text-primary'>{`Cook Time : ${cookTime} min`}</h5>
                            <h5 className='text-primary'>{`Total Ingredients : ${totalIngredients} min`}</h5>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item variant='secondary'>
                            <h2 className='text-primary'>Ingredients :</h2>
                            {ingredients.map((i) => (
                                <h5 className='text-primary'>{i}</h5>
                            ))}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <ListGroup variant='flush'>
                    <ListGroup.Item variant='light'>
                        <h2 className='text-primary'>Instructions :</h2>
                        <h5 className='text-secondary'>{recipe.Instructions}</h5>
                    </ListGroup.Item>
                </ListGroup>
            </Row>
        </>
    );
};

export default RecipeScreen;
