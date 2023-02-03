# Recipe Sharing App
This is a back-end developer project to create API for recipe sharing app that handles the recipes owned by users. This tool help users to add, delete, update, and get the list of their recipes. This tool requires Node.js.

# Architecture Diagram Merchant Service
![architectural diagram recipe sharing](https://user-images.githubusercontent.com/116246829/216683447-4db6dbae-4a2d-49d3-95de-f3a31193f934.jpg)

# Entity Relationship Diagram
![erd recipe sharing jpg](https://user-images.githubusercontent.com/116246829/216683547-c819b356-e4e6-4fc0-a23c-e895a78e2aad.jpg)

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

# Deployment
https://super-erin-dress.cyclic.app/
or
https://recipe-sharing.cyclic.app/
