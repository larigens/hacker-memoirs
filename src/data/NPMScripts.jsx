export const NPMScripts = {
    title: 'npm Scripts',
    link: "/npm-scripts",
    scripts: [
        {
            script: "dev",
            function: "Runs the application locally for development. Typically starts a development server and opens the application in the browser."
        },
        {
            script: "build",
            function: "Builds the application for production. It compiles and bundles the code, optimizing it for performance, and outputs it to the 'dist' directory."
        },
        {
            script: "preview",
            function: "Previews the production build locally. Starts a server that serves the files from the 'dist' directory to test the production build."
        },
        {
            script: "test",
            function: "Runs the tests for the application. This usually involves executing unit tests and integration tests to ensure code quality and functionality."
        },
        {
            script: "lint",
            function: "Lints the codebase to check for code style and quality issues. This script usually uses tools like ESLint or Prettier to enforce coding standards."
        },
        {
            script: "format",
            function: "Formats the codebase according to defined style rules. Typically uses tools like Prettier to automatically adjust code formatting."
        },
        {
            script: "clean",
            function: "Removes temporary or build artifacts, such as the 'node_modules' directory or the 'dist' directory, to ensure a clean slate for builds or installations."
        },
        {
            script: "prepare",
            function: "Runs before the package is packed and published. It usually performs tasks such as building or preparing the code for publishing."
        }
    ]
}
