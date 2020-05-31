# Add User model

So far we have created `fruit-app` with CRUD on `fruits`. What we will now do is add another model to our app.

## Code Along
Just like before we will continue to build on our `fruit-app` but this time we will start by adding our user model.

### Create User Model

Let's add `users.js` under `models` folder.

```
const users = [    {        name:'Tony Stark',        username: 'ironman',        password: 'prettyawesome'    },    {        name:'Clark Kent',        username: 'superman',        password: `canfly`    },    {        name:'Bruce Wayne',        username: 'batman',        password: 'hasgadgets'    }]module.exports = users;
```

### Create User Controller

Create `users.js` under `controllers` folder. Import the `users` model.

```
const users = require('../models/users');module.exports = {    }
```

Also, export users in `controllers/index.js`.

```
module.exports = {    fruits: require('./fruits'),    users: require('./users')}
```

### Create User Routes

Create `users.js` under `routes` folder. Import the Express Router.

```
const express = require('express');const router = express.Router();const ctrl = require('../controllers');module.exports = router;
```

Also export users in `routes/index.js`.

```
module.exports = {    fruits: require('./fruits'),    users: require('./users')}
```

### server.js

Finally, import user routes in `server.js`

```
app.use('/users', routes.users);
```

### Views

Create a new folder `users` under `views`. Add all the view templates for user under this folder. Make sure to add the folder name while rendering a template. Like this, `res.render('users/index.ejs')`

## Independence Practice

Now that you have the skeleton ready, you are going to create APIs for the CRUD functionality on User model. But this time we will do things little differently. 

You can view the solution code [here](./solution-code) for reference.

What you have below are screenshots to the functionality that needs to be implemented, in the order that you have to implement it in.

- Start with the Homepage. Add Signup and login links

	![](./images/homepage.png)

- Signup form

	![](./images/signup.png)

- Once User signs up it, render profile page

	![](./images/show-profile.png)

- Login form

	![](./images/login.png)
	
- After login, render profile page

	![](./images/show-profile.png)

- Edit Profile

	![](./images/edit-profile.png)
	
- After updating profile, render profile page

	![](./images/updated-profile.png)
	
- Add link to view fruits index page on profile page

	![](./images/view-fruits.png)

- Fruits Index Page

	![](./images/fruits.png)

- Delete User

	![](./images/delete-user.png)
	
- After User is deleted, render user homepage

	![](./images/homepage.png)
