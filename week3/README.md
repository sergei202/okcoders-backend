# Week 3 - MongoDB and Mongoose

## MongoDB
MongoDB is a [NoSQL](http://www.monitis.com/blog/cc-in-review-the-key-differences-between-sql-and-nosql-dbs/) database server.

Instead of saving rows in tables as traditional databases do, MongoDB saves _documents_ in _collections.

Documents are nothing more than Javascript objects.  This makes working with MongoDB very simple, since
you are already using Javascript on the frontend and backend.

### mLab
mLab is a Database-as-a-Service solution that provides a free tier for MongoDB.

Sign up for a free account here: [mLab.com](https://mlab.com/signup/).


### MongoDB Tutorials
Please read [An Introduction to MongoDB](https://www.sitepoint.com/an-introduction-to-mongodb/) for a good intro and overview of what MongoDB is.


## Robo 3T

Robo 3T is a GUI (Graphic User Interface) for MongoDB.  MongoDB comes with a commandline tool, but it is far from user-friendly.  Robo3T makes using MongoDB painless.

**Note:** We'll be using Mongoose for your *code* to talk to MongoDB.  You (the human) will be using Robo3T to view/edit/delete your MongoDB collections and documents.

Download it [here](https://robomongo.org/download).  **Note:** Download Robo 3T, **not** Studio 3T.


## Mongoose
Mongoose is a library that allows us to connect to MongoDB using NodeJS.

Read over [Mongoose's Getting Started](http://mongoosejs.com/docs/) guide.
