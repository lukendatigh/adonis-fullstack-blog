'use strict'

// models
const Post = use('App/Models/Post')

// validator
const { validate } = use('Validator')


class PostController {
	async index({ view }) {
		// const posts = [
		// 	{title: 'Post One', body: 'This is post one'},
		// 	{title: 'Post Two', body: 'This is post two'},
		// ]

		const posts = await Post.all()

		return view.render('posts.index', {
			heading: 'Latest posts',
			posts: posts.toJSON()
		})
	}

	async details({ params, view }) {
		const post = await Post.find(params.id)

		return view.render('posts.details', {
			post: post.toJSON()
		})
	}

	async add({ view }) {
		return view.render('posts.add')
	}

	async store({ request, response, session }) {
		// validate input
		const rules = {
			title: 'required|min:3|max:255',
			body: 'required|min:3'
		}

		const validation = await validate(request.all(), rules)
		if(validation.fails()){
			session.withErrors(validation.messages()).flashAll()
			return response.redirect('back')
		}

		const post = new Post()
		post.title = request.input('title')
		post.body = request.input('body')
		await post.save()

		session.flash({ notification: 'Post Added!' })
		return response.redirect('/posts')
	}

	async edit({ params, view  }) {
		const post = await Post.find(params.id)
		return view.render('posts.edit', {
			post: post.toJSON()
		})
	}

	async update({ params, request, response, session  }) {
		// validate input
		const rules = {
			title: 'required|min:3|max:255',
			body: 'required|min:3'
		}

		const validation = await validate(request.all(), rules)
		if(validation.fails()){
			session.withErrors(validation.messages()).flashAll()
			return response.redirect('back')
		}

		const post = await Post.find(params.id)
		post.title = request.input('title')
		post.body = request.input('body')
		await post.save()

		session.flash({ notification: 'Post Updated!' })
		return response.redirect('/posts')
	}

	async destroy({ params, session, response }) {
		const post = await Post.find(params.id)
		await post.delete()

		session.flash({ notification: 'Post Deleted!' })

		return response.redirect('/posts')
	}
}

module.exports = PostController
