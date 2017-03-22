class GoogleBookService {

	constructor(props) {
		this.API_KEY = "AIzaSyBnkpbJZb3_07IPyRO2thqDjsYLdkVCP2Q";
		this.URLS = {
			SEARCH_BOOKS: 'https://www.googleapis.com/books/v1/volumes?q={searchTerm}&key=' + this.API_KEY
		};

		this.searchBooks = this.searchBooks.bind(this);
  	}

	searchBooks(query, successCallback, failCallback){

		let url = this.URLS.SEARCH_BOOKS.replace("{searchTerm}", query);
		let xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
	        	if (xmlHttp.status == 200){
	        		let results = JSON.parse(xmlHttp.responseText);
	        		successCallback(results);
	        	} else {
	        		failCallback();	
	        	}
	        }
	    }
	    xmlHttp.open("GET", url, true);
	    xmlHttp.send(null);
	}
}

export default new GoogleBookService();