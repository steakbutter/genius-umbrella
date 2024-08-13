# Genius Umbrella

## Description
React Portfolio link: https://lambent-monstera-dd82d0.netlify.app/ <br>
This is a static webpage using React. <br>
Having a react website solves the problem of the server taking too long while loading assets and content. <br>
By having a virtual DOM I learned that the site updates just the components that need to be updated. The other components are cached so it makes the user experience faster.

## Usage
Go to https://lambent-monstera-dd82d0.netlify.app/ <br>
The "about me" page will act as the homepage also <br>
![alt text](<src/assets/About me page.png>) <br><br>
Click on the portfolio and each image will send you to the deployed application <br>
![alt text](<src/assets/portfolio page.png>) <br><br>
the Contact page will send you to a form where you could enter your email and a message you want to deliver to the owner of the portfolio. <br>
![alt text](<src/assets/contact page.png>)

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```