# World Check-in

## Inspiration
One of our team members wanted to make a website that captured how safe each area is based on COVID-19 cases but we had no reliable (and free) way of gathering real time COVID-19 case data. Another team member suggested create a site that allows users to "check in" to certain zip codes and "check out" when leaving. We wanted a way to create crowd sourced population density for local areas to help people see potential COVID-19 hot spots and avoid them.

## What it does

The web application allows users to input their desired zip code and "check in" to it. This adds one person to said zip codes space in the database. The database houses a vast array of any entered zip code, keeping track of the total people checked-in in real time. Upon checking out of a certain zip code our backend removes a person from the total number of people within a certain zip code. We use cookies for the convenience of the user, allowing them to "set it and forget it" knowing that when they open up the webapp again it will remember if they were checked-in and into what zip code allowing them to easily check out.

## How we built it

We created this application using the MERN stack. Mongo was an easy choice for a quick-to-setup but reliable and scalable database with a document oriented design that couples will with the JSON language of the internet. Express is an excellent choice for getting an API running off the ground in less than 10 lines, no seriously. It's scalability focused features like routing make it easy to compartmentalize our endpoints and make adding new ones equivalent to snapping LEGO pieces together. React was the comfort zone of most members and allowed for quick setup with create-react-app. Node was the clear choice to be the generator that powered the rest of our application. Finally we took advantage of browser cookies to "remember" where users had been checked into and store whether or not they were checked in.

## Challenges we ran into

Few of us had ever worked in a maxed out hackathon group before and at the start managing everyone's tasks and roles proved to be a bit of a challenge. We also struggled at first to get everyone well acquainted with git and how it could be used to facilitate the process of allowing multiple people to work on a singular code base. 

## Accomplishments that we're proud of

We're proud of the efficiency and speed at which we were all able to learn concepts that were initially foreign to us. While it was clear that all of our members had an incredibly good skillset it's impossible for everyone to know everything so getting everyone up to speed on our tech stack along with quickly learning entirely new frameworks was a big feat for us. We worked diligently to make sure we had a competent looking product that we believe extends beyond a simple MVP and were able to work together and mostly strangers effectively to bring all of our visions together.

## What we learned

While it's safe to say all of our teammates are incredibly knowledge, we can also joyously say we each learned something new at this hackthon. Some teammates learned how to couple an Express backend and React frontend together, others interacted with MongoDB for the first time, and all of us had never taken advantage of JavaScript cookies before. It's an amazing feeling knowing that each group member will leave knowing more than when they came in.

## What's next for World Check-In

There are a few things we'd like to expand on. The first is that we'd like to really integrate a high functioning real time heat-map to our site. While our current heat=map is excellent given our time and stack constraints, it will definitely be a focus of future effort. We'd also really like to expand into the mobile app market. While we did our best to make it as seamless as possible for users to check in and check out of zip codes, nothing could be more seamless than no user interaction at all. In our ideal vision a user would download the app, setup a geo-fence around locations like "home" or  "work" and let the app keep track of movement for them. Automatically adding their entrance into certain locations and allowing for a much more accurate heat-map while ensuring that once a user leaves they are properly checked out.

## Steps for downloading

### Frontend

`cd frontend` enter frontend directory

`npm install` installs dependencies

`cd ..` cd back to root

### Backend

`cd backend`

`npm install` installs dependencies

### Running

Use two separate terminal windows

`cd frontend`

`npm run start` starts the frontend on localhost:3000

`cd ..`

`cd backend`

`npm run start` starts the backend on localhost:5000
