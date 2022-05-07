import React from 'react';
import "./Blogs.css"
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div>
            <h3> Difference between authorization and authentication?</h3>
            <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.</p>
            </div>
          <div>
          <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
          </div>
            <div>
            <h3>What other services does firebase provide other than authentication?</h3>
            <p>There are many services which Firebase provides, Most useful of them are:
                <ul>
                    <li> Cloud Firestore.</li>
                    <li> Cloud Functions.</li>
                    <li>Authentication.</li>
                    <li>Hosting etc</li>
               
                </ul>
                </p> 
            </div>    
        </div>
    );
};

export default Blogs;