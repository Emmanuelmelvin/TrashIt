
<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="public\assets\tetter.jpg" alt="Logo" width="150" height="150">

<h1 align="center">TrashIt - info</h1>
  <p align="left">
    A map e-commerce web all that allows locals gain direct contact with trash sellers over the internet.<br/>
    It allows waste buyers and sellers meet for a possible waste trade. Buyers can be added to the map, either as a company or as an individual. <br/>
    It provides that efficient cycle of production and cunsumption needed in many rural communities across Nigeria.<br/>
     Buyers visit this web to find trash buyers, either a company or an individual. These buyers are saved as map pointers across their various location on the map, so to get basic infrmation about what kind of waste they buy, these map pointers have a pop up block conveying these necessary details:
  </p>
</div>

- name
- address
- specialization
- link to website
- Phone Number


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



### Built With

* Leaflet JavaScript map Api
* Address from to lat, lng
* Express JS server
* APP engine(unavailable for now due to billing issues)
*  NeDb database

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://rapidapi.com/apishub/api/address-from-to-latitude-longitude/](https://rapidapi.com/apishub/api/address-from-to-latitude-longitude/)
2. Clone the repo
   ```sh
   git clone https://github.com/Emmanuelmelvin/TrashIt.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `.env` file and enter api key

   ```js
   API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

On the project directory, run the `server.js` file to set up express environment.
```js
$ node server.js
```

If all set successfully, app will run at port `3000`
```sh
$ listening at 3000
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



