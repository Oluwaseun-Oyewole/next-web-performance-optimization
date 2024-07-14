### what is middleware in NextJs

middleware can be used to directly respond to requests without going through the route handlers.
middleware is a piece of code that allows you to perform an action before a request is completed and modify the response accordingly. It provides flexibility and controls over the request/response flow.
middlewares allows you to seamlessly integrate custom login into your request/response pipeline, request/response modifications, modify request headers, implements url redirects, or keep track of incoming and outgoing requests.

one of the major use-case of middleware is authentication, it provides a way to verify user's identity before granting response to your application protected pages.
Middleware can use used to authorization to implement access controls based on roles and permissions. Lastly they are important for caching. They store the frequently accessed data in a cache preventing subsequent calls to db.

### Downsides

Add complexity to your application
Latency - middleware code needs to be executed before your application can process the request.

### what are edge functions vs serverless functions

When you deploy a serverless function to Vercel, it’s deployed to a server somewhere in the world.
The request made to that function will then execute where the server is located.
If a request is made to a server close to that location, it will happen quickly. But, if a request is made to the server from a faraway location, the response will be much slower
Edge functions are serverless functions that can run geographically close to the user.

### Benefits of Serverless Functions

pay for what you use
Node runtime

### Downsides of serverless function

Long cold boot
Served data in a Single region
Difficult cache invalidation

### Benefits of Edge Functions

pay for what you use
Edge runtime
Users can serve data from all region
HTTP streaming

### What is rendering?

##### Rendering minimizes build time. Long build time frustrates users because our websites tends to load data very slowly which might end up with really high server cost and a bad user experience. The solution to this is by using the right rendering patterns and techniques. In the course it is also important we have a good understanding of core web vitals.

### Core web vitals

##### TTFB (Time To First Byte) - the time is takes for the client to receive the first byte of the page content. FCP(First Contentful Paint) -the time is takes for the browser to render the first piece of content after navigation. A good FCP should be less than 1.8s. Anything longer than 3s is considered poor. LCP(Largest Contentful Paint) -the time is takes to load and render the page's main content. A good FCP should be less than 2.5s. Anything longer than 4s is considered poor. TTI (Time To Interactive) - The time it takes for the age to starts loading to when it's reliably responding to users input quickly CLS (Cumulative Layout Shift) - Measures the visual stability to avoid unexpected layout shift FID(First Input Delay) - Time to when the user interacts with the page to the time the event handlers are able to run

### Lists of best developer experience

Projects with really short build time
Low server costs
Dynamic content in a performant way

### what is static rendering

##### Static rendering is a very performant pattern. With static rendering the entire HTML page gets generated at BUILD TIME. static assets are easily cached by a CDN (Content Delivery Network) or on vercel by the edge networks. So it easy to get fast response because we can just return the cached data from the CDN or edge function on subsequent calls.For full details about rendering, checkout rendering folder in app
