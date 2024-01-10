
import React from 'react'
import {Outlet,Link} from "react-router-dom";
import '../App.css';


function Navigation()
{
return (<div>
<nav>
<div className='n'>
<ul>
<li>
<Link to="/">
    <img src='./images/ad.jpg' id='img1'/>
</Link>
<Link to="/">
    <img src='./images/adnotb.png' id='img2'/>
</Link>
</li>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/Login">login</Link>
</li>
<li>
<Link to="/Sign">Sign Up</Link>
</li>
</ul>
</div>
</nav>
<Outlet />
</div>
)
}
export default Navigation;