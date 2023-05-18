# Project Title

This product is designed for older users and their children, which will provide them with an easy and fast way to ask for their needs.

## Installation

1. Clone the repository: `git clone  `
2. Navigate to the project directory: `cd samarth`
3. Install dependencies: `npm install`
4. Create the .env File as one .env.exapmle
5. Change the NODE_ENV to `local`
6. Now Change the database configuration in file config.json as your database.
7. Run the Command `npm run dev`

## Logger Usage
1- In logger used as `logger.info("message", {module:"Filename"})
2- Don't use Console.log in the code. 


## Naming Convention for this Project

| Naming Type           | Convention                                                                 |
|-----------------------|----------------------------------------------------------------------------|
| File and Folder Names | - Lowercase letters<br>- Separate words with hyphens or underscores<br>- Avoid spaces or special characters |
| Variable Names        | - Use camelCase                                                            |
| Function Names        | - Use camelCase                                                            |
| Constant Names        | - Use uppercase letters<br>- Separate words with underscores<br>- Avoid spaces or special characters |
| Class Names           | - Use PascalCase                                                           |
| Route Names           | - Use lowercase letters<br>- Separate words with hyphens or underscores<br>- Avoid spaces or special characters |
| Database Table Names  | - Use lowercase letters<br>- Separate words with underscores<br>- Avoid spaces or special characters |

## Thing We should take care During Development
1. Follow a consistent naming convention for files and components in your project. This can help you and other developers quickly understand the purpose and structure of each file or component.

2. Write comprehensive tests for all of your components to ensure they function correctly and prevent regressions. This can save time and effort in the long run, and help catch bugs early in the development process.

3. Use comments in your code to explain important concepts or clarify complex logic. This can make your code more readable and understandable to other developers who may need to work on or maintain your code in the future.

4. Write code that is maintainable and easy to understand. This means using descriptive variable names, avoiding overly complex code, and adhering to established coding standards and best practices.


## Git Commit Process
1. `Committing Only Relevant Files:` Only include the files that are directly related to the changes you are making in the commit. Avoid committing unrelated or unnecessary files.

2. `Proper Indentation and Formatting:` Ensure consistent indentation and formatting within the files you modify. Follow the coding style guidelines of your project or use a popular style guide such as the one provided by ESLint or Prettier.

3. `Commit Message Guidelines:` Write clear and descriptive commit messages that convey the purpose of the change. It's a good practice to include the ticket or issue number, module name, and a brief summary of the changes made. For example: [Ticket-123] Update user registration endpoint.

4. `Pull Request (PR) Comments:` When creating a pull request, provide a detailed description of the changes introduced by the PR. Include relevant information about the problem being solved, the approach taken, and any potential impacts. Additionally, attach any relevant test case reports, such as coverage reports or test results.

5. `Assignee and Reviewer Assignment:` Assign the PR to the appropriate collaborator or team member for review. This helps ensure that the changes are properly reviewed and approved before merging into the main branch.







## Available Scripts

In the project directory, you can run:

### `npm run dev `

Runs the app in the development mode.
just simple run command `npm run dev` before that go to the Installation of the Project.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## File Structure

- `/src`: Contains the source code files.
- `/config`: Configuration files.
- `/tests`: Test files.


## Tests

To run the tests, use the following command: `npm test`

