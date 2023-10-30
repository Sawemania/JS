//Objects

//Higher order functions -- functional programming 






//fetch






//dom

function f_one(cb) {
    console.log("I am function one");
    cb()
}
function f_two() {
    console.log("I am function two");
}

f_one();
f_two();

//callbacks -- callback hell
// promises -- .then .cathc  |||| async ...await

// API and API CALL
//Certainly! APIs (Application Programming Interfaces) are sets of rules and protocols that allow different software applications to communicate with each other. They define the methods and data formats that applications can use to request and exchange information.

//Here are the basics of using an API:

//Select an API: Choose the API that you want to interact with. This could be a weather API, a social media API, a payment gateway API, or any other service that provides a public API.

//Get API Access: You'll often need an API key or token to access the API. This key is used to authenticate your requests. The process for obtaining an API key varies depending on the service. You might need to sign up for an account or a developer program.

//Determine the Endpoint: An API typically consists of multiple endpoints, each representing a specific function or resource. You need to determine the specific endpoint you want to access. For example, if you're using a weather API, you might have an endpoint like https://api.example.com/weather.

//Choose Request Method: You need to decide which HTTP request method to use. Common methods include:

//GET: Retrieve data from the API.
//POST: Send data to the API to create a new resource.
//PUT: Update an existing resource on the API.
//DELETE: Remove a resource from the API.
//Include Headers and Parameters: Depending on the API's documentation, you may need to include headers or query parameters with your request. These headers and parameters provide additional information to the API.