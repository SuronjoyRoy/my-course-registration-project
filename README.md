
Project Feature:
---------------

1.Language Selection: Users can browse and select from a list of available languages. When they click the "Select" button on a language card, it gets added to their selection.

2.Credit Hour Tracking: The site keeps track of the total credit hours selected by the user. It displays the remaining credit hours and ensures that users cannot select more than 20 hours.

3.Total Price Calculation: The site can calculate and display the total price of the selected languages. This feature is not fully implemented in the code you provided, but it can be added based on the selected languages' prices.


how you managed the state in your assignment project.
======================================================

1. State Initialization:

You use the useState hook to initialize state variables in your functional components. For example:

allLanguage: This state variable stores an array of all available languages.
selectLanguage: It holds an array of the selected languages.
remaining: This state variable keeps track of the remaining credit hours.
totalHr: It stores the total credit hours selected by the user.

2. Fetching Data and Updating State:

You use the useEffect hook to fetch data from an external source (likely a JSON file in this case) and update the allLanguage state variable when the component mounts.

3. Updating State on User Interaction:

State updates occur in response to user interactions. In the handleSelect function, you manage the state when a user selects a language.
When a language is selected, you check if it's already in the selected list.
If not, you update the totalHr, remaining, and selectLanguage states based on the user's selection.

4. Passing State as Props:

You pass state variables such as selectLanguage, remaining, and totalHr as props to child components, like the Cart component. This allows child components to access and display this state information.