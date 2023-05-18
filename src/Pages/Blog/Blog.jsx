import React from "react";

const Blog = () => {
  return (
    <div className="mt-12 p-2">
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
                Well, the way they make shows is, they make one show. That
                show's called a pilot.
                <br />
                <br />
                Then they show that show to the people who make shows, and on
                the strength of that one show they decide if they're going to
                make more shows. Some pilots get picked and become television
                programs.Some don't, become nothing. She starred in one of the
                ones that became nothing.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Compare SQL and NoSQL databases?
              </p>
              <p className="text-gray-700">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What is express js? What is Nest JS (google it)?
              </p>
              <p className="text-gray-700">
                A business big enough that it could be listed on the NASDAQ goes
                belly up. Disappears!
                <br />
                <br />
                It ceases to exist without me. No, you clearly don't know who
                you're talking to, so let me clue you in.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What is MongoDB aggregate and how does it work (google it)?
              </p>
              <p className="text-gray-700">
                This is not about revenge. This is about justice. A lot of
                things can change in twelve years, Admiral. Well, that's
                certainly good to know. About four years. I got tired of hearing
                how young I looked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
