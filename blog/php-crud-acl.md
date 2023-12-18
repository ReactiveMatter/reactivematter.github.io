---
title: ACL for PHP-CRUD-API
layout: blog
date: 2023-12-18
topic: coding
---

I recently discovered [PHP-CRUD-API](https://github.com/mevdschee/php-crud-api) and wanted to make a simple CRUD app with it. However, there was one issue. There was no strong access control features provided as default. Though authentication methods via PHP Sessions was provided, but it was in a bare minimum stage. The `users` table required only the username and password column.

What I wanted is to define user groups and then set different access to each group for each table.

Consider a common scenario where one would want the logged in users to enter data via a form. But the data is not visible to them. (This is the default setup in Google Sheets.) Another group (say manager) can edit and delete the data, and do analytics.

For this reason, I created a middleware for PHP-CRUD-API. The middleware requires that each user must be a part of a group. Non-logged in users are by default part of the `all` group. The registered users are by default part of the `user` group.

A user having the usergroup `admin` can add new users using the `/register` API end, and can also change groups of the users.

Then there has to be a table named `acl` with columns `group`, `table`, and `permission`. This table hold the rules of 'Access Control'. A user can be part of multiple groups, and would the maximum rights permissible from each of the group.

The `permission` column hold the permission in an integer. The mapping of this value to permissions is as follows:
1. None: 0
2. Read: 1
3. Create: 2
4. Update: 4
5. Delete: 8

The permission integer is the sum of the each of the permission granted. For example, 15 has all the permissions, and 12 has only Update and Delete permissions. If the user is a part of multiple groups, the rule of ACL which grants access will override the one that prohibits access.

Now, the catch here is the rules of ACL cannot be created by the API. It has to be created manually in the database (I am using [Adminer](https://www.adminer.org/) for this). The reason to not implement this in API is save my labour, and tools like Adminer provides a decent UI to do CRUD directly in database. I did not want to redo the functionality which will be used sparingly. In fact, the assigment and changing of groups can also be done directly in database.

Things which are still remaining to be implemented:
1. Remember me for persistent login
2. Changing group of a user takes effect only in the next login by the user. This needs to be corrected.

As these things do not severly affect the usage, they might not even be implemented.