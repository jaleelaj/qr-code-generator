# QR Code Generator

This repository contains a simple web application that allows users to generate QR codes for URLs or text input.

## How to Use

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in your web browser.

3. Enter the URL or text you want to encode into a QR code in the input field.

4. Press the "Generate" button or press Enter to generate the QR code.

5. The QR code will be displayed in the designated area on the page.

## Technologies Used

- HTML: The structure of the web page is defined using HTML.
- CSS: The appearance and styling of the elements are defined using CSS.
- JavaScript: The functionality for generating the QR code is implemented using JavaScript.
- QRCode.js: The library "QRCode.js" is used to generate QR codes from the input text.

## Web Page Structure

The `index.html` file consists of the following sections:

1. `head`: Contains meta information, page title, external fonts, and the link to the CSS and JavaScript files.

2. `body`: Contains the main content of the web page.

3. `.header`: Represents the header section of the page.

4. `.box`: A container that holds the main content of the QR code generator.

5. `h1`: Displays the title "QR Code Generator."

6. `hr`: Horizontal rule for visual separation.

7. `input`: An input field where users can enter a URL or text.

8. `.qrcode`: The area where the generated QR code will be displayed.

9. `.sqrcode`: A secondary area for displaying a static QR code with the default text.

10. `button`: The "Generate" button to trigger the QR code generation.

## Styling

The appearance of the web page is defined in the `style.css` file. It applies a simple and responsive design using the "Ubuntu" font and a linear gradient background. The elements are centered, and there is a box shadow for visual effect.

## QR Code Generation

The JavaScript code inside the `app.js` file handles the QR code generation functionality. It utilizes the "QRCode.js" library to generate QR codes based on the user's input. The `generateQr()` function is called when the user enters text in the input field or clicks the "Generate" button. The generated QR code is displayed in the designated area on the page.

Feel free to use, modify, and enhance this QR Code Generator web application for your needs!
