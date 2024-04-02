# Currency Converter App

This is a simple currency converter application built using React.js. It allows users to convert between different currencies using real-time exchange rates fetched from an API.

Live Demo: [Currency Converter Demo](https://glittering-sunshine-ab4d4d.netlify.app/)

## Features

- Convert from one currency to another
- Real-time exchange rates
- User-friendly interface

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/github18122021/react_currency_converter.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react_currency_converter
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Replace the placeholder `YOUR_RAPIDAPI_KEY` in `App.js` with your own RapidAPI key.

5. Start the development server on port 5173:

   ```bash
   PORT=5173 npm start
   # or
   PORT=5173 yarn start
   ```

6. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the application.

## How to Use

1. Enter the amount you want to convert in either the "From" or "To" input field.
2. Select the currency you want to convert from in the dropdown menu.
3. Select the currency you want to convert to in the dropdown menu.
4. Click the "Convert" button.
5. The converted amount will be displayed in the corresponding input field.

## Dependencies

- React.js: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making requests to APIs.

## APIs Used

- [RapidAPI - Currency Converter Pro API](https://rapidapi.com/Dezento/api/currency-converter-pro1/)
  - Used to fetch currency rates and currency list.



