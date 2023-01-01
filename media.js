
// Create parent class
class Media {
    constructor(title){
    this._title = title;   
    this._ratings = []; 
    }
    
    get title(){
    return this._title;
    }
    
    get ratings(){
    return this._ratings;   
    }
    
// Method to calculate average rating 
    getAverageRating(){
    let arraySum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  
    
    let arrayLength = this._ratings.length; 
    let averageRating = arraySum / arrayLength; 
    return averageRating; 
    }
    
    addRating(userRating){
    this._ratings.push(userRating); 
    }
    
    }

// Child class     
    
    class Book extends Media{
    constructor(title, author, pages)  
    {
      super(title)
      this._author = author; 
      this._pages = pages; 
    }
    get author(){
    return this._author;   
    }
    
    get pages(){
    return this._pages;   
    }
    
    }
    
    
    const booky = new Book('A magnificent book', 'Roberta Escritora', 200); 
    console.log(`New book just published called "${booky._title}" by ${booky._author}`); 
    booky.addRating(3); 
    booky.addRating(6); 
    booky.addRating(10); 
    console.log(`The book's rating is: ${booky.getAverageRating()}`);