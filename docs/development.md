# Development

## Index

- [Starting the App](#starting-the-app)
- [Dependencies](#dependencies)
- [Recommendations to Follow](#recommendations-to-Follow)

## Starting the App

We install the dependencies

`npm install`

We can start our application with the command

`npm start`

## Dependencies

React version 18.0.2 will be used

Only the following dependencies can be installed:

- React
- testing-library
- react-router-dom
- react-dom
- axios (optional for those who want)

## Recommendations to Follow

To help you organize and deliver on time, we leave you a workflow proposal. In any case, you can organize yourself in the way you think is most convenient to achieve the desired objective:

### Step 1: Creating routes

Import the relevant components to wrap the App and create the page routing. It doesn't matter that we still don't have the components that will go in each view, for the moment you can only leave one div.

### Step 2: Creating components for each route

Once the routes demanded by the command have been defined, let's go on to create the components that will be seen in each URL.


- [Starting the App](#starting-the-app)
- [Dependencies](#dependencies)
- [Recommendations to Follow](#recommendations-to-follow)

## Starting the App

We install the dependencies

`npm install`

We can start our application with the command

`npm start`

## Dependencies

React version 18.0.2 will be used

Only the following dependencies can be installed:

-React
- testing-library
- react-router-dom
- react-dom
- axios (optional for those who want)

## Recommendations to Follow

To help you organize and deliver on time, we leave you a workflow proposal. In any case, you can organize yourself in the way you think is most convenient to achieve the desired objective:

### Step 1: Creating routes

Import the relevant components to wrap the App and create the page routing. It doesn't matter that we still don't have the components that will go in each view, for the moment you can only leave one div.

### Step 2: Creating components for each route

Once the routes demanded by the command have been defined, let's go on to create the components that will be seen in each URL.

- Remember that for the page [/contacto](/docs/functionalities.md#pagina-2-contacto) you must implement a Form with its validations
- For [/home](/docs/functionalidades.md#pagina-1-inicio-home) map the API information and return a Card for each dentist
- Create a dynamic Link for the details of each dentist in [/dentista/:id](/docs/functionalities.md#pagina-3-detalle-dentista)
- For [/favs](/docs/functionalities.md#pagina-4-destacados) consume the information from the localStorage and return a Card for each featured dentist

### Step 3: Global Context Implementation

Once we have the entire structure of our application, we can start consuming the API by making a fetch or axios call.

- They must save this information in a global context, along with the app theme.
- Using useReducer, create the necessary methods to manage its behavior (changing the App's theme and saving the API response in the Context).

### Step 4: Consume Global Context

With the information already in hand, we begin to “fill” the gaps we left in our previous structure, subscribing our components to the global context (only those that need information about it).

### Step 4: Featured functionality

Each card must have a button that triggers the action of saving a card that we want to highlight, within the localStorage. You will need to use useReducer to handle this logic.

### Step 6: Styling Key Components

Based on the current Theme, you should pass a certain color variant to the components belonging to the routes (Home.jsx, Favs.jsx, Detail.jsx, Contact.jsx). It is optional but not mandatory to type more sections, this option will have weight when evaluating the final grade.
