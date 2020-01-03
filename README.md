# Adonis Fullstack Blog

An AdonisJS implementation of a fullstack blog with Bootstrap CSS included.
Can be used as a boilerplate for a personal blog tomorrow.

## Setup
1. Install AdonisJS using `npm i -g @adonisjs/cli`
2. Clone the repository 
3. Set up your database server 
4. Duplicate `.env.example` and rename to `.env` then set your environment variables
5. Run migration with `adonis migration:run`  
6. Run dev server using `nodemon server.js` or `adonis serve --dev`
7. Visit `localhost:3333/posts/`

## Major View URLs
1. Lists blog posts
`localhost:3333/posts/`
2. View post
`localhost:3333/posts/:id`
3. Create post
`localhost:3333/posts/add`
3. Edit post
`localhost:3333/posts/edit/:id`

 ## Built with
 - [Sublime Text](https://www.sublimetext.com) - text editor
 - [AdonisJS](https://www.adonisjs.com) - web framework
