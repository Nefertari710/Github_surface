# COMPSCI 732 / SOFTENG 750 Lab 01

## Exercise One - Development environment setup & Vite
In this exercise, we'll make sure that your development environment is set up, and that you can create and run a new React app using [Vite](https://vitejs.dev/).

To begin, install [Node.js](https://nodejs.org/en/) if you haven't already - the latest LTS release will do. Then, install [git](https://git-scm.com/). Finally, install a text editor - we recommend [VS Code](https://code.visualstudio.com/). All operating systems are supported. When installing the tools, read the install options carefully. Make sure you enable any options such as "add to PATH" and "add as context menu option" - this will make it easier to run the commands.

Once you've done that, open a terminal window somewhere you want to create your new project. The Vite project creation tool doesn't seem to like Git bash, so try a terminal other than that (such as PowerShell on Windows).

Next, we'll create a new React app, using Vite. Run the following command:

```sh
npm create vite@latest
```

Then, select the following options:
- Project name: my-first-react-app
- Framework: React
- Variant: JavaScript + SWC

This will create a new app called `my-first-react-app`, in a folder with the same name. Now, either close the current terminal and open a new terminal in that folder, or just navigate into that folder from the current terminal window:

```sh
cd my-first-react-app
```

Now, install dependencies and start the dev environment:

```sh
npm install
npm run dev
```

This should start the dev environment running. The URL for the app will be shown in the terminal window (e.g. <http://localhost:5173>). Navigate here, and you should see the page load in your web browser. Once everything is running, go into the code and make a little modification - for example, add a new paragraph (`<p></p>`). Once you do this, and save the file, you should see the change reflected in the running page. This is thanks to Vite's [Hot Module Replacement feature](https://vitejs.dev/guide/features.html).

Once you're finished playing round with the example, you can close the webpage in your browser, and then stop Webpack running in the terminal (`Ctrl + C`).


## Exercise Two - All About Me!
Let's create our first React component! In the `exercise-02` folder, create a new component called `AboutMe`, in its own file - `AboutMe.jsx`. This component should contain a short paragraph, stating your name, your age, and your favourite food - for example, "Hello World, My name's Andrew! I'm 35 years old, and I like burgers and fries 🍔🍟".

Once you're done, modify `App.jsx` to render your new component at the indicated location. Then, test your code by running it using `npm run dev`, if you aren't already doing so.

**Note:** Remember that when you first clone the lab material from GitHub, it won't contain the `node_modules` folders. You'll need to create these by running `npm install` in the `exercise-02` folder.


## Exercise Three - Props
Continuing on from exercise two, let's modify the `AboutMe` component to render some text based on the values provided to it in some *properties* - or *props*, for short.

Modify the component such that your name, age, and favourite food are supplied as props, rather than being hardcoded. Then, modify `App.jsx` to supply appropriate values for these props. Check that your component functions as intended before moving on.


## Exercise Four - A basic to-do list
Next, let's create a slightly more complex component - a ToDo list. To do this, create a new React component called `ToDoList`, with the following requirements:

1. The component should accept a single property, called `items`, which should be an array of strings

2. The component should render a `<ul>`, containing a `<li>` for each item. The `<li>` should show the string representation of that todo item.

For example, if the following `ToDoList` is rendered:

```jsx
<ToDoList items={["Finish lecture", "Do homework", "Sleep"]} />
```

Then, the following should be displayed in the browser:

- Finish lecture
- Do homework
- Sleep

**Note:** Remember that each `<li>` should have a unique `key` to conform to best practices regarding rendering lists in React.

**Hint:** The array `map()` function lets you determine the index of each item, which could be used as the key. For example:

```js
items.map((item, index) => console.log(index));
```

Once you've created your list, add it at the marked location within `App.jsx`, and make sure it works as intended.


## Exercise Five - Conditional rendering
Continuing on from execise four, extend the `ToDoList` component so it supports the case where the `items` property is either not supplied, or is an empty array. In this case, a `<p>` should be rendered, displaying the message "There are no to-do items!".

If the `items` property exists and contains items, then its behaviour should be the same as with exercise two.


## Exercise Six - A stateful component
In this exercise, we'll create a `LightBulb` component. This lightbulb will render an `<img>` which, when clicked, will toggle between two different `src` images: [light-on.png](./exercise-02/public/light-on.png) and [light-off.png](./exercise-02/public/light-off.png).

1. To begin, create a new `LightBulb` component in its own file. Have it render the `light-off.png` image (this image and its counterpart are located in the `public` folder, so they will be accessible by your app / the browser). Add your new component to `App.jsx` and test.

2. Add *state* to your `LightBulb`. We want to determine whether or not the bulb is currently on, so a single stateful boolean value, `isOn`, should suffice. To do this, use the `useState()` React hook as shown in the lecture material. This hook will give you back two values - the stateful value itself, and a mutator function which you can use later on to change the value. Let's have `isOn` default to `false`.

3. Modify your `LightBulb` such that its image `src` is different, depending on whether the lightbulb is on. It should display `light-on.png` if on, or `light-off.png` otherwise. **Hint:** You needn't render an entirely different `<img>` - you can just change the value of the image's `src` prop.

4. Add an `onClick` event handler to the image. When clicked, it should *toggle* the value of `isOn` (i.e. set it to `false` if it's currently `true`, and vice versa). Once complete, you should be able to click your lightbulb in the browser to toggle it between "on" and "off" states.


## Exercise Seven - Stateful to-do list
Coming back to our `ToDoList` component in this exercise, we'll redesign our to-do app such that it maintains *state*. Each item in a to-do list can now be either complete or incomplete. Each to-do item in the list contains a description as well as its complete status. For example, the following is a possible to-do list:

```js
const todos = [
    { description: 'Finish lecture', isComplete: true },
    { description: 'Do homework', isComplete: false },
    { description: 'Sleep', isComplete: true }
];
```

And then, you would render the list as follows:

```jsx
<ToDoList items={todos} />
```

To complete this exercise, perform the following steps. Make sure to test as you go! The Hot Reload feature is really great for this purpose - you don't have to keep stopping and restarting your app as you modify it (though if you see an error you're not expecting, you might want to try refreshing the page in your browser).

1. Modify your `ToDoList` component such that its `items` prop now accepts a list of todo items, each with a `description` and `isComplete` status (see above example), rather than a list of strings. Modify the `ToDoList` so that it renders a `<li>` for each todo item, with each `<li>` displaying that item's `description`. Modify `App.jsx` to supply data to the `ToDoList` in the correct format.

2. Check that the "empty to-do list" functionality works as before - i.e. if the `ToDoList` didn't get supplied with any to-dos, it should render a message to the user such as "There are no to-do items!".

3. Modify the `ToDoList` so that, in each `<li>`, a *checkbox* (`<input type="checkbox">`) should be rendered for the corresponding to-do item. Its `value` property should match the item's `description`, while its `checked` property should match the item's `isComplete` status.

4. If a to-do item is complete (i.e. `isComplete == true`), the text "*(Done!)*" should be appended to its description.

After these steps, the to-do list defined in the above code snippet should be rendered on the page as follows:

![](./spec/todo-checkboxes.PNG)

An example of the actual HTML which might be rendered for a single complete to-do item is as follows (though don't feel that you *must* do it this way):

```html
<div>
    <label>
        <input type="checkbox" checked="true">
        Finish lecture
        <span> (Done!)</span>
    </label>
</div>
```

Next, we'll extend the to-do app as follows:

5. Modify `App.jsx` to include the to-do list as *state* (with the `useState()` React hook). The given `todos` array can be used as the initial state value (you may rename it to `initialTodos` to avoid confusion if you like). Make sure your `ToDoList` component renders the to-do list that's now coming from `App`'s state. Your code might look something like this:

    ```jsx
    const initialTodos = [
        { description: 'Finish lecture', isComplete: true },
        { description: 'Do homework', isComplete: false },
        { description: 'Sleep', isComplete: true }
    ];

    function App() {
        const [todos, setTodos] = useState(initialTodos);

        ...
    }
    ```

## Exercise Eight - Completing To-Do Items
Continuing on from exercise seven, now extend `ToDoList` so it can notify an observer if the user clicks one of the checkboxes. To do this, we can add a property called `onTodoStatusChanged`.

In a checkbox's `onChange` event handler, we can call that `onTodoStatusChanged` function, supplying the index of the item that changed, and whether or not it is now complete, as arguments. We can test that this is working by adding a basic event handler for `onTodoStatusChanged`, which simply logs the supplied values to the console. This might look similar to the following example:

```jsx
<ToDoList items={todos} onTodoStatusChanged={(index, status) => console.log(index, status)} />
```

Finally, finish the app by handling your `onTodoStatusChanged` event such that it properly updates the application state. Remember that when you call the mutator function (`setTodos`), you should supply the entire to-do list (including the modified item), rather than just the modified item.


## Exercise Nine - Styling
In this exercise, use global CSS and / or CSS modules to style your to-do app. The one requirement is that *complete* and *incomplete* to-do items must be styled differently. Other than that, how you style the app is completely up to you.

One possible example is shown here (but this is just a suggestion!):

![](./spec/todos-fancy.PNG)


## Exercise Ten - Adding to-do items
In this exercise, continue extending your to-do app by adding a new component - `NewTodoItem`. This component should contain a single textbox (`<input type="text">`) allowing users to enter a description, along with a `<button>`. When the button is clicked, a to-do item with the given description should be added to the list, with a default completed status of `false`.

Your new component can be styled however you like, though a possible example is shown here:

![](./spec/new-todo.PNG)


## Exercise Eleven - Removing to-do items
In this exercise, we'll make the final modification to the to-do app. Each item in the to-do list should contain a button which, when clicked, will result in that to-do item being deleted from the app.

An example of how this might look is shown here (though the exact styling is up to you):

![](./spec/full-app.PNG)


## Exercise Twelve - Refactoring
Once your app is complete, look through your codebase and see if you can make any changes to improve your design. For example, you might refactor your `ToDoList` component into two separate components - one to render a single to-do item, another to render the whole list.