# Technologies
- Editor: VScode 
- Languages: React, Redux, HTML, CSS, SVG
- Libraries/Plugins: Axios, React-query, Bootstrap, styled-component, react-router
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
2) Practicing React.
3) Exploring and applying new dependencies and libraries that I am not yet familiar with.

# Memoir

## SVG icons
When implementing the VS Code theme profile, the first challenge was working with icons.

<b>First attempt</b>: I tried using .gif or .png icons. However, the issue was that I couldn't change the icon's colour in response to events like hover, focus, or active.

<b>Second attempt</b>: I added icons to data object files by copying SVG code from Font Awesome and pasting it into `COMPONENT_NAME.js` in the `src/data` folder to import SVG files as needed. Unfortunately, many of the required icons were missing for the VS Code theme in Font Awesome.

<b>Third attempt</b>: I tried using Fantasticon, referring to the [vscode-codicons](https://github.com/microsoft/vscode-codicons?tab=readme-ov-file). However, after installing the dependency as instructed, I couldn't see any folder icons or templates in my project.

<b>Fourth attempt</b>: Finally, I used [react-icons](https://react-icons.github.io/react-icons/), which allowed me to access icons from various platforms. With this, I successfully added the default VS icons to my project.


## JSX element compie
I initially thought I could dynamically add components from object values. However, the JSX compiler didn't create the expected component. This is because JSX compiles differently depending on whether the first letter of a component's name is lowercase or uppercase.
- `<component />` compiles to `React.createElement('component')` (html tag)
- `<Component />` compiles to `React.createElement(Component)`   (Component)
- `<obj.component />` compiles to `React.createElement(obj.component)` (html tag)
To fix this, I had to rename the object by creating `CapitalizedComponent` in `common.js` to ensure the component names are capitalized.

> [!NOTE] Ref: ref: [User-Defined Components Must Be Capitalized](https://legacy.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)

## Create a component which has children compont and access the children from the parent component like Bootstrap
I wanted to create a complex component like Bootstrap following the example.
`HTML
<EditorArea>
  <EditorArea.Header>
    <EditorArea.Tab></EditorArea.Tab>
  </EditorArea.Header>

  <EditorArea.Body>
    <EditorArea.Title></EditorArea.Title>
    <EditorArea.SubTitle></EditorArea.SubTitle>
  </EditorArea.Body>
</EditorArea>
`

Initially, I analysised the Bootstrap Card module.