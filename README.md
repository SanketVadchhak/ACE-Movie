# ACE-Movie

[Live Demo](https://sanketvadchhak.github.io/ACE-Movie/)

## Overview

ACE-Movie is a modern, fast, and responsive React application built with Vite. It allows users to search and explore movie information seamlessly. The app leverages React Router for navigation and uses Vite for efficient development and optimized production builds.

## Key Features

### Debounced Search
The search functionality uses **debouncing**, which means the app waits for the user to pause typing before sending a search request. This improves performance by reducing the number of API calls and prevents unnecessary load on the backend.

### User-friendly Navigation
Client-side routing powered by React Router DOM enables instant navigation between different views and movie detail pages without full page reloads.

### Optimized Build with Vite
Vite provides lightning-fast hot module replacement (HMR) during development and generates a highly optimized production build for deployment.

### Responsive Design
The UI adapts well to different screen sizes, providing a pleasant experience on desktop and mobile devices.

## Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm (Node package manager)

### Installation

1. Clone the repository:
git clone https://github.com/SanketVadchhak/ACE-Movie.git
cd ACE-Movie

2. Install dependencies:
npm install

3. Run development server:
npm run dev

4. Open your browser at `http://localhost:5173` to see the app in action.

## Deployment

This project is deployed on GitHub Pages and can be accessed via the link above.

To deploy your own version:

1. Ensure your `vite.config.js` has the `base` set to:
base: '/ACE-Movie/'

2. Run:
npm run deploy
This will create a production build and publish it on GitHub Pages.

## Technologies Used

- React 19
- Vite
- React Router DOM
- GitHub Pages (for deployment)
- ESLint (for linting and code quality)

## Contributing

Contributions are welcome! Feel free to fork the project, make improvements, and submit pull requests.

## License

This project is licensed under the MIT License.

## Author

Sanket Vadchhak  
GitHub: [SanketVadchhak](https://github.com/SanketVadchhak)

---

Thank you for checking out ACE-Movie! Enjoy browsing movies with this React app.
