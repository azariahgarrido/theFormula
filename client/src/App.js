import React from 'react';
import './App.css';
import ''
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuizOne from './pages/QuizOne';
import QuizTwo from './pages/QuizTwo';
import QuizThree from './pages/QuizThree';
import QuizFour from './pages/QuizFour';
import QuizFive from './pages/QuizFive';
import MakeQuiz from './pages/MakeQuiz';
import Highscores from './pages/Highscores';
import YourQuiz from './pages/YourQuiz';

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
          <Route 
                  path="/QuizOne" 
                  element={<QuizOne />}
          />
          <Route 
                  path="/QuizTwo" 
                  element={<QuizTwo />}
          />
           <Route 
                  path="/QuizThree" 
                  element={<QuizThree />}
          />
          <Route
                  path="/QuizThree" 
                  element={<QuizThree />}
          />
          <Route 
                  path="/QuizFour" 
                  element={<QuizFour />}
          />
          <Route 
                  path="/QuizFive" 
                  element={<QuizFive />}
          />
          <Route 
                  path="/makeQuiz" 
                  element={<MakeQuiz />}
          />
          <Route 
                  path="/Highscores" 
                  element={<Highscores />}
          />
          <Route 
                  path="/YourQuiz" 
                  element={<YourQuiz />}
          />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
  );
}

export default App;