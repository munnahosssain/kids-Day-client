import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");

  return (
    <div className="mt-12 p-2 mb-12">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">A</span>
            </span>{" "}
            Kids Shop Toys & Games Store goodies for your kids.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            It is a day dedicated to promoting the well-being, rights, and
            happiness of children of all ages. The event aims to raise awareness
            about children's issues, encourage their active participation in
            society, and advocate for their rights.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </p>
              <p className="text-gray-700">
                An access token is a credential that is issued to a user after
                they successfully authenticate themselves. It is a short-lived
                token that typically has an expiration time. A refresh token is
                a long-lived token that is also issued to a user during the
                authentication process. Unlike the access token, the refresh
                token is typically valid for a longer period, such as days or
                weeks. An access token and a refresh token are commonly used in
                authentication systems to grant and manage user access to
                protected resources.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Compare SQL and NoSQL databases?
              </p>
              <p className="text-gray-700">
                SQL and NoSQL databases are two distinct types of database
                management systems used for storing and retrieving data. SQL
                databases, based on the relational model, store data in
                structured tables with predefined schemas.On the other hand,
                NoSQL databases are designed to handle large-scale,
                unstructured, and semi-structured data. They offer flexible
                schemas and prioritize scalability, high availability, and
                performance over strict data consistency. The choice between SQL
                and NoSQL depends on the specific requirements of the
                application.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What is express js? What is Nest JS (google it)?
              </p>
              <p className="text-gray-700">
                Express.js is a minimalist and flexible web application
                framework for Node.js. It provides a simple and straightforward
                approach to building web servers and APIs. It offers a wide
                range of middleware and plugins that simplify tasks such as
                routing, request handling, and response generation. NestJS is a
                progressive, TypeScript-based web framework built on top of
                Node.js. It draws inspiration from Angular, sharing similarities
                in terms of structure and concepts.NestJS offers powerful
                features such as routing, middleware support, dependency
                injection, and extensive integration with various libraries and
                technologies.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What is MongoDB aggregate and how does it work (google it)?
              </p>
              <p className="text-gray-700">
                The MongoDB aggregate function is a powerful feature that
                enables advanced data aggregation operations on collections. It
                works by utilizing a pipeline consisting of multiple stages,
                where each stage performs a specific operation on the data.
                Aggregation operators such as $sum, $avg, $max, $min, $concat,
                and more are used to perform computations on fields. Expressions
                and functions can also be employed to perform complex data
                transformations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
