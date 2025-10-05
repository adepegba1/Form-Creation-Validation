# Deep Dive into JavaScript

## 0. Form Creation and Validation

### Repo Requirements :

- Create a New Repo in Github
- Repo Name : Form-Creation-Validation

### Task Requirements

#### Setup and Initial Code Structure

##### Start with DOMContentLoaded Event:

- Wrap your entire script in a DOMContentLoaded event listener. This ensures your JavaScript runs after the entire HTML document has been loaded.

##### Form Selection:

- Use document.getElementById to select the form with id="registration-form". Store this reference in a constant named form.

##### Feedback Division Selection:

- Similarly, select the division where feedback will be displayed (id="form-feedback") and store it in a constant named feedbackDiv.

#### Form Submission and Event Prevention

##### Form Submission Event Listener:

- Add an event listener to form for the ‘submit’ event. Use an anonymous function to handle the event.
- Inside this function, call event.preventDefault() to prevent the form from submitting to the server. This is crucial for client-side validation.

#### Input Retrieval and Trimming

##### Retrieve User Inputs:

- Use document.getElementById to select each input field by its respective ID: username, email, and password.
- For each, retrieve the .value property and apply the .trim() method to remove any leading or trailing whitespace. Store these trimmed values in constants named after each input field.

#### Validation Logic

##### Initialize Validation Variables:

- Declare a variable named isValid and set it to true. This will track the overall validation status.
- Declare an array named messages to store validation error messages.

##### Username Validation:

- Check if username.length is less than 3. If so, set isValid to false and add a specific error message to messages.

##### Email Validation:

- Check if email includes both ‘@’ and ‘.’ characters. If not, set isValid to false and append a corresponding error message to messages.

##### Password Validation:

- Ensure password.length is at least 8. If it falls short, update isValid to false and add an appropriate error message to messages.

#### Displaying Feedback

##### Feedback Display Logic:

- Make feedbackDiv visible by setting its style.display to "block".
- If isValid remains true, set the textContent of feedbackDiv to "Registration successful!" and its style.color to "#28a745".
- If isValid is false, join messages with <br> to form a single string, and assign this to the innerHTML of feedbackDiv. Set feedbackDiv.style.color to "#dc3545".

## 3. Fetching Data from an API and Displaying It

Implement JavaScript functionality to asynchronously fetch user data from a public API (https://jsonplaceholder.typicode.com/users) and display the names of the users in a list on the webpage.

### Detailed Instructions for JavaScript Task

#### Overview

You will write JavaScript code to asynchronously fetch user data from a public API and display each user’s name on a web page. Your code will also handle potential errors during the fetch operation.

#### JavaScript Code Writing Steps

##### Initialize the Async Function:

- Begin by defining an asynchronous function named fetchUserData. This function will contain all your code for fetching and displaying the data.

##### Define the API URL:

- Inside fetchUserData, declare a constant apiUrl and assign it the string value 'https://jsonplaceholder.typicode.com/users'. This URL points to the API endpoint from which you’ll fetch user data.

##### Select the Data Container Element:

- Select the HTML element where the API data will be displayed by using document.getElementById. Look for an element with the ID 'api-data' and store this reference in a constant named dataContainer.

##### Fetch Data Using try-catch:

- Employ a try-catch block to handle the fetching process and potential errors.
- In the try block, use the await keyword with the fetch function to asynchronously get data from apiUrl. Store the response in a constant named response.
- Then, convert the response to JSON using await response.json() and store this data in a constant named users.

##### Clear the Loading Message:

- Before appending new content to dataContainer, clear its existing content (the “Loading user data…” message) by setting dataContainer.innerHTML = ''.

##### Create and Append User List:

- Create a <ul> element and store it in a constant named userList.
- Loop through the users array with forEach, and for each user, do the following:
  - Create a <li> element.
  - Set the text content of the <li> to the user’s name.
  - Append the <li> to userList.
- After the loop, append userList to dataContainer.

##### Error Handling:

- In the catch block, clear the existing content of dataContainer (similar to step 5) and set its text content to 'Failed to load user data.', indicating an error occurred during data fetching.

##### Invoke fetchUserData on DOMContentLoaded:

- Outside fetchUserData, add an event listener to document for the DOMContentLoaded event. Set the callback function to invoke fetchUserData. This ensures your data fetching logic runs once the HTML document has fully loaded.

## Live Preview

- <a href="https://adepegba1.github.io/Form-Creation-Validation/index.html">Form Creation and Validation</a>
- <a href="https://adepegba1.github.io/Form-Creation-Validation/fetch-data.html">Fetching Data from an API and Displaying It</a>
