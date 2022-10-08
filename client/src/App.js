import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import QuizOne from './pages/QuizOne';
import QuizTwo from './pages/QuizTwo';
import QuizTwo from './pages/QuizThree';
import QuizFour from './pages/QuizFour';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
<<<<<<< HEAD
            <Route 
                    path="/QuizOne" 
                    element={<QuizOne />}
            />
            <Route 
                    path="/QuizTwo" 
                    element={<QuizTwo />}
            />
=======
          {/* <Route 
                  path="/" 
                  element={<Homepage />} 
          /> */}
          <Route 
                  path="/QuizOne" 
                  element={<QuizOne />}
          />
          <Route 
                  path="/QuizTwo" 
                  element={<QuizTwo />}
          />
          <Route 

                  path="/QuizFour" 
                  element={<QuizFour />}
          />        

                  path="/QuizThree" 
                  element={<QuizThree />}
          />
          
>>>>>>> eacc85dc5dc14d9fb6e6025c4513c0969814a151
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
  );
}

export default App;