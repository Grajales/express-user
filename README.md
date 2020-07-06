# Add User model

So far we have created `fruit-app` with CRUD on `fruits`. What we will now do is add another model to our app.

## Code Along
Just like before we will continue to build on our `fruit-app` but this time we will start by adding our user model.

### Create User Model

Let's add `users.js` under `models` folder.

```js
const users = [
    {
        name:'Tony Stark',
        username: 'ironman',
        password: 'prettyawesome'
    },
    {
        name:'Clark Kent',
        username: 'superman',
        password: `canfly`
    },
    {
        name:'Bruce Wayne',
        username: 'batman',
        password: 'hasgadgets'
    }
]

module.exports = users;
```

### Create Users Controller

Create `usersController.js` under `controllers` folder. Import the `users` model.

```js
const express = require("express");
const router = express.Router();

const users = require("../models/users");

module.exports = router;
```

Also, export users in `controllers/index.js`.



### server.js

Finally, import `usersController.js` in `server.js`

```js
app.use("/users", require("./controllers/usersController.js"));
```

### Views

Create a new folder `users` under `views`. Add all the view templates for user under this folder. Make sure to add the folder name while rendering a template. Like this, `res.render('users/index.ejs')`

## Independence Practice

Now that you have the skeleton ready, you are going to create APIs for the CRUD functionality on User model. But this time we will do things little differently. 

You can view the solution code [here](https://git.generalassemb.ly/jdr-0622/express-user-model/tree/master/marc-solution/fruit-app) for reference. Also, you can click on the link for each step to view the changes for that specific commit.

What you have below are screenshots to the functionality that needs to be implemented, in the order that you have to implement it in.

**Commit after each step**

1. Start with the Homepage. [Add Signup and login links](https://git.generalassemb.ly/cfg-seir-1/express-user-model/commit/efd8d3f56d95b92ced24e15c1694810c04e4bd47)

	![](./images/homepage.png)
	

1. [Signup form](https://git.generalassemb.ly/cfg-seir-1/express-user-model/commit/1d94a85134738f14fa5cd61b5af629cffe5c4a5f)

	![](./images/signup.png)
	

1. Once User signs up, redirect to the profile page. [This step will require a POST and a GET route.]

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
