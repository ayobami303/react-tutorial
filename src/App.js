import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TodoApp from './component/Todo/TodoApp';
import About from './component/About';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Home from './component/Home';
import Post from './component/Post';

class App extends React.Component {
	
	render(){
		return (
            <BrowserRouter>
                <div className='app'>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/todo-app' component={TodoApp} />
                        <Route path='/:post_id' component={Post} />
                    </Switch>
                </div>
            </BrowserRouter>
		)
	}
}

export default App;
