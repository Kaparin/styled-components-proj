import React from 'react';
import './App.css';
import CardComponent from './components/CardComponent';
import GlobalStyle from "./components/GlobalStyle";


function App() {

    // @ts-ignore
    return (
        <><GlobalStyle/>
            <div className="App">

                <CardComponent
                    title="Headline"
                    description="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
                    imageUrl="/cardImg1.svg" // Убедитесь, что файл находится в папке public/img
                />

            </div>
        </>
    );
}


export default App;