import React, {useState, useEffect} from 'react';
import './App.css';
import Title from './components/Title';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import Alert from './components/Alert';

const App = () => {

    const [searchItem, setSearchItem] = useState(""); // user input, initial value set to an empty string
    const [recipes, setRecipes] = useState([]); // array obtained using API (data.hits)
    const [alert, setAlert] = useState(""); // alert message
    const [query, setQuery] = useState("query");

    const APP_ID = "0ff309d6";
    const APP_KEY = "ebfa16f7812ec7029bc6e8bb5117114c";
    const URL = 
    `https://api.edamam.com/search?q=${searchItem}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    /**
     * async is used because fetching consumes time but we want to
     * make sure the JS continues to execute without waiting
     */
    const getData = async () => {
        const response = await fetch(URL);
        const result = await response.json();
        // console.log(result.hits); // used for testing purpose
        if (result.hits.length !== 0) {
            setRecipes(result.hits);
            setSearchItem(""); // clear the search bar
        } else {
            // console.log("not found"); // used for testing purpose
            /**
             * this part was initally used for error handling
             * but it's not needed beacause I used
             * React useEffect for error handling
             * So I just used it to show text
             */
            setAlert("* The API only allows a maximum of 5 searches per minute"); // report
        }
    }

    /**
     * whenever dependency(second parameter here) changes, the first function will be called
     */
     useEffect( () => {
        getData();
        // eslint-disable-next-line 
    }, [query]); 

    // update searchItem
    const updateSearch = (err) => {
        setSearchItem(err.target.value);
        // console.log(searchItem); // used for testing purpose
    }

    /**
     * prevent default action of the submit action(refresh page) and then call getData method.
     */
    const onSubmit = (err) => {
        // error handling
        err.preventDefault();
        setQuery(searchItem); // change query(dependency)
    }

    /**
     * depending on whether the mouse is on, change the color of the button so it looks apparent to users 
     */
    const buttonOn = (err) => {
        err.target.innerHTML = "Confirm";
    }
    const buttonOut = (err) => {
        err.target.innerHTML = "Search";
    }

    // In Recipe part, we pass the recipe as parameter
    return (
        <div className = "App">
            <Title /> 
            <form className="search-form" onSubmit={onSubmit}>
                {alert !== "" && <Alert alert={alert}/>}
                <input className='search-bar' type='text' placeholder='Search Food' autoComplete='off' onChange={updateSearch} value={searchItem} />
                <button className='search-button' type='submit' onMouseOver={buttonOn} onMouseOut={buttonOut}>Search</button>
            </form>
            <div className='recipes'>
                {recipes !== [] && recipes.map(recipe => 
                    <Recipe recipe={recipe} />)}
            </div>
            <Footer />
        </div>
    )
}

export default App