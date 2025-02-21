# React Portfolio

This repository contains a React-based single-page application (SPA) that showcases a developer's portfolio. The application was designed with employers in mind, allowing them to assess a potential candidate's work and proficiency. The portfolio includes various sections, such as "About Me," "Portfolio," "Contact," and "Resume."

## Features

- **Header & Navigation**: A header component is used on all pages, containing a navigation bar with links to the main sections of the portfolio.
- **About Me**: A section displaying the developer's recent photo or avatar, alongside a short bio.
- **Portfolio**: A collection of six projects, each with a titled image, and links to both the deployed application and the corresponding GitHub repository.
- **Contact Form**: A contact form with fields for name, email, and message, including validation and required field notifications.
- **Resume**: A section featuring a downloadable resume and a list of developer proficiencies.
- **Footer**: A footer with social media links (GitHub, LinkedIn, and a third platform such as Stack Overflow or Twitter).

## Requirements

- **React**: The application is built using React to render content dynamically.
- **React Router**: The app utilizes `react-router-dom` for navigating between the different sections without reloading the page.
- **Netlify Deployment**: The application is deployed to Netlify for easy access and sharing.

## Structure

The following components are used throughout the portfolio:

### Header Component

- A **Header** component appears on all pages.
- Inside the header, a **Navigation** component displays the links to the sections: About Me, Portfolio, Contact, and Resume.
- The current section is highlighted in the navigation bar.

### Navigation Component

- Contains links to the sections: About Me, Portfolio, Contact, and Resume.
- React Router is used to navigate between sections dynamically, without reloading the page.
- The section currently being viewed is highlighted.

### Project Component

- A **Project** component is used multiple times in the Portfolio section to display project details.
- Each project consists of a title, an image, and links to both the deployed application and the GitHub repository.

### Footer Component

- A **Footer** component appears on all pages.
- Contains links to the developer's GitHub, LinkedIn, and one additional platform (e.g., Stack Overflow or Twitter).

## Acceptance Criteria

1. **Page Layout**
    - The portfolio consists of a header, content section, and footer.
2. **Header & Navigation**
    - The header includes the developer's name and a navigation bar.
    - The navigation bar includes links to About Me, Portfolio, Contact, and Resume sections.
    - The current section is highlighted in the navigation.
3. **Section Rendering**
    - When a navigation item is clicked, the corresponding section is displayed below without reloading the page.
    - The default section on initial load is "About Me."
4. **About Me Section**
    - Displays a photo or avatar of the developer and a short bio.
5. **Portfolio Section**
    - Displays six projects, each with an image, and links to the deployed application and GitHub repository.
6. **Contact Section**
    - Contains a contact form with fields for name, email, and message.
    - Required field notifications are shown when fields are left empty.
    - Email validation is applied to the email field.
7. **Resume Section**
    - Includes a link to a downloadable resume and a list of proficiencies.
8. **Footer Section**
    - Displays text or icon links to the developer's GitHub, LinkedIn, and another platform (e.g., Stack Overflow or Twitter).
	
## Deployment

This application is deployed on **Netlify**. 


## Links
GitHub Link: 
Netlify Link: You can view the live application by visiting [Netlify URL](https://your-app-name.netlify.app).
