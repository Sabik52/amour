import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="card-group">
  <div className="card">
    
    <div className="card-body">
      <h5 className="card-title">Qustion:1</h5>
      <h6>Difference between javascript and nodejs ?</h6>
      <p className="card-text">Answer:JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.</p>
     
    </div>
  </div>
  <div className="card">
  
    <div className="card-body">
      <h5 className="card-title">Qustion:2</h5>
      <h6>When should you use nodejs and when should you use mongodb?</h6>
      
      <p className="card-text"> Answer:MongoDB can be used in places that require simple queries, easy and fast integration of data and have data whose structure changes constantly with time.Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
      
    </div>
  </div>
  <div className="card">
    
    <div className="card-body">
      <h5 className="card-title">Qustion:3</h5>
      <h6>Differences between sql and nosql databases</h6>
      <p className="card-text">Answer: SQL databases are relational, NoSQL databases are non-relational.
SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON..</p>
     
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Blogs;