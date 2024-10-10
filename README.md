# Technologies
- Editor: VScode 
- Languages: React, Redux, HTML, CSS
- Libraries/Plugins: Axios, React-query, Bootstrap, styled-component, React-router
- Applied normalise.css

# THEME COLOR REFERENCE URL
- [vscode - Theme color](https://code.visualstudio.com/api/references/theme-color)

## Reference
- [10 best themes](https://www.gitkraken.com/blog/10-best-vs-code-color-themes-2024)

### Monaspace
- [Homepage](https://monaspace.githubnext.com/)
- [Github](https://github.com/githubnext/monaspace#monaspace)

### Tokyo Night
- [Preview](https://vscode.dev/editor/theme/enkia.tokyo-night/Tokyo%20Night)


# Unicode
- [ref](https://medium.com/@jamesncox/rendering-unicode-symbol-in-react-76b1b4ffcee4)
- https://symbl.cc/en/


# React icons
[react-icons](https://react-icons.github.io/react-icons/)


# The purpose of this project
1) Creating a profile.
2) Practicing React and becoming familiar with it.
3) Creating my own component library instead of using existing ones for practice.
4) Exploring and applying new dependencies that I am not yet familiar with.
5) Implementing responsible web.

# Memoir

## SVG icons
When implementing the VS Code theme profile, the first challenge was working with icons.

<b>First attempt</b>: I tried using .gif or .png icons. However, the issue was that I couldn't change the icon's colour in response to events like hover, focus, or active.

<b>Second attempt</b>: I added icons to data object files by copying SVG code from Font Awesome and pasting it into `COMPONENT_NAME.js` in the `src/data` folder to import SVG files as needed. Unfortunately, many of the required icons were missing for the VS Code theme in Font Awesome.

<b>Third attempt</b>: I tried using Fantasticon, referring to the [vscode-codicons](https://github.com/microsoft/vscode-codicons?tab=readme-ov-file). However, after installing the dependency as instructed, I couldn't see any folder icons or templates in my project.

<b>Fourth attempt</b>: Finally, I used [react-icons](https://react-icons.github.io/react-icons/), which allowed me to access icons from various platforms. With this, I successfully added the default VS icons to my project.


## JSX element compie
I initially thought I could dynamically add components by passing them to a customized component. However, the JSX compiler didn't create the expected component when I passed the components as props. This is because JSX compiles differently depending on whether the first letter of a component's name is lowercase or uppercase.
- `<component />` compiles to `React.createElement('component')` (html tag)
- `<Component />` compiles to `React.createElement(Component)`   (Component)
- `<obj.component />` compiles to `React.createElement(obj.component)` (html tag)

> [!NOTE] Ref: ref: [User-Defined Components Must Be Capitalized](https://legacy.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)

I need this for my icons. I added icons to the side menu, and these icons need to be passed to the `ActivityBar` component. However, when passing them through props in React, the tags were converted to lowercase. 
  
<b>First attempt</b>: I had to rename the object by creating `CapitalizedComponent` in `common.js` to ensure the component names remained capitalized. However, it was quite inconvenient, and the component name didn’t accurately reflect its purpose, as it was only meant for icons.

```JavaScript
// common.js
export const CapitalizedComponent = ( props ) => {
  let Component = Components[ props.type ];
  return (<Component { ...props } />);
}
```

<b>Second attempt</b>: I created an `Icon` component that contains the icon component along with default styles like color and size. When a matching icon is found based on the passed name, it creates the component and returns it to the caller.

```JavaScript
// Icon.js
export const Icon = ({ name, className = '',  ...props }) => {
  const iconData = iconMap[name.toLowerCase()];

  if (!iconData) {
    console.warn(`Icon not found: ${name}`);
    return <span>`Icon not found: ${name}`</span>;
  }

  const { component: IconComponent, style } = iconData;

  const combinedStyle = {
    ...style,
    ...props.style,
  };

  return <IconComponent style={combinedStyle} {...props} className={`${className}`.trim()} />;
};
```

## Compound Component Pattern
Creating a parent component which has children compont and access the children from the parent component like Bootstrap like the following the example.
`HTML
<EditorArea>
  <EditorArea.Header>
    <EditorArea.Tab></EditorArea.Tab>
    <EditorArea.Tab></EditorArea.Tab>
  </EditorArea.Header>

  <EditorArea.Body>
    <EditorArea.Title></EditorArea.Title>
    <EditorArea.SubTitle></EditorArea.SubTitle>
  </EditorArea.Body>
</EditorArea>
`

### What is the 'Compound Component Pattern'?
Compound components are a React pattern that provides an expressive and flexible way for a parent component to communicate with its children, while expressively separating logic and UI.


## Props Type Settings
I am not using TypeScript and wanted to prevent unexpected type errors, similar to other popular libraries, so I decided to use the `prop-types` library in my custom components.

```
npm install --save prop-types
```

## React Philosophy: Lift state up
 In React, it's often beneficial to <b>`lift state up`</b> to a common ancestor when multiple components need to share state or when you need to coordinate between components.   

In `CollapsibleList.js`, `EditorBlog.js`, and `Dropdown.js`, I need to share state or functions among children, so I lift up props to the nearest common ancestor of components tha need it.

1) CollapsibleList.js
```JavaScript
const CollapsibleListContext = createContext();

export const CollapsibleList = ({ children, defaultOpenLevels = 1 }) => {
  return (
    <CollapsibleListContext.Provider value={{ defaultOpenLevels }}>
      <div className="collapsible-list">
        {children}
      </div>
    </CollapsibleListContext.Provider>
  );
};

function ListItem ({ children, title, icon: IconComponent, level = 1, ...props }) {
  // 1. Get the current level of list
  const { defaultOpenLevels } = useContext(CollapsibleListContext);
  const [isOpen, setIsOpen] = useState(level <= defaultOpenLevels);

  /* ... */
  return(
    <>
    </>
  )
}
```

2) EditorBlog.js
```JavaScript
const EditorBlogContext = createContext();

function DetailsNav ({ children, id = '', className = '', activeKey: initialActiveKey, ...props }) {
  const contextValue = useMemo(() => ({
    activeKey,
    setActiveKey
  }), [activeKey]);
  
  return (
    <EditorBlogContext.Provider value={ contextValue }>
      <div id={id} className={`na-editor-blog-details-nav-wrapper ${className}`.trim()} {...props}>
        <div className='na-editor-blog-details-navs'>
          { children }
        </div>
      </div>
    </EditorBlogContext.Provider>
  )
}

function DetailsNavItem ({ children, id = '', className = '', title = 'Title', eventKey, icon, ...props }) {
  const { activeKey, setActiveKey  } = useContext(EditorBlogContext);
  const isActive = (eventKey === activeKey);

  return (
    <>
    </>
  )
}
```

3) Dropdown.js
```JavaScript
const DropDownContext = createContext();
export function Dropdown ({ children, className = '', title='', ...props }) {
  const [ activeKey, setActiveKey ] = useState(null);
  const contextValue = useMemo(() => ({
    activeKey,
    setActiveKey
  }), [activeKey]);
  
  return (
    <DropDownContext.Provider value= { contextValue }>
      <div className='na-dropdown-sub-menu-container'>
        { children }
      </div>
    </DropDownContext.Provider> 
  )
}


```

## Publish the webpage to GitHub
GitHub doesn't support Single Page Applications (SPAs), so clicking links resulted in a 404 error.    
By following the solution from [spa-github-pages](https://github.com/rafgraph/spa-github-pages), I was able to fix the issue.

### spa-github-pages


### gh-pages
1. Install `gh-pages`
```
npm install gh-pages
```

2. Modifiy `package.json`
Add `homepage`, `predeploy`, and `deploy`.   
ex) "homepage": <b>[GitHub user name]</b>.github.io/<b>[repository name]</b>
```
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://narae-h.github.io/portfolio",
  "dependencies": {
    ...
  },
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }, 
  ...
}
```

3. Add `basename` in the `<BrowserRouter>` component
```
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);
```

4. Deploy
```
npm run deploy
```