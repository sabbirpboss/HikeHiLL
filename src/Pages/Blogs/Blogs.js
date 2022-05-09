import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-2 mb-5">
      <h1 className="bg-success d-inline-block rounded p-2 mt-4 mb-5">
        "Question & Answer"
      </h1>
      <div className="blog mb-3">
        <h2 className="text-danger">Question:1: Difference between javascript and nodejs?</h2>
        <p className="text-success">
          Answer: JavaScript is a lightweight, object-oriented scripting
          language that is used to build dynamic HTML pages with interactive
          effects on a webpage. On the other hand, Node.js usually represents a
          list of objects and methods accessible to JavaScript code when run in
          the V8 engine or via the node interpreter. In this article, we are
          going to discuss the difference between JavaScript and Node.js. But
          before discussing the differences, we will know about JavaScript and
          Node.js.
        </p>
      </div>
      <div className="blog mb-3">
        <h2 className="text-danger">
          Question:2: When should you use nodejs and when should you use
          mongodb?
        </h2>
        <p className="text-success">
          Answer:Nodejs is a Javascript engine that you can write any
          application you want with (by programming in the Javascript language).
          It runs your Javascript code. Most commonly, it is used to build
          servers that can respond to web requests, though it can be used for
          lots of other types of code too.
          <br />
          MongoDB is a database engine. Code within some application or server
          uses MongoDB to save, query or update data in a database. There are
          many web servers built with nodejs that will then use MongoDB for
          storing data.
          <br />
          MongoDB offers an API library that runs within a Nodejs application to
          give you programmatic access to MongoDB so you can create databases
          and then add, query, update or delete data from the MongoDB database.
          MongoDB also has API libraries for other programming environments such
          as Python, Java, etc...
        </p>
      </div>
      <div className="blog mb-3">
        <h2 className="text-danger">
          Question:3: Differences between sql and nosql databases?
        </h2>
        <p className="text-success">
          Answer:Here, we break down the most important distinctions and discuss
          the best SQL and NoSQL database systems available. The five critical
          differences between SQL vs NoSQL are: SQL databases are relational,
          NoSQL databases are non-relational. SQL databases use structured query
          language and have a predefined schema. NoSQL databases have dynamic
          schemas for unstructured data. SQL databases are vertically scalable,
          while NoSQL databases are horizontally scalable. SQL databases are
          table-based, while NoSQL databases are document, key-value, graph, or
          wide-column stores. SQL databases are better for multi-row
          transactions, while NoSQL is better for unstructured data like
          documents or JSON.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
