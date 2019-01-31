export default [
  {
    id: 10,
    name: 'First product name',
    excerpt: 'First, you have to know what Svelte is.',
    image: '/assets/img/macos-sierra-2.jpg',
    description: `
    <p>First, you have to know what <a href='https://svelte.technology'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.technology/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

    <p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

    <ul>
      <li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
      <li>Server-side rendering (SSR) with client-side hydration</li>
      <li>Service worker for offline support, and all the PWA bells and whistles</li>
      <li>The nicest development experience you've ever had, or your money back</li>
    </ul>

    <p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
  `
  },
  {
    id: 20,
    name: 'Second product name',
    image: '/assets/img/macos-sierra.jpg',
    excerpt: 'Step one Create a new project, using degit:',
    description: `
    <h2>Step one</h2>
    <p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

    <pre><code>npx degit sveltejs/sapper-template my-app
    cd my-app
    npm install # or yarn!
    npm run dev
    </code></pre>

    <h2>Step two</h2>
    <p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>routes</code> directory or add new ones.</p>

    <h2>Step three</h2>
    <p>...</p>

    <h2>Step four</h2>
    <p>Resist overdone joke formats.</p>
  `
  },
  {
    id: 30,
    name: 'Third product name',
    image: '/assets/img/osx-el-capitan-2.jpg',
    excerpt: 'Next.js is a React framework from Zeit, and is the inspiration for Sapper.',
    description: `
    <p><a href='https://github.com/zeit/next.js/'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

    <ul>
      <li>It's powered by <a href='https://svelte.technology'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
      <li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>routes/blog/[slug].html</code></li>
      <li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
      <li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
    </ul>
  `
  },
  {
    id: 40,
    name: 'Forth product name',
    image: '/assets/img/macos-sierra.jpg',
    excerpt: 'Step one Create a new project, using degit:',
    description: `
    <h2>Step one</h2>
    <p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

    <pre><code>npx degit sveltejs/sapper-template my-app
    cd my-app
    npm install # or yarn!
    npm run dev
    </code></pre>

    <h2>Step two</h2>
    <p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>routes</code> directory or add new ones.</p>

    <h2>Step three</h2>
    <p>...</p>

    <h2>Step four</h2>
    <p>Resist overdone joke formats.</p>
  `
  },
  {
    id: 50,
    name: 'Fifth product name',
    image: '/assets/img/osx-yosemite-2.jpg',
    excerpt: 'Next.js is a React framework from Zeit, and is the inspiration for Sapper.',
    description: `
    <p><a href='https://github.com/zeit/next.js/'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

    <ul>
      <li>It's powered by <a href='https://svelte.technology'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
      <li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>routes/blog/[slug].html</code></li>
      <li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
      <li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
    </ul>
  `
  },
  {
    id: 60,
    name: 'Second product name',
    image: '/assets/img/macos-sierra.jpg',
    excerpt: 'Step one Create a new project, using degit:',
    description: `
    <h2>Step one</h2>
    <p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

    <pre><code>npx degit sveltejs/sapper-template my-app
    cd my-app
    npm install # or yarn!
    npm run dev
    </code></pre>

    <h2>Step two</h2>
    <p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>routes</code> directory or add new ones.</p>

    <h2>Step three</h2>
    <p>...</p>

    <h2>Step four</h2>
    <p>Resist overdone joke formats.</p>
  `
  },
];