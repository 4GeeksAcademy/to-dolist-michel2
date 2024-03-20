import React, {useState} from "react";


//include images into your bundle

import rigoImage from "../../img/rigo-baby.jpg";


//create your first component

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    fetch('https://playground.4geeks.com/apis/fake/todos/user/michelriv', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Will be true if the response is successful
        console.log(resp.status); // The status code=200 or code=400 etc.
        console.log(resp.text()); // Will try to return the exact result as a string
        return resp.json(); // (returns promise) Will try to parse the result as JSON and return a promise that you can .then for results
    })
    .then(data => {
        // Here is where your code should start after the fetch finishes
        console.log(data); // This will print on the console the exact object received from the server
    })
    .catch(error => {
        // Error handling
        console.log(error);
    });

    return (
        <div className="small-container">
            <h1>My Todos</h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                setTodos([...todos, inputValue]);
                                setInputValue("");
                            }
                        }}
                        placeholder="What do you need to do?"
                    />
                </li>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item}
                        <span
                            className="x"
                            onClick={() => setTodos(todos.filter((_, currentIndex) => index !== currentIndex))}
                        >
                            🅧
                        </span>
                    </li>
                ))}
            </ul>
			<span class="bottom-text">13 items left</span>

            
        </div>
    );
}
			
			
				
			
			
		
	
		

				
export default Home;
