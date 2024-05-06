# MR Frontend Developer Technical Test

## Description
This project involves creating a simple product details section for a clothing site with cart functionality to store a customer’s product selections. The project comprises a client-side app developed using JavaScript, HTML, and CSS.

## Requirements
1. **Web Page Design:** A web page is provided based on the design prototype. The aim is to meet the basic design details without necessarily being "pixel-perfect".
2. **Responsive Design:** The site must fit different screen sizes, including large desktop and mobile designs.
3. **Add to Cart Functionality:** Customers can add a product with selected options (size) to a cart.
4. **Initial State:** When the page is first loaded, there is no size selected.
5. **Error Handling:** Clicking "Add to Cart" without selecting a size displays an error message.
6. **Cart Population:** Successfully adding a product to the cart will populate this sized product in the mini cart section.
7. **Unique Product Rows:** Only one row for each product size selected within the mini cart. Quantities will be updated as the product is added multiple times.
8. **Button Hover Effect:** The "Add to Cart" button changes color on hover with a 0.2-second transition to animate this.
9. **Mini Cart Display:** Customers can view a mini-cart of their selections.
10. **Product Information:** Product information will be consumed from the Product API.

## Design Prototype
- [Desktop Prototype](https://invis.io/WEAP5MIGX)
- [Mobile Prototype](https://invis.io/ASAP5RSBD)

## Color Scheme
- **Header Background:** #F6F6F7
- **Font Colors:** #222222 and #888888
- **Required Star:** #C90000
- **Border Light Grey:** #CCCCCC
- **Border Dark Grey:** #222222

## Product Image
- [Classic Tee Image](https://drive.google.com/file/d/0B8KYnbdnrRGXSXVoMzdqRWhCTXc/view?resourcekey=0-isJkYanmVCSmONHLETXDwg)

## Assessment Criteria
1. Completion of the requirements
2. Code design and quality
3. Framework/library choices
4. Edge case scenario handling
5. Bonus points for automated tests and deploying the app

## Submission
- Create a GitHub repository for the test
- Commit all files, including source files for any compiled code (e.g., CSS preprocessor files)
- Send the repository link to warren@moustacherepublic.com and william@moustacherepublic.com

---

# Documentation of assessment, What I have done. 

# HTML Structure:
- I've structured the HTML file according to the provided design prototype, including elements such as the header, product details section, and mini cart.
- Implemented the necessary classes and IDs to style and manipulate elements via CSS and JavaScript.

# CSS Styling:
- Utilized CSS to style the elements based on the provided color scheme and design specifications.
- Ensured responsiveness by using media queries to adjust the layout for different screen sizes.
- Implemented hover effects for the "Add to Cart" button as per the requirement.

# JavaScript Functionality:
- Implemented JavaScript functions to handle the core functionalities of the app, such as adding products to the cart and displaying error messages.
- Dynamically populated product details, including name and price, from a mock Product API.
- Managed cart functionality, including updating the mini cart with selected product details and quantities.
- Ensured error handling by displaying an error message when the user tries to add a product without selecting a size.

# Responsive Design:
- Made the webpage responsive using CSS media queries to adapt to different screen sizes, ensuring a seamless user experience across devices.

# Product API Integration:
- Fetched product information from the provided Product API and dynamically populated the product details section.

# Code Quality:
- Maintained clean and well-structured code to enhance readability and maintainability.
- Utilized best practices for naming conventions, code organization, and documentation.

# Testing and Edge Case Handling:
- Considered edge cases, such as adding the same product size multiple times to the cart, and ensured proper handling to meet the requirements.

# Submission Readiness:
- Created a GitHub repository containing all the necessary files, including HTML, CSS, JavaScript, and any additional resources.
- Prepared the submission by following the provided guidelines, including committing all code files and sending the repository link to the specified email addresses.
