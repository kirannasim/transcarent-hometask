import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Tree from "./tree";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <img
              alt="app-logo"
              className="App-logo"
              src="https://storage.googleapis.com/tc-assets/marketing-site/icons/logo.svg"
            />
            <h2>Welcome! Thanks for interviewing with Transcarent!</h2>
            <p>
              We're going to work with some trees today. Our goal with this
              exercise isn't to "stump" anyone with tricky business, but to give
              candidates a fair and uniform way to express themselves in code on
              a realistic-ish problem.
            </p>
            <p>
              In an hour, we expect everyone will get some of the way through
              this problem, and no one will get all the way through. If invited
              to an on-site interview, you'll pair with us wherever you left
              off, because we'd much rather see how you work on a problem you're
              familiar with and have had time to think about than on some clever
              whiteboard puzzle we spring on you.
            </p>
            <p>At this stage, we care most about:</p>
            <ul>
              <li>
                Interpreting written specifications (following instructions)
              </li>
              <li>
                General familiarity with layout, data modeling, interaction,
                network i/o
              </li>
              <li>Legible code</li>
            </ul>
            <p>When in doubt, do less, better. :)</p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div className="App-instructions">
              <div className="App-step">
                <span role="img" aria-label="paint">
                  🎨
                </span>
                First, layout and style
              </div>
              <div className="App-instructions">
                <ol>
                  <li>
                    Check out the file <code>./src/tree/index.js</code>.
                  </li>
                  <li>
                    Replace the inline <code>&nbsp</code> "styling" with an
                    improved layout by editing the html and css in the{" "}
                    <code>./src/tree/index.js</code>
                    and <code>./tree/index.css</code> files.
                  </li>
                  <li>
                    When the results look the same as the original, please
                    commit changes to main and push to remote.
                  </li>
                  <li>
                    <i>
                      Bonus: How would you prove that your results are exactly
                      the same as the original? [Show your work in a new
                      commit.]
                    </i>
                  </li>
                  <li>
                    <i>
                      Bonus: Can we number every line such that
                      <code>root</code> starts with "1" and <code>ant</code>
                      starts with 1.1 and ... <code>elephant</code> starts with
                      1.2.2.1? [Show your work in a new commit.]
                    </i>
                  </li>
                </ol>
              </div>
              <div className="App-step">
                <span role="img" aria-label="code">
                  🔢
                </span>
                Next, with data
              </div>
              <div className="App-instructions">
                <ol>
                  <li>
                    Check out the (empty) file <code>./src/tree/data.json</code>
                    .
                  </li>
                  <li>
                    Add a JSON object to that file that represents our animal
                    tree. It should capture just the values and relationships
                    currently onscreen after step one.
                  </li>
                  <li>
                    Update <code>./tree/index.js</code> to use your JSON object
                    to draw the animal tree instead of the your (styled) inline
                    text.
                  </li>
                  <li>
                    When the results look exactly the same as the original,
                    please commit changes and push to remote.
                  </li>
                  <li>
                    <i>
                      Bonus: Redraw the tree upside down (reading bottom to top:
                      root, ant, bear...) [Show your work in a new commit.]
                    </i>
                  </li>
                  <li>
                    <i>
                      Bonus: After the first letter of each element, add as many
                      periods as the level the element is on. (Root is 0) E.g.
                      <code>d..og</code>. [Show your work in a new commit.]
                    </i>
                  </li>
                </ol>
              </div>
              <div className="App-step">
                <span role="img" aria-label="stars">
                  ✨
                </span>
                Let's add interactions
              </div>
              <div className="App-instructions">
                <ol>
                  <li>
                    Add a text input field below the last element in each level,
                    at the right indentation level. There should be one text
                    input at level 0 after frog, one at level 1 directly above
                    that, one below elephant at level 3, and another beneath
                    that at level 2.
                  </li>
                  <li>
                    When someone types a new word in the text box and hits
                    enter, add that word to the tree and redraw it.
                  </li>
                  <li>
                    Add an
                    <span role="img" aria-label="cross">
                      {" "}
                      ❌
                    </span>
                    after every element on the tree. When a user clicks the
                    <span role="img" aria-label="cross">
                      {" "}
                      ❌
                    </span>
                    , remove that node.
                  </li>
                  <li>
                    When you can add and remove items from the tree, commit your
                    changes and push to remote.
                  </li>
                  <li>
                    <i>
                      Bonus: Add a toggle to the page that alphabetizes the
                      tree, when toggled one way, or restores the tree to the
                      order items were entered when toggled the other way. [Show
                      your work in a new commit.]
                    </i>
                  </li>
                  <li>
                    <i>
                      Bonus: How would you prove that elements can be added and
                      removed from the tree properly? [Show your work in a new
                      commit.]
                    </i>
                  </li>
                  <li>
                    <i>
                      Bonus: How could you add a new level to an existing
                      element. For example, if I wanted to add a level 1 animal
                      from a level 0 animal. How could I add a level 1 "lion" to
                      ant?
                    </i>
                  </li>
                </ol>
              </div>
              <div className="App-step">
                <span role="img" aria-label="drive">
                  💾
                </span>
                And persistence!
              </div>
              <div className="App-instructions">
                Check out the persistence API at:{" "}
                <a href="https://jsonbin.io/">https://jsonbin.io/</a>
                <ol>
                  <li>
                    Setup: You will need to create an account to obtain the api
                    key. Then, create the Bin where you will Read and Update
                    your JSON payload by referencing the Bin ID. See:{" "}
                    <a href="https://jsonbin.io/api-reference/bins/read">
                      Bins API Reference
                    </a>
                  </li>
                  <li>
                    Save your tree whenever a new element is added or deleted.
                  </li>
                  <li>
                    Commit your changes and push to remote when you can make a
                    changes to the tree that are fetched from the API on page
                    refresh.
                  </li>
                  <li>
                    <i>
                      Bonus: Add a debouncer to only save the tree when it's
                      changed.
                    </i>
                  </li>
                  <li>
                    <i>
                      Bonus: How would you use this API to make a (more or less)
                      collaborative tree editing app? How collaborative could it
                      be? What limits would it have?
                    </i>
                  </li>
                </ol>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <Tree />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
