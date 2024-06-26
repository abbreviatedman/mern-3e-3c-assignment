# MERN 3C Assignment

Your goal is to take this app, which already has a functioning API, and give it some logic and UI code so it has a functioning _interface_ as well.

### Part 0: Lay Of The Land

Note what this project already has:

- a `.env` file with a different name (`dotenv`  )with someone else's mongoDB URI. You can view this database in Compass using the connection string. **You will have to change it to .env from its current filename**.
- All the Express and MongoDB setup code you would need.
- Two models, one for `games` and one for `users`. Read through them. Note that only the User has a reference to which games they like—the Game model has no field for this, nor, usually, do we need that kind of two-way relationship.
- Many api routes at `/api`. Hit _each one_ in Postman to confirm that they work and that you understand how they work.

Now to what _you_ need to add.

### Part 1: Routes

- Add a route for `/` to the `viewRouter` in `index.js`
- add routes in the `viewRouter` for the following routes. The functions themselves should be in the controllers file.
  - `/`, which should be handled by a function called `getHomePage`
  - `/users`, which should be handled by a function called `getUsersPage`
  - `/users/:id`, which should be handled by a function called `getOneUserPage`
  - `/games`, which should be handled by a function called `getGamesPage`
  - `/games/:id`, which should be handled by a function called `getOneGamePage`

### Part 2: Controller Functions

- add the functions to the `viewsController` file.
  - `getHomePage` just needs to render the EJS file "home" using `res.render`.
  - `getGamesPage` needs to render the EJS file "games", and also needs to include all the games in the database. You can use mongoose find operations to get them, and then use the second argument to `res.render` to send the games in an object.
  - `getUsersPage` is the same, but for users instead games.
  - `getOneGamePage` will need to access one particular game, whose ID should be passed to you on the request's dynamic parameter (`req.params`). It will also need to find the users who like the game—you can find which users have the game on their `likedGames` property. This is a little tricky, and you may need to do some internet sleuthing to find the right way to query that with Mongoose. In the end, you will have to `res.render` to the "oneGame" EJS file, and send `game` and `users` properties.
  - `getOneUserPage` is very similar, but the query is a bit tougher, since you're finding all the games that are in the user's `likedGames` property. Research the `$in` keyword in MongoDB. In the end, you will have to `res.render` to the "oneUser" EJS file, and send `user` and `games` properties.

### Part 3: Views

- In `home.ejs`, make the "here is a" text lines into anchor tag links to `/users` and `/games`.
- In `users.ejs`, add some EJS code to display all the users. Use either a `for` loop or a `forEach` to loop through the `users` (who will be sent to you when the `getUsersPage` renders the page with the `users` property in its `res.render` object). For each `user`, print out their username and make that username an anchor tag link to `/users/:id`, where `:id` is the actual ID for that user object.
- Do the same thing for `games.ejs`, but with games instead of users.
- Create a view for one user in `oneUser.ejs`. Use EJS and the `res.render`-ed `user` object to put the user's username in the `h1` heading. Loop through the games provided to you in the `games` property (when you `res.render`-ed it to this file) and put each's `title` in the list. Each title should also be an anchor tag link to `/games/:id`.
- Do the same thing for `oneGame.ejs`.

### Part 4: Testing

Test the user interface out thoroughly, making sure that each user shows the games they like and each game shows who likes it. Check this information against what you can see in Compass.
