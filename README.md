# Quick Responsive (QR) Code Generator Tool 

![Screenshot (1)](https://github.com/user-attachments/assets/b033e8f1-257d-458a-9bec-4a1de6352e52)
![Screenshot (2)](https://github.com/user-attachments/assets/290ee7d6-f8bf-4e66-88fc-353426916188)
This is a simple and user-friendly web application built with React that allows you to generate QR codes from any text or URL input.

## Functionality

* **Real-time QR Code Generation:** As you type or paste data into the input field, the QR code updates instantly.
* **Customizable Input:** Supports generating QR codes from various types of data, including URLs, text, email addresses, and phone numbers.
* **Downloadable QR Code:** Provides a button to easily download the generated QR code as a PNG image.
* **Clear and Intuitive Interface:** A clean and straightforward design makes it easy for anyone to generate QR codes quickly.

## Tech Stack

* **React:** A JavaScript library for building user interfaces.
* **qrcode.react:** A React component wrapper for the `qrcode` library, used for generating QR codes on the client-side.
* **Axios:** A promise-based HTTP client for making API requests (used to communicate with the backend for QR code generation).
* **Express:** A minimal and flexible Node.js web application framework (used for the backend API to generate QR codes).
* **qrcode (Node.js library):** A JavaScript library for generating QR codes on the server-side.
* **CORS:** Middleware for Express to enable Cross-Origin Resource Sharing.

## How to Use

1.  **Clone the Repository:**

    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/your-qr-code-generator-react.git](https://github.com/YOUR_GITHUB_USERNAME/your-qr-code-generator-react.git)
    cd your-qr-code-generator-react
    ```

    (Replace `YOUR_GITHUB_USERNAME/your-qr-code-generator-react` with the actual repository URL)

2.  **Navigate to the `client` and `server` directories:**

    This project likely has separate frontend (`client`) and backend (`server`) folders. You'll need to run commands in both.

3.  **Install Backend Dependencies:**

    ```bash
    cd server
    npm install
    ```

4.  **Run the Backend Server:**

    ```bash
    npm start
    ```

    The backend server should start on `http://localhost:3000` (or a similar port).

5.  **Install Frontend Dependencies:**

    Open a new terminal window and navigate to the `client` directory:

    ```bash
    cd client
    npm install
    ```

6.  **Run the Frontend Application:**

    ```bash
    npm start
    ```

    The frontend application should open in your browser, usually on `http://localhost:3001` or `http://localhost:3000` (depending on your setup).

7.  **Using the QR Code Generator:**

    * **Home Page:** Upon opening the application, you will be greeted with a welcome message and a button to "Generate QR Code."
    * **QR Code Generation Page:**
        * Enter the text or URL you want to encode into the "Enter Url Or Link" input field.
        * The QR code will be generated and displayed in real-time below the input.
        * Click the "Download QR Code" button to save the generated QR code as a PNG image to your device.


Author: Suraj Pal | Made with ❤️ 
Hope you'll like it.
