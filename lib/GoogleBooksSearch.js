class GoogleBookService {

	constructor(props) {
		this.API_KEY = "AIzaSyBnkpbJZb3_07IPyRO2thqDjsYLdkVCP2Q";
		this.URLS = {
			SEARCH_BOOKS: `https://www.googleapis.com/books/v1/volumes?q={searchTerm}&key=${this.API_KEY}`,
			BOOK_DETAILS: 'https://www.googleapis.com/books/v1/volumes/{bookId}'
		};

		this.searchBooks = this.searchBooks.bind(this);
  	}

	searchBooks(query, successCallback, failCallback){
		let url = this.URLS.SEARCH_BOOKS.replace("{searchTerm}", query);
		this.makeRequest(url, successCallback, failCallback);
	}


	getBookDetails(id, successCallback, failCallback){
		let url = this.URLS.BOOK_DETAILS.replace("{bookId}", id);
		this.makeRequest(url, successCallback, failCallback);
	}

	makeRequest(url, successCallback, failCallback){
		let xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4){
	        	let response = JSON.parse(xmlHttp.responseText);
	        	if (xmlHttp.status == 200){
	        		successCallback(response);
	        	} else {
	        		failCallback(response);	
	        	}
	        }
	    }
	    xmlHttp.open("GET", url, true);
	    xmlHttp.send(null);
	}

	
}

export default new GoogleBookService();