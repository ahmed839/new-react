Ahmed React Notes

//----- #component
// Header
// ---Logo
// ---NavIcon

// Body
// --- Search
// --- Restro Container
// -------Resurent Card
//-----------img
//-----------name of resturent,star rating,cuisins,delevry time
//=
// Footer
// --- Copywrite Link
// --- Address
// --- Contact

https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-push-an-existing-project-to-GitHub

# parcel
- Dev Build
- local Server
- HMR = Hot Module Replacement
- file watching Algorithum - writeen in C++
- Caching - Faster Builds
- Image Optimization
- Minification file also
- Bundling
- Compressing
- Consisten Hashing
- Code Spliting
- Diffrential Bundling - (run smoothly older browser)
- Error Handling (give u better error Sugetion)
- Tree Shaking - remove unused code for youn
- transpiled (this code is converted to the code that browser can uderstand)
-  parcel is transpiled the code 

# JSX
- JSX - (transpiled before it reaches th JS Engine)
- JSX code it is conveted to React.createment withe the help of Babel
- JSX is looklike HTML
- JSX is Not React 
- in the curly braces {you can write javascript code}
- in the JSX we can inject any javascript code in the curly braces{}
- for Example if malicious attack coming from the API so JSX {} it will sanitization your  data whatever is comming and then pass it  (this attack known is cross side scripting)



# Babel
- babel is a package manager
- parcel is install the babel package when i install the parcel
- babel is transpilng a code
- is converting your JSX code to React.createElement end of the day
- babel is such a good library
- Babel is a open source javascript Compiler

# React Component
- Class Based Component - OLD
- Functional Component  - New - just a normal javascript Function wich return some JSX. and returns a bunch of react Element
- whenever you need to component you can be reuse

# Props
- props is just a normal argument to a function,
- passing a prop to a component is just like passing argument to a function


# Key
whenever you have use map and loop u have to write the key.dont use key as an key index its mention in official document . Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

# Export and import in React
There are two types of React one is default export second is named export.
suppose i have to export multiple things i have to use named export 

-Default Export/Import
export default Component;
import Component from "path";

-Named Export/Import
Export const Component
import{Component} from "path";

# React Hooks
- (Normal Javascript utility Functions)
- they are two very important Hooks
- useState() - Superpowerful State variables in react js
- useEffect()