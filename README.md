This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is this

This is a starter kit for React with commonly used settings such as TypeScript, ESLint, Prettier, StyleLint, StoryBook, sass, etc.

By using these, you can safely and comfortably promote productive development with more beautiful code.

## Operating environment

- node:12.3.1
- yarn:1.17.3

## Usage

```bash
$git clone https://github.com/Umisyo/react-project-template [Your project Name]

$git init && git remote rm origin

or

Fork this repository on github and

$git clone [Your repository]
```

```bash
$yarn
```

Enter the following command to start the server:

```bash
$yarn start
```

To build a production app in the build folder, enter the following command:

```bash
$yarn build
```

If you are not satisfied with your choice of build tool and configuration, enter the following command: This command removes a single build dependency from the project.
Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.:

```bash
$yarn eject
```

This completes the environment construction.
After that, you can edit the inside of src and proceed with development as usual.

## Other

- > We recommend that you proceed with development with VScode. By using it, you can proceed with the development accurately while receiving support such as automatic correction of code by the editor and pointing out violations of Lint rules.

- > When doing `git commit`, ESLint and StyleLint modifications are automatically run, which allows you to commit while preventing unexpected rule violations

- > Place `stories.tsx` under the src directory.

## LICENSE

[LICENSE](./LICENSE)
