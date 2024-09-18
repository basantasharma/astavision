import React from "react";

const Contact = () => {
  return (
    <div className="p-5 lg:px-24 bg-white text-black dark:text-white  dark:bg-slate-900 lg:h-[80vh] flex flex-col  lg:flex-row gap-5 py-5">
      <div className=" relative flex-1 order-2">
        {" "}
        <img
          class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fallmywebneeds.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fcontact-us-page.jpeg&f=1&nofb=1&ipt=a6fb08edf8628cd2e301d474e53b81e9e82daf4710d3d1b1eb31d0690a1e60cf&ipo=images"
          alt=""
        />
      </div>
      <div className="relative flex-1 order-2 lg:order-1 h-56">
        <div className="md:flex md:flex-col mb-5 md:justify-center md:items-center">
          <h1 className="text-4xl md:text-center text-blue-500">Contact</h1>
          <hr className="w-28 h-1 rounded-lg bg-blue-400 border-none" />
        </div>
        <div>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn bg-blue-500 hover:bg-blue-600 text-white my-8 border-none"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
