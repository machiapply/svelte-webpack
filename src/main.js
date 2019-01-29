import App from "./App.html";

const app = new App({
  // `target` is the only required option. This is the
  // DOM element your component will be appended to
  target: document.body,

  // `anchor` is optional.
  // The component is inserted immediately before this
  // DOM element, which must be a child of `target`
  anchor: document.querySelector(document.querySelector("#child")),

  // `data` is optional.
  // A component can have default data – we'll learn about that later.
  data: {
    name: "world",
    color: "green",
    hideParagraph: true,
    animals: {
      Cats: ["Buzz", "Stella"],
      Dogs: ["Hector", "Victoria"]
    },
    count: 0,
    translations: {
      en: {
        tooltip: 'Hello'
      },
      fr: {
        tooltip: 'Bonjour'
      }
    },

    language: 'en',
    url: '/',
  },
});

// how to set / get data
app.set({
  content: "<h2>H3 tag header</h2><p>Description about these questions.</p>",
  questions: ["why is the sky blue?", "how do planes fly?", "where do babies come from?"],
  answer: "ask your mother"
});
console.log(app.get());

// Each component has three built-in events
app.on("state", ({ changed, current, previous }) => {
  console.log("state changed", current);
});

app.on("update", ({ changed, current, previous }) => {
  console.log("DOM updated after state change", current);
});

app.on("destroy", () => {
  console.log("this component is being destroyed");
});

// how to manually fire
app.fire("state", {
  thing: "this event was fired"
});

window.app = app;
window.store = store;

export default app;
