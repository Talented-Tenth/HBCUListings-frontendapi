import logo from './BannerTTh.JPG';
import './App.css';


function Landing() {
  return (
    <div className="App">
      <div class="card">
            <div class="sides left-side">
                <h1 class="name">HBCU</h1>
                <h3 class="School">HOWARD - </h3>
            </div>
               
            <div class="sides right-side">
                <h1 class="name">TOUR</h1>
                <h3 class="School"> UNIVERSITY</h3>
            </div> 
            <div class="back-side">
              <p class="biography"> "Class of 2024 Howard University Campus Tour"</p>
            </div>
              <p>
                Sign Up to stay informed about events happening at your favorite HBCUs!
              </p>
              <a
              className="App-link"
              href='/signup'>
            Sign Up
            </a>
      </div>
    </div>
 
 
  );
}

export default Landing;