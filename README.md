# CTD-Frontend3-final

Frontend III Final Exam. Dental Clinic.

## Index

- [Approval conditions](#approval-conditions)
- [Aspects that modify the final assessment of the grade](#aspects-that-modify-the-final-assessment-of-the-grade)
- [Features](#features)
- [Development](#development)
- [API](#api)

### Approval conditions

The following conditions are minimum requirements necessary for approval of the final:

- **Comply with all mandatory functionalities**
- Only the libraries detailed in this README can be used. See [Dependencies](docs/desarrollo.md#dependencias)
- Any functionality that is implemented using a library other than those allowed will not be considered carried out.
- It must be developed using Javascript with React.js as a library.
- The Contact page is expected to contain the necessary validation flows (minimum 2 validations) for a correct form submission.
- In cases where it is required to give styles to components, it must be done taking into account the theme of the global context.

### Aspects that modify the final assessment of the grade

The following aspects are extras to the minimum approval requirement that will be taken into account to increase the final grade, as long as their implementation is correct:

**Validations**

- A validation for each field is sufficient, they can be "manual" or with regular expressions. The important thing is the correct handling of errors and submit.

**Featured functionality**

- Extra functionalities will be valued for this feature, such as deleting highlights, error handling when trying to add repeats and total reset of highlights.

**Styles**

- The style of other sections of the App will be assessed (outside the mandatory style of the routes based on the theme)

**Good practices**

- Special attention will be paid to the use of good practices, performance improvements (implementing useMemo) and code reuse

## Features

See [Funcionalidades](docs/funcionalidades.md).

## Development

See [Development](docs/desarrollo.md).

## API

The API to use will be the following: 
`https://jsonplaceholder.typicode.com/users`

For each specific dentist: 
`https://jsonplaceholder.typicode.com/users/:id`

