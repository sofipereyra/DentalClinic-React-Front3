## Features

## Index

- [Required Features](#required-features)
  - [Routes](#routes)
    - [Page 1: Home (/home)](#page-1-home-home)
    - [Page 2: Contact (/contact)](#page-2-contact)
    - [Page 3: Dentist detail (/dentist/:id)](#page-3-dentist-detail)
    - [Page 4: Featured (/favs)](#page-4-featured)
- [Final result](#final-result)

## Mandatory features

The following functionalities are minimum requirements necessary for final approval and it is essential that they work correctly.

**The application must have four (4) pages: Home, Contact, Details of each dentist, Featured**

**Correct navigation between pages through React Router's own Links will be mandatory for approval**

**It is crucial to have a homogeneous presence on all pages of [Navbar](/src/Components/Navbar.jsx) and [Footer](/src/Components/Footer.jsx)**

### Creating the Context

You will need to create a global context in your application that makes the following information available:

- Color theme for the entire app (light or dark)
- Information brought by the API (you can use fetch or axios to make the call)
- To manage and update the global state you must implement the useReducer hook. With this hook they must implement the change of color theme (with a specific button in the app for this within Navbar), from light to dark and vice versa.

### Route creation

Using React Router you must create the following addresses described in [routes](#routes)

### Featured functionality

- Each rendered card must have the option to be added to highlights.
- Featured cards must be saved in the current localStorage session
- Handle this behavior with the useReducer hook

### Styles

Based on the theme (light or dark) consumed from the global context, style the four [paths](#paths) of the App (assign certain styles if it is “dark” or “light”).

## Routes

### Page 1: Home Home

This page should show a list in grid form of the dentists returned by the API

The following must be taken into account:

- It must be the home page of the website.
- The grid should show a [Card](/src/Components/Card.jsx) for each dentist returned by the API.
- Each dentist must contain `name` and `username`, along with an `ADD FAV` button (to add to localStorage as a fav) and a `link` that allows navigation to the page _dentist/:id_ based on the id of the dentist. dentist.
- Each Card must integrate the functionality of adding to highlights.

### Page 2: Contact

On this page they must implement a [Form](/src/Components/Form.jsx) (with its relevant validations) that captures the information of the user who wishes to contact the company. The fields will be the following:

- Full name (with length greater than 5)
- Email (with correct email format)
- In case of an error, display the following error message: **Please verify your information again**
- Once "submitted" (it is not sent to any server but we can display the submitted data in the console) the form should display a success message that contains the following format: **Thank you _[username]_, we will contact you when before via email**

### Page 3: Dentist details

A detail of an individual API dentist should be displayed on this page.

The following must be taken into account:

- It should be in the path `/dentist/:id`.
- The page must indicate at least the following information:
  - Character's name
  - Email
  - Phone
  - Website

### Page 4: Featured

On this page the [Cards](/src/Components/Card.jsx) relevant to the featured dentists should be rendered. This information must be stored within the browser's localStorage and be consumed within the page.

- It must be in the `/favs` path.

## Final score

We leave you a video as an example of how your application should work, in the [public](/public/) folder.
