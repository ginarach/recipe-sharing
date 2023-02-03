# Recipe Sharing App
This is a back-end developer project to create API for recipe sharing app that handles the recipes owned by users. This tool help users to add, delete, update, and get the list of their recipes. This tool requires Node.js.

# Architecture Diagram Merchant Service
![ARC MERCHANT SERVICE](https://user-images.githubusercontent.com/116246829/215279356-7fe05391-b3c6-4e66-9acd-8f715c493258.jpg)

# Entity Relationship Diagram
![ERD MERCHANT SERVICE](https://user-images.githubusercontent.com/116246829/215279358-20ead639-bd2b-425c-ba84-c65a92c9d2c5.jpg)

# List of API

/API/Login
```
[POST] /login
====== Process where users can login to the service by using email
```

/API/User
```
[GET] /user
===== Get list of user

[GET] /user/:id
===== Get one user by ID

[PUT] /user/:id
===== Update user

[POST] /user/:id
===== Create user

[DEL] /user/:id
===== Delete user's account
```

/API/Recipe
```
[GET] /recipe
===== Get list of recipes

[GET] /user/:user_id/recipe/:id
===== Get recipe from the user by ID

[POST] /user/:user_id/recipe
====== Create recipe

[PUT] /user/:user_id/recipe/:id
===== Update recipe by ID

[DEL] /user/:user_id/recipe/:id
===== Delete recipe
