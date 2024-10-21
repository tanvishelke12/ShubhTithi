import React from 'react'
import './About.css'
import img1 from '../assets/Shreya2.jpg'
import img2 from '../assets/t2.jpg'
import img3 from '../assets/s1.jpg'
import img4 from '../assets/Shreya12.jpg'
import img5 from '../assets/t1.jpg'
import img6 from '../assets/s2.jpg'
import { Footer } from '../Footer/Footer'

export const About = () => {
  return (
    <div>

<div id="main1">

</div>

  <div id="main2">
    <div id="main2-h">
    <h1>Our Team</h1>
    </div>
    
   
    <div class="container1">
     
      <div class="box">
        <div class="imgBx">
          <img src={img1}/>
        </div>
          <div class="content">
           
            <a href="https://www.linkedin.com/in/shreya-kesarwani-852a88260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="37px" height="37px" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg></a>
            <h2>Shreya Kesarwani</h2>
            
          </div>
      </div>
  
      <div class="box">
        <div class="imgBx">
          <img src={img2}/>
        </div>
          <div class="content">
           
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="37px" height="37px" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg></a>
            <h2>Tanvi Shelke</h2>
            
          </div>
      </div>
  
      <div class="box">
        <div class="imgBx">
          <img src={img3}/>
        </div>
          <div class="content">
            <a href="https://www.linkedin.com/in/shivsharan-giram-2a0a4a245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="37px" height="37px" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg></a>
            <a href="https://github.com/Shivsharan16" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg></a>
            <h2>Shivshran Giram</h2>
            
          </div>
  
      </div>
    </div>
  </div>

<div class="ab1">
  <h1>Shreya Kesarwani</h1>
  <p> 
     <img src={img4}/>
      ullam iLaborum culpa ducimus at corrupti na em om, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti na adipisicing elit. Nam autem officia harum voluptatum, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti na adipisicing elit. Nam autem officia harum voluptatum, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti natus?
 </p>
</div>

<div class="ab2">
  <h1>Tanvi Shelke</h1>
  <p> 
    <img src={img5}/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem officia harum voluptatum, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti na adipisicing elit. Nam autem officia harum voluptatum, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti na adipisicing elit. Nam autem officia harum voluptatum, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti na adipisicing elit. Nam autem officia harum voluptatum, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti natus?
</p>
</div>

<div class="ab3">
  <h1>Shivshran Giram</h1>
  <p>   <img src={img6}/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem officia harum voluptatum, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti na adipisicing elit. Nam autem officia harum voluptatum, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti na adipisicing elit. Nam autem officia harum voluptatum, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti na adipisicing elit. Nam autem officia harum voluptatum, ullam ipsa, reiciendis minus blanditiis, beatae voluptas accusamus neque sunt veniam. Laborum culpa ducimus at corrupti natus?
</p>
</div>

    </div>
  )
}
