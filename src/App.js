import logo from './logo.svg';
import './App.css';

function App() {
  return (

<>
<div class="crd">
  <div class="container">
    <div class="header">
      <h1>A Picture of a Sunset</h1>
      <img class="image" src="https://media.cntraveler.com/photos/576834ff90b3537d7c010c05/16:9/w_2560%2Cc_limit/GettyImages-162672165.jpg" alt="A picture"/>
      <div class="subheader">
        <h2>A Picture of a Plane in a Sunset</h2>
      </div>
    </div>
  </div>
  <div class="paragraph">
    <p>This is a picture of a Boeing 787 taking off during sunset.</p>
  </div>
  <div class="buttons">
    <button class="details">Details</button>
  </div>
</div>
<button class="somethingelse">Something Else</button>
<button class="addOne">Add</button>
<button class="remove">Delete One</button>
<button class="colorChanger">Color Changer</button>
  
</>
  );
}

export default App;
