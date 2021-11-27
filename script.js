// holding API URL in a variable
const url ="http://makeup-api.herokuapp.com/api/v1/products.json";
//Using Async/await to process API Data
const fetchData = async ()=>{
    try{
       const response = await fetch(url); // using Fetch Method 
        var products = await response.json(); // converting JSON to Object
        let main = document.createElement("div");  
        main.className="container-fluid"
        main.id = "main"  
        main.innerHTML=`<h3 class="display-4" id="heading">Welcome to MakeUp API</h3>`
        for(let i =0 ;i<products.length; i++){
                //collecting all required values from API
                    let brand =products[i].brand;
                    let productName = products[i].name;
                    let productPrice = products[i].price;
                    let img = products[i].image_link;
                    let productLink = products[i].product_link;
                    let description = products[i].description
                    //Creating HTML Elements using DOM
                    let subdiv = document.createElement('div');
                    let innerDiv = document.createElement("div")
                    subdiv.className="card-columns"
                    innerDiv.className = "card"
                    innerDiv.setAttribute("style","width:350px")
                    innerDiv.innerHTML=`<img class="card-img-top" width="100px" src="${img}" alt="Oops! Image Not found!!!"></img>
                                        <div class="card-body">
                                        <h4 class="card-title text-center"><u>Brand name:</u></h4> <h5 class="text-center">${brand}</h5>
                                        <h4 class="text-center"><u>Product:</u></h4> <h5 class="text-center">${productName}</h5><br>
                                        <h4 class="text-center"><u>Product Price:</u></h4><h6 class="text-center">$ ${productPrice}</h6><br></p>
                                        <h5><u>Product Description:</u></h5>
                                        <p id="text" class="card-text">${description}</p><br>
                                        <a class="btn btn-block btn-primary" target="_blank" href="${productLink}">Product link</a>
                                        </div>`
                    //Adding DOM elements to Main Div
                    subdiv.append(innerDiv);
                    main.appendChild(subdiv);
                    
                        }
                    //adding DOM to HTML
                    document.body.append(main);
                    }
    //catch method is used for capturing eroors
    catch(err){
        alert("Something went wrong");
    }
}
fetchData();
