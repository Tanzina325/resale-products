import React from 'react';


const Blogs = () => {
  
    return (
        <div className='lg:grid grid-cols-2 gap-6 my-10 mx-10'>
            <div tabIndex={0} className="mb-5 lg:my-0 bg-neutral text-neutral-content  collapse collapse-open border-2    rounded-box"> 
  <div className="collapse-title text-xl font-medium">
  What are the different ways to manage a state in a React application?
  </div>
  <div className="collapse-content"> 
    <p>
        <li>Local state is most often managed in React using the useState hook.</li>
        <li>Global state is data we manage across multiple components.</li> 
        <li>Data that comes from an external server that must be integrated with our UI state.</li>
        <li>Data that exists on our URLs, including the pathname and query parameters.</li>
    </p>
  </div>
</div>
<div tabIndex={0} className=" border-2 bg-neutral text-neutral-content collapse mb-5 lg:my-0 collapse-open rounded-box"> 
  <div className="collapse-title text-xl font-medium">
  How does prototypical inheritance work?
  </div>
  <div className="collapse-content"> 
    <p>JWhen it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype . That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
  </p>
  </div>
</div>
<div tabIndex={0} className=" mb-5 lg:my-0 collapse collapse-open border-2 bg-neutral text-neutral-content rounded-box"> 
  <div className="collapse-title text-xl font-medium">
  What is a unit test? Why should we write unit tests?
  </div>
  <div className="collapse-content"> 
    <p>Unit tests are simple scripts that check whether a given unit—class, function, module, etc.—is working as expected. They are meant to be rather simple, to cover the happy path of the code plus a few edge cases.  </p>
    <p> We should write unit tests for many reasons.they are given below:</p>
    <li>Speed up development testing</li>
    <li>Discover edge cases</li>
    <li>Ensure that your code is composed of units</li>
    <li>Interactive documentation</li>
  </div>
</div>
<div tabIndex={0} className="  border-2 bg-neutral text-neutral-content mb-5 lg:my-0 collapse collapse-open   rounded-box"> 
  <div className="collapse-title text-xl font-medium">
  React vs. Angular vs. Vue?
  </div>
  <div className="collapse-content"> 
    <p><li>Introduced by Facebook, React is an open source JavaScript library for building interactive, stateful, and reusable user interfaces (UI). It is good for rendering complex UI with high performances. It also works with the basic fundamental of virtual Document Object Model (DOM) to offer a highly stable web application.</li>
    <li>Angular is an open source, frontend web app framework by Google that has a Model-View-Controller (MVC) architecture and makes development, maintenance, and testing easier for developers. It's great for building highly active and interactive web applications, but it is most popular for Single page applications.</li>
    <li>Vue is a progressive JavaScript framework for building user interfaces. Vue is designed from the ground up to be incrementally adoptable. It comes with various optional tools for building user interfaces. Vue has a high capability of backing sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</li></p>
  </div>
</div>
        </div>
    );
};

export default Blogs;