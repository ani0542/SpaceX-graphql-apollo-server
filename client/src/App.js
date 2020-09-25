
import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.png'
import Launches from './components/Launches';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Launch from './components/Launch';


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
  // uri: '/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
        <BrowserRouter>
                 <div className='container'>
                           <img src={logo} alt='error' style={{width:'300',margin:'auto',display:'block'}}/> 
                           <Route exact path='/' component={Launches}/> 
                           <Route exact path="/launch/:flight_number" component={Launch} />
                 </div> 
        </BrowserRouter>         
    </ApolloProvider>
  )
}

export default App
