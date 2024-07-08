# Add to Cart Modal Application

This project is a ReactJS application that fetches product data from the Fake Store API, allows users to add products to the cart, and displays cart details in a separate page.

## Features

- **Fetch Products:** Fetches a list of products from the Fake Store API.
- **Display Products:** Shows product images, titles, prices, and an "Add to Cart" button.
- **Add to Cart:** Adds products to the cart and displays a remove button if a product is already in the cart.
- **Responsive Layout:** Ensures products are displayed in a responsive grid layout using Tailwind CSS.
- **Navbar:** Displays the current cart items count and a button to open the cart page.
- **Cart Page:** Shows all products in the cart with a "Remove from Cart" button for each item.
- **State Management:** Manages state to ensure the cart updates correctly across components.

## Technologies Used

- ReactJS
- Tailwind CSS
- Fake Store API

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.

   ```
   git clone https://github.com/rohith-guvi/add-to-cart-router.git
   cd add-to-cart-router
   ```

2. Install dependencies.

   ```
   npm install
   ```

3. Start the development server.

   ```
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Usage

- Browse through the list of products.
- Click "Add to Cart" to add a product to your cart.
- View your current cart items count in the navbar.
- Click the cart button to view all items in your cart.
- Remove items from the cart using the "Remove from Cart" button in the cart page.
