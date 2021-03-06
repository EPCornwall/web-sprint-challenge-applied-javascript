// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//

const cardsContainer = document.querySelector('.cards-container')

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then((value)=>{
//     console.log(value)
// })
// .catch((error)=>{
//     console.log(error)
// })


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((value)=>{
    //Javascript
    value.data.articles.javascript.forEach(element => {
        //run articlemaker here
        cardsContainer.appendChild(articleMaker(element));
        // console.log(articleMaker(element));
    })
    //Bootstrap
    value.data.articles.bootstrap.forEach(element => {
        cardsContainer.appendChild(articleMaker(element));
        // console.log(articleMaker(element));
    }) 
    //Technology
    value.data.articles.technology.forEach(element => {
        cardsContainer.appendChild(articleMaker(element));
        // console.log(articleMaker(element));
    }) 
    //Jquery
    value.data.articles.jquery.forEach(element => {
        cardsContainer.appendChild(articleMaker(element));
        // console.log(articleMaker(element));
    }) 
    //Node
    value.data.articles.node.forEach(element => {
        cardsContainer.appendChild(articleMaker(element));
        // console.log(articleMaker(element));
    }) 
})
.catch((error)=>{
    console.log(error)
});


// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//


const articleMaker = function(articleObj){
    //create elements
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardImgContainer = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardAuthorName = document.createElement('span')

    //add classes
    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    cardImgContainer.classList.add('img-container')
    //add content
    cardHeadline.textContent = `${articleObj.headline}`
    cardImg.src = `${articleObj.authorPhoto}`
    cardAuthorName.textContent =  `By ${articleObj.authorName}` 

    //nest
    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    cardAuthor.appendChild(cardImgContainer)
    cardAuthor.appendChild(cardAuthorName)
    cardImgContainer.appendChild(cardImg)

    //onclick
    card.addEventListener('click', ()=>{
        console.log(`${articleObj.headline}`)
    })

    //return
    // console.log(card)
    return card
}



// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

// Use your function to create a card for each of the articles, and append each card to the DOM