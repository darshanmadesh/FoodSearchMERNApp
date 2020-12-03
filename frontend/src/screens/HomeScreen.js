import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Recipe from "../components/Recipe";

const HomeScreen = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const { data } = await axios.get("/api/recipes");
            setRecipes(data);
        };
        fetchRecipes();
    }, []);
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
