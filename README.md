# Home Depot simulated user experience #

![Screen shot of reviews section](dist/images/reviewsoverview.png?raw=true)

_About_:
* Summary
  * Myself and a group of three other engineers recreated the Home Depot interface with data scraped from their site for a realistic experience. 
  * Each member created their own component of a product page. My component was the reviews section which empowered the user to quickly view reviews summaries, enabled a community of feedback for products, and encouraged integrity of brands with publicly available customer input.
* Deployment
  * We deployed with Docker/PM2 on AWS Elastic Beanstalk. Our components were pulled together with service-oriented architecture. 

_Stack_:
* Docker/Dockerhub
* AWS Elastic Beanstalk
* MongoDB Atlas
* React 
  * Webpack
  * Babel
* Express (Node.js)
* Axios
* JavaScript 

_Other tools_:
* Trello
* Feature branch work flow (github)
* Google Docs 

_Features_:
* Responsive design for variety of screen sizes
* Stats on summary of all reviews
  * Graph and rating summary dynamically rendered without need to refresh
* Carousel of images users posted in pop-up modal
![Pop-up modal of user review images](dist/images/reviewimages.png?raw=true)
* Form for users to post reviews. Data will persist and new review is rendered to the reviews component.
  * Stars respond on-hover with React Stars
![Reviews form](dist/images/writereview.png?raw=true)

_Getting Started_:
After cloning the repository, it can be rendered on its own by running "npm run start-server" and going to your localhost at port 8080. To render the reviews of a specific product, add /products/100087613 (or any product id) to the URL. The product id's were taken from Home Depot's website to ensure all engineers were able to accurately match which products were rendered.

_Challenges_:
* Responsive CSS styling was mostly pure CSS for my component. After rendered with my teammates, their Bootstrap CSS files clashed with mine, causing some unusual style changes. I had to create very specific classes for my elements to prevent Boostrap overwrites. 
* I wanted to scrap actual data from Home Depot's site which was one of the most time-consuming tasks; however, it added authenticity to our project.
* Our product selection was much smaller than Home Depot's actual inventory, so our initial componentDidMount methods involve fetching _all_ of the data from our deployed databases, which is not the best practice if one scaled up. In the future I would design the front end and back end with more flexibility for the possibility of scaling up. This would save time and headaches in the future as well as improve overall efficiency. 
