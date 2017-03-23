## Website Performance Optimization nanodegree project

Here is the link to the website whose source code is in this repository. [Link to the Website](https://nktkarnany.github.io/frontend-nanodegree-mobile-portfolio/).

Link to the google page speed insights for the index.html page - [Check Out Page Speed Score](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fnktkarnany.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=mobile)

Link to the pizza.html with 60 FPS speed when scrolling - [Scroll To Feel It](https://nktkarnany.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html)

To get started, check out the repository and inspect the code.

### Getting started

#### Steps to run this application

1. To Run the application locally open _index.html_ in your browser.

#### Steps to build this application

1. First clone or download this repository into your local machine.
2. This website uses gulp task runner to minify css, js and images for optimization.
3. You must have got a _package.json_ file with the source code.
4. Run `npm install` in cmd to download and install node modules.
5. After successfull installation of npm you can start making changes in the css and js files of your src folder.
6. Any change to reflect in your website you'll have to run `gulp` from the cmd.
7. This ensures that all the css and js files are minified and copied into the dist folder to which the website is refering to.

#### Part 1: Optimized PageSpeed Insights score for index.html

1. Check out the repository.
2. This repository is hosted by github pages.
3. Link to this website is given above.
4. Link to the page speed is also given as well.
5. List of all changes from top to bottom of the index.html page.
6. Media queries for the css file(print.css) which was render blocking the page load.
7. Inlining all the css styles from the _style.css_ file so avoid one more network call to fetch the data.
8. Using optimized images everywhere. Images were also minified using gulp.
9. All the javascripts are moved just before closing of the `body` tag because no point downloading them before dom.
10. All javascripts are made async to avoid render blocking because none of them are needed early.

#### Part 2: Optimized Frames per Second in pizza.html

1. If we look at at line 493. function `updatePositions()`, we can see that - 
* I am fetching the list of mover elements by class.
* Calculating the scroll top outside loop.
* Creating the phases array using Math.sin method outside the layout paint loop helps prevent FSL.
* In the loop painting the layout I am using the translateX property which enables hardware acceleration.

2. In line 527. number of pizzas are reduced to 30 because 200 pizzas are not visible on the screen.

3. In _style.css_ files for the mover class will-change property is added to generate the elements in a seperate layer. This avoids painting overhead in the main layer.

4. For decreasing time to resize pizza to 0ms - 
* Line 439. function `changePizzaSizes(size)`, I am not calculating the absolute width for the given size of the element.
* Line 425. function `determineDx(size)`, has a switch statement which gives the width(in percent) according to the size passed.
* Line 442. saving this percent width in the `newwidth` variable.
* Line 444. Again getting the list of elements and saving them in the `pizzas` variable.
* Then looping each element in `pizzas` variable and updating the `style.width` property with the `newwidth`.
