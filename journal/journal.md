# FirstPass
## Author: Tony Ly

---

# Table of Contents
- [FirstPass](#firstpass)
  - [Author: Tony Ly](#author-tony-ly)
- [Table of Contents](#table-of-contents)
  - [Day 1 (5/18/2021)](#day-1-5182021)
      - [Initialize GitHub Repo](#initialize-github-repo)
      - [Design Tool (Bootstrap vs. Material-UI)](#design-tool-bootstrap-vs-material-ui)
      - [Selected Tools](#selected-tools)
      - [Ideas](#ideas)
  - [Day 2 (5/19/2021)](#day-2-5192021)
      - [Notes](#notes)
      - [TODO](#todo)
- [Blue Ocean Notes](#blue-ocean-notes)
  - [State Management](#state-management)
  - [Clients](#clients)
  - [Background](#background)
  - [Criteria](#criteria)
  - [Goals](#goals)
  - [Constraints](#constraints)
  - [Prioritization](#prioritization)

---

## Day 1 (5/18/2021)

#### Initialize GitHub Repo

![](images/2021-05-18-09-42-20.png)

---

#### Design Tool (Bootstrap vs. Material-UI)
- Deciding on which design tool to use: Bootstrap vs. Material-UI
- - Material-UI vs Bootstrap: A Detailed Comparison ([UX Planet](https://uxplanet.org/material-ui-vs-bootstrap-a-detailed-comparison-8fc9151db5ed)) ([Infographic](https://miro.medium.com/max/700/0*Hrk9TH0yeTiVKjMA.png))
- [React Bootstrap](https://react-bootstrap.github.io/)
  - CSS/HTML/JS framework
  - built by Twitter
  - e.g. Airbnb, Dropbox, Apple Music, Twitter, Coursera
- [Material-UI](https://material-ui.com/)
  - React UI framework
  - built by an unnamed team
  - e.g. Nasa, Amazon, Unity, Google, JPMorgan
- While I am drawn to Material-UI for its Material Design (Google), I am drawn to React Bootstrap for its higher design consistency in UX and interface
  - With this advantage, I expect to be able to focus more on developing content and features
  - Speed is important for the limited time we are afforded in our MVP project

---

#### Selected Tools
- [Create-React-App](https://create-react-app.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Styled Icons](https://styled-icons.js.org/)
- [Express](https://expressjs.com/en/guide/routing.html)
- [Axios](https://www.npmjs.com/package/axios)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/#!)
- [Nord Theme](https://www.nordtheme.com/docs/colors-and-palettes) (color inspiration)
- [CoreUI-React](https://github.com/coreui/coreui-react) (dashboard inspiration)

---

#### Ideas
- details table
  - password last changed date (e.g. "password last changed 32 days ago")
  - password strength (e.g. weak, medium, strong, extreme, bulletproof)
  - crack estimation (e.g. estimated time it will take to crack password, cite source)
- password generators
  - [random.org](https://www.random.org/passwords/)
  - [manytools.org](https://manytools.org/network/password-generator/)

---

## Day 2 (5/19/2021)
#### Notes
- [List Group](https://www.w3schools.com/howto/howto_css_list_group.asp)

```bash
tony@pop-os:~/Nextcloud/HR-SEA16/mvp/firstpass$ openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
Generating a RSA private key
.....+++++
.....................................................................................................................................+++++
writing new private key to 'keytmp.pem'
Enter PEM pass phrase:
Verifying - Enter PEM pass phrase:
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:Washington
Locality Name (eg, city) []:Kirkland
Organization Name (eg, company) [Internet Widgits Pty Ltd]:firstpass
Organizational Unit Name (eg, section) []:firstpass
Common Name (e.g. server FQDN or YOUR name) []:Tony Ly
Email Address []:firstpass
tony@pop-os:~/Nextcloud/HR-SEA16/mvp/firstpass$
```

---


#### TODO
- make password column full width
- jumbotron margin
- https://ui.dev/react-router-v4-pass-props-to-components/
- SSL


---

# Blue Ocean Notes

## State Management
- small app: hooks
- medium app: context
- large app: redux

## Clients
- Company: LeadEvents
- London Buchanan, Stuart
  - manage large scale events
  - coachella
  - large sporting events
  - london buchanan manages the marketing
- Stuart from Australia

## Background
- Event management company
  - many different scale events
  - create branding campaigns
  - has trouble sorting through photos for each event
  - 1000s of photos
  - need a photo finder
  - need to be able to filter through photos that meet certain criteria
  - app will automatically assign tags to the photos
  - "hey circle find me a photo of me holding a dog"
  - goal is to be able to have this tool, so that they can achieve better market *value*?
  - 100s, possibly 1000s, of photos
  - can sort them in the fastest way possible

## Criteria
- clothing
- food
- beverages
- certain landscape
- what's going on in the background

## Goals
- They currently have a website
- They want to be able to access on a mobile device
- Photos uploaded could be users, event organizers,
- Anybody at the event can access & download these photos
- sort by
  - events
  - users
  - users can share with each other
  - friend system
- turn key platform
  - here's this application
  - take photos from within app
  - hey Siri, find me a photo of "a person wearing a red shirt and drinking a beer"
  - users can add tags to the photos
  - use in web browser and photos
  - users have access to their own photos
  - users can share their photos with their friends
- admins can access all photos
- brand colors: yellow, purple
  - market towards millenial customers
- name of app: open to us
- needs a login for each user
- budget for servers: as low as possible
- expectation: should grow as company grows
- scalable
- when not logged in: users should see stock photos, general marketing, event photos
- should be able to share photos with other users, not necessarily a like feature
- JOSH nice haves:
  - when user logs in, be able to upload all the photos and sort them automatically

- user info
  - name
  - phone
  - email address


## Constraints
- develop API in-house
  - minimize use of external APIs

## Prioritization
- users can sort through photos, and add tags
  - nice to have, software will auto tag photos

1. MVP
   1. photo gallery
   2. user system
   3.
2. stretch goals
   - auto-tagging = stretch (Josh)