import React from "react";
import useTitle from "../../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="lg:mx-8 md:mx-4 mx-2 flex flex-col gap-5">
      <h2 className="lg:mt-5 md:mt-3  mt-2">Blog</h2>
      <div className="flex flex-col items-center gap-5 mb-5">
        {/* question-1 */}
        <div className="lg:w-10/12">
          <div
            tabIndex={0}
            className="collapse border border-primary bg-accent rounded-box"
          >
            <div className="collapse-title text-xl text-primary font-semibold font-heading">
              What are the different ways to manage a state in a React
              application?
            </div>
            <div className="collapse-content font-normal font-text">
              <p>
                There are many ways to manage state in a react app. Some of them
                has been stated below.
                <>
                  <li> 1. url.</li>
                  <li> 2. web storage. </li>
                  <li> 3. Local State.</li>
                  <li> 4. Lifted State</li>
                </>
                .
              </p>
            </div>
          </div>
        </div>
        {/* question-2 */}
        <div className="lg:w-10/12">
          <div
            tabIndex={0}
            className="collapse border border-primary bg-accent rounded-box"
          >
            <div className="collapse-title text-xl text-primary  font-semibold font-heading">
              How does prototypical inheritance work?
            </div>
            <div className="collapse-content font-text">
              <p>
                When we read a property from object, and it’s missing,
                JavaScript automatically takes it from the prototype. In
                programming, this is called “prototypal inheritance”. It has a
                getter and setter function. A programmer can set a setter
                function of that object proto. and whenever that object doesn't
                have that property will find it from the proto property. but
                there is a condition that protypical chain can't go circle it
                throws an error then.
              </p>
            </div>
          </div>
        </div>
        {/* question-3 */}
        <div className="lg:w-10/12">
          <div
            tabIndex={0}
            className="collapse border border-primary bg-accent rounded-box"
          >
            <div className="collapse-title text-xl text-primary  font-semibold font-heading">
              What is a unit test? Why should we write unit tests?
            </div>
            <div className="collapse-content font-text">
              <p>
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages. specifically it
                creates a structure that helps to provide a more bug free app
                creation environment.
              </p>
            </div>
          </div>
        </div>
        {/* question-4 */}
        <div className="lg:w-10/12">
          <div
            tabIndex={0}
            className="collapse border border-primary bg-accent rounded-box"
          >
            <div className="collapse-title text-xl text-primary  font-semibold font-heading">
              React vs. Angular vs. Vue?
            </div>
            <div className="collapse-content font-text">
              <p>
                All of them are stated above is front framework except react.
                before react came in the scene Angular was the most popular
                framework of javascript. Angular isn't begginer friendly so it
                has loosen it's popularity. below here are some short
                description each of them:
              </p>
              <p>
                <b className="text-primary mr-2">React</b> React is considered a
                UI library.A JavaScript library for building user
                interfaces.Facebook developers are behind the development and
                maintenance of this library.React uses React Redux, a project
                maintained by the Redux team, manage all of it's states
              </p>
              <p>
                <b className="text-primary mr-2">Angular</b> Angular is a
                front-end framework with lots of components, services, and
                tools.It is developed and maintained by Google developers.
                Angular uses NgRx, a project for state management inspired by
                Redux and implemented using RxJS.
              </p>
              <p>
                <b className="text-primary mr-2">Vue</b> Vue.js is developed and
                led by Evan You. A progressive JavaScript framework.Vue
                application manage their state with its own library, called
                Vuex.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
