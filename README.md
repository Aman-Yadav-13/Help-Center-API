# Help Center API

## Overview

The Help Center API provides endpoints to assist users with managing help-related queries, FAQs, and support requests. This API is designed to be integrated with your application to provide support and guidance to users.

## Features

- **FAQ Management**: Retrieve and manage frequently asked questions.
- **Support Requests**: Submit and track support requests.
- **Knowledge Base**: Access articles and resources to help users find answers.
- **Contact Support**: Direct users to contact support for additional help.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Vercel, Render

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Aman-Yadav-13/Help-Center-API.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Help-Center-API
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Configure environment variables:

    Create a `.env` file and add the required environment variables (refer to the example `.env` file).

5. Start the server:

    ```bash
    npm start
    ```

## API Endpoints

### FAQ Management

- **GET** `/api/faqs`: Retrieve the list of FAQs.
- **POST** `/api/faqs`: Add a new FAQ.
- **PUT** `/api/faqs/:id`: Update an existing FAQ.
- **DELETE** `/api/faqs/:id`: Delete an FAQ.

### Support Requests

- **GET** `/api/support-requests`: Retrieve a list of support requests.
- **POST** `/api/support-requests`: Submit a new support request.
- **GET** `/api/support-requests/:id`: Retrieve details of a specific support request.

### Contact Support

- **POST** `/api/contact`: Contact support directly.

## Deployment

- **API**: Deployed fontend on Vercel and backend on Render. 

## Help

If you need assistance or have questions regarding the Help Center API, please refer to the following resources:

- **Issues**: [Report an issue](https://github.com/Aman-Yadav-13/Help-Center-API/issues)
- **Contact Support**: For further help, reach out via email at [aman13092003@gmail.com](mailto:aman13092003@gmail.com).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. Ensure that your changes follow the project's coding standards and include relevant tests.

## Contact

For any questions or suggestions, contact me at [aman13092003@gmail.com](mailto:aman13092003@gmail.com).

## Acknowledgments

- Thanks to the open-source community for providing valuable resources and tools.
