
---

# Cypress End-to-End Testing for Hubtel Blog

This repository contains end-to-end tests for the Hubtel Blog using Cypress. The tests include navigation link checks, main article validation, article component validation, and footer download link tests.

## Prerequisites

Before you can run these tests, you need to have the following installed:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/)
- [Allure Commandline](https://docs.qameta.io/allure/#_commandline)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/hubtel-blog-tests.git
    cd hubtel-blog-tests
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Install Allure Commandline globally:
    ```bash
    npm install -g allure-commandline
    ```

## Tests

The tests include:

1. **Navigation Links Test**: Clicks on each navigation link.
2. **Main Article Check**: Verifies that the main article exists.
3. **Article Component Validation**: Validates the presence of required elements in each article component.
4. **Footer Download Link Tests**: Checks if the download icons with links work in the footer.

## Running the Tests

To run the tests, use the following commands:

1. Open Cypress test runner:
    ```bash
    npm run cypress:open
    ```

2. Run Cypress tests in headless mode:
    ```bash
    npm run test
    ```

## Generating Allure Report

After running your tests, generate the Allure report with:

```bash
npm run allure:report
```

This will generate a new Allure report and open it in your default browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you have any suggestions, bug reports, or contributions, feel free to create an issue or pull request.

---

