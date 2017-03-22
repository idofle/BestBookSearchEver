import React from 'react';
import Header from './components/Header.jsx';
import BookSearch from './components/BookSearch.jsx';
import BookResults from './components/BookResults.jsx';

class App extends React.Component {
   render() {
      return (
      	<div>
	        <Header/>
	        <BookSearch/>
        </div>
         
      );
   }
}

export default App;