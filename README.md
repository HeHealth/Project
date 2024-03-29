
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    Lightning-fast and effortless order management! (Slogan subject to change)
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Team BlueJay is developing an international shipping app intended to reduce individual overseas shipping costs by bundling them in a group!

This idea was inspired by Shichang, and her experiences with ordering international products. She found that by grouping various orders together in one package for overseas shipping, this would reduce the price for all involved, and the initial solution was to use an Excel spreadsheet to track each person's order cost, weight, and payment status. 

This app is an extension of that idea, where users can do the same thing, but through a dynamic interface that allows users to (subject to change):
* register to join and manage groups
* organize orders more efficiently, and send the information to all members
* calculate shipping costs automatically using our algorithm
* receive payment and delivery deadlines and notifications
* And more!

Again, this is just a basic sketch for Iteration 1:
We're also hoping to add features such as:
* a chatbot for automated customer service
* admin management of shipping routes
* coupons to encourage good deals
* account/user moderation for a better comunity

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

Here's what we've used so far for Iteration 1:
* [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
* [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
* [![React][React.js]][React-url]
* [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
* [![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Main Technologies Used:
- Express.js: \
A minimalist web framework for Node.js, allowing us to set up middleware to respond to HTTP requests, define routing, and interact with our database seamlessly.
- React: \
An efficient and flexible JavaScript library from Facebook, designed for building dynamic and responsive user interfaces, with optimized rendering through a virtual DOM.
- MongoDB: \
A NoSQL database that stores data in JSON-like format. It's highly scalable and flexible, ensuring reliable storage and retrieval of our application data.

<!-- GETTING STARTED -->
## Getting Started

Here's how to get started (subject to change):
1) Clone the GitHub repository (git clone **given link**)
2) cd to the local directory
3) Install all prerequisites below under 'Prerequisites'
4) Type in 'yarn dev'
5) Access the localhost link provided in the terminal

### Installing NPM:
NPM (Node Package Manager) is essential for managing dependencies in this project. Here's how to get it:

#### - Windows & Mac:
1. Install Node.js: \
Download the installer from **[Node.js official website](https://nodejs.org/en)**. This will install both Node.js and npm. Follow the prompts in the installer to complete the installation.

2. Verify Installation:
    - Open your terminal or command prompt.
    - Enter `node -v` and `npm -v`.
    - If both commands return a version number, you're good to go!

#### - Linux:
1. Using Package Manager:
    - For Debian and Ubuntu based destributions, use:
        ```bash
        sudo apt update
        sudo apt install nodejs npm
        ```
    - For Red Hat based distributions, use:
        ```bash
        sudo yum install nodejs npm
        ```
2. Verify Installation:
    - Open your terminal.
    - Enter `node -v` and `npm -v`.
    - If both commands return a version number, the installation was successful!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Setup:
#### 1. Installing Dependencies:
Once you've cloned the repository and have `npm` installed, navigate into the project's directory and install the dependencies.
```bash
npm install
```

<!-- USAGE EXAMPLES -->
## Usage

Iteration 1: 
1) The first page you will encounter is the login. For now, feel free to enter anything or just enter the app, as there is currently no user authentication.
2) The second page is the Order Management tab. From here, you can add/remove users from your order, and view your order's status.
3) Once you decide to check out, the app will automatically calculate your order cost, and if your entire group is ready, then you may place your order.
4) The app will confirm your order with the date and order price. 
5) That's all for now! 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Iteration 1
- [ ] Basic UI elements to achieve user story
- [ ] Navigation between UI elements
- [ ] MongoDB backend integration
- [ ] UML diagram and SRS documentation 

See the [open issues](https://github.com/jhu-oose-f23/team-BlueJay/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. One of our team members will review the code and merge it!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Team BlueJay via Slack!

Project Link: [[https://github.com/your_username/repo_name](https://github.com/jhu-oose-f23/team-BlueJay)](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Shichang, for inspiring the project.

Professor Darvish and his TA's, for helping us along the way.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
