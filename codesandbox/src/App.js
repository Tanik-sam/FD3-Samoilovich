import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main.js";

class App extends React.PureComponent {
  render() {
    return <Main className="Main" />;
  }
}

export default App;

/*We start with an empty page with text “Loading”:
on page load:
-if it is the first load and LocalStorage is empty - we request guests and their diets and save this in LocalStorage
-if we already opened the app - get the list of guests from LocalStorage
--display guests list when guests and diets are loaded (from API or LocalStorage)
--make clickable guests who ate pizza - vegans should be displayed with green
--when clicking the guest name: 
--hide the guest list
-if the feedback for the guest was not filled - show a form with necessary fields and the 5-star rating (3 stars is the default rating)
-otherwise (if the feedback for the guest was filled), show the page with filled information and DELETE button (show only the information, no forms should be visible here)
-show empty feedback form for a current guest if DELETE button was clicked
-show an error message if a phone number is wrong (the phone field should be 3-10 chars length and accept numbers, +, () and a space " " char)
by default show the CANCEL button
-show SAVE button when information is filled and valid
-CANCEL button closes the form and shows the guests list
-SAVE button stores feedback to LocalStorage and shows guests list 
-DELETE button removes feedback from LocalStorage and shows guests list (and removes a tick mark from the guest, of course)
-mark guests with saved feedback using  (use emoji "tick" symbol)
-add the "Clear app" button which removes all cached data (guests list, guests feedback). When clicking on it the app should be refreshed and the new guests' list is requested (step 1a)
*/
