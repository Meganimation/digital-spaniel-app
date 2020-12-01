<h2> Digital Spaniel </h2> 

<small> Version 0.1.0 </small>
<br /><br />
<h3> Installation </h3>
<li> Clone this repo </li>
<li> <code>cd</code> into the main directory</li>
<li> In the terminal, run <code>"npm i && npm start"</code></li>
<br /><br />

<h3> Implementation Timeline </h3>
<br />
<ul> Started with basic architecture</ul>
<ul>Began blocking out each component by seperating the heroes into pages, components into blocks, images to grid, etcetc</ul>
<ul>Added dimensions for permimeter of each page</ul>
<ul>Then added basic positioning, relative to the previous segment</ul>
<ul>Added background colors to make life easier</ul>
<ul>Began blocking out inner-components</ul>
<ul>Created nav bar with right and left float, not yet stickied</ul>
<ul>Added psuedo selectors to links</ul>
<ul>Added a name context hook just because. </ul>
<ul>Began creating cards for multi use, including some embedded css such as padding</ul>
<ul>Started adding media queries</ul>
<ul>XD sheet specifies some hard pixels for largeDesktop, which makes anything below largeDesktop look weird.</ul>
<ul>Decided to match the specs for largeDesktop and then edit them for tablet, so the UX designer doesn't feel ignored</ul>
<ul>Why do I always have issues with getting the typeface right?</ul>
<ul>Incorporated GlobalStyles</ul>
<ul>Added breakpoints and interpolated them, making viewports easier to manage</ul>
<ul>Started passing props</ul>
<ul>Imported images into public and direct, need to learn how to lazy load</ul>
<ul>Perhaps I should build a loading screen?</ul>
<ul>Seperated card component into various other components to be reused</ul>
<ul>Adding in flipcard images but no text yet</ul>
<ul>Added basic carousel with data, buttons needs adding</ul>
<ul>Downloaded and embedded appropriate fonts</ul>
<ul>Started matching font weights</ul>
<ul>Added animated underline for links</ul>
<ul>Added a collage using flexbox</ul>
<ul>Created seperate card components for testemonials with info to pass in as props</ul>
<ul>Animated cards using keyframes and state manipulation</ul>
<ul>Added state functionality to buttons</ul>
<ul>A lot of flip flop css</ul>
<ul>Need to add themes</ul>
<ul>Tried matching buttons to animated cards using the useRef hook but it doesn't seem to like styled components.</ul>
<ul>Created Collage</ul>
<ul>Added margins to various pages</ul>
<ul>Added animations to links, cards, carousel, etc</ul>
<ul>Removed skeleton background colors</ul>
<ul>Replaced them with the appropriate housestyle </ul>
<ul>Added padding</ul>
<ul>Adding state functionalities</ul>
<ul>Used props to determine whether a recyclable component requires padding, size changes, etc.</ul>
<ul>Built a function that makes splittling lines easier, matching the Headline specs.</ul>
<ul>Created data for carousel and exported.</ul>
<ul>Began css for various media queries.</ul>
<ul>Alot of switch cases and ternarys for dynamic CSS.</ul>
<ul>Switched some functional component declarations.</ul>
<ul>Added copyright footer</ul>
<ul>Recycled PageTwo for the final page, including it's embedded NavColumns component.</ul>
<ul>Most components should have data passing in as props now.</ul>
<ul>Created hamburger menu logic</ul>
<ul>Styled hamburger using svg</ul>
<ul>Added opacity and positioning animation for menu</ul>
<ul>Imported react-router</ul>
<ul>Added router and provider.</ul>
<ul>Created individual Navbar for router, matching css in XD.</ul>
<ul>Created routes, allowing for multiple tabs</ul>
<ul>Added secondary test page for router</ul>
<ul>Coded mutable images</ul>
<ul>Added Jquery</ul>
<ul>Created function that detects scrollY specs to determine Navbar positioning</ul>
<ul>Locked ScrollX</ul>
<ul>Reduced wrappers</ul>
<br /><br /><br /><br />

<h3> Problem Solving </h3>
<br />
<ul>Navbar - Was originally unsure how to implement a Hamburger without having to re-do all my code. Solved via media querying opacity and z-index.</ul>
<ul>Heading two-lines - Already knew about using the ::first-line selector to change the first line. But didn't know how to break the string into two lines without having to use JSX. Solved by adding a " // " into where the text is to be broken, and then built an algorithmn to break the string when it comes into contact with the event.</ul>
<ul>Image rescaling - A better solution would be for me to get more familiar working with images and flex. Was unsure of how to create decent, dynamic collage-like bundles of images that don't require individual positioning. Solved by creating columns, rows, and messing about with auto-height properties and %'s.</ul>
<ul> Testemonial cards - Couldn't map the navigation buttons to each card as the useRef hooks wouldn't work on styled components. Also couldn't use html ref's as each card was a cloned component with props being passed in. Solved using data id's, state with the data type of an array, and a lot of terniary's and boolean-checks. </ul>
<ul> Navbar - completely and utterly unsure of how to change the fixed logic without jQuery. Solved using jQuery. </ul>
<br /><br /><br /><br />
<h3>Software used for debugging </u3>
<br />
<h5>For CSS </h5><p>Using the element inspector in Dev tools to select the section and then live-edit through devtools</p>
<h5> For Javascript </h5>Debugger, React Dev Tools Add-on, a lot of Console.logging
<h5> For HTML/JSX </h5><p>Just a good formatter which tends to outline any immediate syntax errors (Prettier for VS Code)</p>

<br /><br /><br /><br />

<h3> Improvements / Things to add </h3>
<br />
<ul>Themes (Possibly through useContext, but then wouldn't all the CSS have to be post-loaded?)</ul>
<ul>Lazy Loading (Was thinking of simply importing the LQ images first, then setting a timeout off 500 or so, and then patching with HQ versions)</ul>
<ul>Font-family (Genuinley get confused at how fonts work sometimes)</ul>
<ul>Reduction of verbose CSS (Padding 10 0 10 0px might be quicker to write, but seperating them is easier to read and edit during design phase)</ul>
<ul>Better naming conventions</ul>
<ul>More concise parent-child CSS values</ul>
<ul>Consistent syntax (I have a habit of using both double and single quotes which can look quite messy sometimes) </ul>
<ul>Grids </ul>
<ul>Finish Carousel </ul>
<ul>Finish Flipcards </ul>
<ul>Better implementation of the sticky-nav (How can it be done without jQuery?) </ul>
<ul>Don't use 'rcfe' snippet for every component. </ul>
<ul>Saving all the string data in one file instead of writing them in when passing props (possibly a good way to implement useContext) </ul>