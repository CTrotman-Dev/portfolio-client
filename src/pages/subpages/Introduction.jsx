import React from "react";
import TitleBanner from "../../components/TitleBanner";
import Seo from "../../components/SEO";
const Introduction = () => {
  const metaData = [
    {
      name: "keywords",
      content:
        "css, html, c#, csharp, javascript, react, code, develop, developer, basics, learn, guide, training",
    },
  ];

  return (
    <div className="row devGuides">
      <Seo
        title="Coding Basics"
        description="Training guide on the basics of how to develop code."
        meta={metaData}
      />
      <TitleBanner text="Introduction" />
      <div className="devContent">
        <p>
          In this section, you will learn what web development is, how it works,
          and what are the main components and technologies involved. You will
          also learn how to set up your development environment and run your
          first web application.
        </p>
        <p>
          Web development is the process of creating web applications, which are
          software programs that run on the web. Web applications can be
          anything from simple static web pages that display information, to
          complex dynamic web pages that interact with users and data. Web
          applications can be used for various purposes, such as entertainment,
          education, communication, business, social networking, and more.
        </p>
        <p>
          To create a web application, you need to use a combination of
          different technologies and languages, such as:
        </p>
        <ul>
          <li>
            C#, a general-purpose programming language that can be used to write
            server-side logic and functionality for web applications.
          </li>
          <li>
            HTML, a markup language that defines the structure and content of
            web pages.
          </li>
          <li>
            CSS, a style sheet language that describes the appearance and layout
            of web pages.
          </li>
          <li>
            JavaScript, a scripting language that enables interactivity and
            dynamic features on web pages.
          </li>
          <li>
            React, a JavaScript library that simplifies the creation of user
            interfaces for web applications.
          </li>
        </ul>
        <p>
          To run a web application, you need to have a web server and a web
          browser. A web server is a software program that listens for requests
          from web browsers and responds with web pages or other data. A web
          browser is a software program that requests web pages from web servers
          and displays them to the user. The communication between web servers
          and web browsers is done using a protocol called HTTP (Hypertext
          Transfer Protocol).
        </p>
        <p>
          To set up your development environment, you need to install some tools
          and software on your computer. These include:
        </p>
        <ul>
          <li>
            Visual Studio Code, a code editor that supports many languages and
            features.
          </li>
          <li>
            .NET SDK, a software development kit that provides tools and
            libraries for developing C# applications.
          </li>
          <li>
            Node.js, a runtime environment that allows you to run JavaScript
            code outside of a browser.
          </li>
          <li>
            NPM, a package manager that allows you to install and manage
            JavaScript libraries and dependencies.
          </li>
          <li>
            Create React App, a tool that helps you create and configure React
            applications with minimal setup.
          </li>
        </ul>
        <p>
          To run your first web application, you need to follow these steps:
        </p>
        <ol>
          <li>
            Open Visual Studio Code and create a new folder for your project.
          </li>
          <li>
            Open a terminal in Visual Studio Code and navigate to your project
            folder.
          </li>
          <li>
            Type the following command to create a React application using
            Create React App: npx create-react-app my-app
          </li>
          <li>
            Type the following command to change directory to your React
            application folder: cd my-app
          </li>
          <li>
            Type the following command to start the development server: npm
            start
          </li>
          <li>
            Open your web browser and go to http://localhost:3000. You should
            see a default React page with some instructions.
          </li>
          <li>
            Congratulations! You have just created and run your first web
            application using C#, HTML, CSS, JavaScript and React.
          </li>
        </ol>
        <p>
          In the next sections, you will learn more about each of these
          technologies and how to use them to create amazing web applications.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
