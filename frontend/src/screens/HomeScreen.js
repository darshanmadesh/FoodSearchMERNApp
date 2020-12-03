import React from "react";
import { Row, Col } from "react-bootstrap";
import recipes from "../recipes";
import Recipe from "../components/Recipe";

const HomeScreen = () => {
    return (
        <>
            <h1 className='text-primary'>Top Recipes</h1>
            <Row>
                {recipes.map((recipe) => (
                    <Col key={recipe.Name} sm={4}>
                        <Recipe recipe={recipe} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
