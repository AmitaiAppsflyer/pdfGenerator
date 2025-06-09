# Blueprint: ResearchPage

## 1. Page Purpose

This page serves as the primary entry point for the user to interact with the AI Research Assistant. Its sole function is to capture a user's research prompt and initiate the report generation process.

## 2. Component Breakdown

The page will be composed of the following components in a nested structure.

- **`AppLayout` (Global Component):**
  - **Purpose:** The main application wrapper.
  - **Responsibilities:** Renders the purple gradient background and centers all content on the page.
  - **MUI:** Use a `Box` with flexbox properties for centering.

- **`ActionCard` (Global Component):**
  - **Purpose:** A reusable styled container for primary content.
  - **Responsibilities:** Provides the white background, rounded corners, padding, and shadow. It will contain the `ResearchForm`.
  - **MUI:** Use `Card` and `CardContent`.

- **`ResearchForm` (Page-Specific Component):**
  - **Purpose:** To manage and submit the user's prompt.
  - **Responsibilities:**
    - Hold the form's state (the value of the text input).
    - Handle the `onSubmit` event.
    - Render the title, description, input field, and submission button.
  - **MUI:** Use a `Box` with `component="form"`.

- **`PrimaryButton` (Global Component):**
  - **Purpose:** A consistent, primary call-to-action button.
  - **Responsibilities:** Display with the primary brand color and full-width style. Will be used for the "Generate Report" action.
  - **MUI:** A styled `Button` with `variant="contained"`.

## 3. State Management

- The core state for this page will be managed within the `ResearchForm` component.
- A single `useState` hook will hold the `prompt` string from the text input field.

## 4. User Interactions

1.  The user types their research prompt into the `TextField`.
2.  The `onChange` event of the `TextField` updates the `prompt` state.
3.  The user clicks the `PrimaryButton` ("Generate Report").
4.  The `onSubmit` handler on the `ResearchForm` is triggered.
5.  (Future logic) The `onSubmit` handler will prevent the default form submission and make an API call to the backend with the `prompt` value. 