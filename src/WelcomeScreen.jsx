import React from "react";
import man from "./man.png";
import boxes from "./boxes.png";

import './WelcomeScreen.css';

function WelcomeScreen(props) {
return props.showWelcomeScreen ?
(
<div>
<div className="WelcomeScreen"   id="background-image">
<div className="image">
    <img src={boxes} alt="background animation"></img>
</div>
<h1 className="h1">Welcome to the Meet app</h1>
<h4 className="h4">
Log in to see upcoming events around the world for
full-stack
developers
</h4>
<div className="button_cont" align="center">
<div class="google-btn">
<div class="google-icon-wrapper">
<img
class="google-icon"
src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
alt="Google sign-in"
/>
</div>
<button onClick={() => { props.getAccessToken() }}
rel="nofollow noopener"
class="btn-text"
>
<b>Sign in with google</b>
</button>
{/* Page 1 */}
</div>
</div>
<a
href="https://tinabhowal.github.io/meet/privacy.html"
rel="nofollow noopener"
>
Privacy policy
</a>
</div>
<div class="man">
  <img class="slide-in-man fixed" src={man} alt="background animation"></img>
</div>
</div>
)
: null
}
export default WelcomeScreen;

