# Chai & Clicks --- Befikar

**A confidence-building digital literacy experience for older adults and
people who feel less confident using smartphones.**

> **Make mistakes. Understand them. Undo the fear.**

------------------------------------------------------------------------

## Team

**Team name:** Chai & Clicks

  Team member         Responsibility
  ------------------- ----------------------------------------------
  \[Fatima Shahid\]   Frontend and user interface
  
  \[Asra Siddiqui\]   Simulation engine and interaction logic
  
  \[Haseeb ALvi\]   Learning flow, scenarios, and progress logic

## Target Users and Problem

### Target users

-   Older adults who are new to smartphones or digital services.
-   People with low digital confidence or limited experience with common
    phone interactions.
-   Anyone who wants a safe place to practise before using a digital
    feature independently.

### Problem

For someone who is not confident with technology, a simple tap can feel
risky. Users may worry about choosing the wrong option, losing
information, or doing something they cannot undo. This fear can prevent
them from exploring digital tools and building independent skills.

## Solution

Chai & Clicks --- Befikar provides a friendly, low-pressure environment
where users can practise everyday digital interactions through guided
simulations. Users can make a choice, see its consequence, rewind, and
try a different path.

The experience is designed around a simple idea: confidence grows when
people can learn by doing, without the pressure of getting everything
right the first time.

## Core Features

-   **Interactive scenarios:** practise common digital situations
    through guided choices.
-   **Simulated phone experience:** explore actions in a safe practice
    environment.
-   **Rewind and retry:** undo a step in the simulation and explore
    another choice.
-   **Outcome feedback:** understand what a choice does and why it
    matters.
-   **Three language modes:** English, Roman Urdu, and Urdu.
-   **Urdu right-to-left presentation:** display Urdu text in an RTL
    layout.
-   **Progress and badges:** support continued learning and acknowledge
    progress.
-   **Speech support:** provide spoken text where available.
-   **Saved preferences/progress:** retain selected language and
    supported progress between visits.

## Technology Stack

  -----------------------------------------------------------------------
  Technology                          Use
  ----------------------------------- -----------------------------------
  HTML5                               Application structure

  CSS3                                Layout, styling, and responsive
                                      presentation

  Vanilla JavaScript (ES modules)     Application behaviour and modular
                                      code

  Browser storage                     Persist supported user preferences
                                      and progress

  SVG                                 Character and scene illustrations

  Python 3 HTTP server                Local development server
  -----------------------------------------------------------------------

### Dependencies

-   A modern browser with ES module support is required.
-   Python 3 is used only to serve the files locally; it is not an
    application runtime dependency.

If the submitted version adds any external package, API, font, icon set,
or hosted service, list it here with its purpose and source.

## Setup and Run Instructions

### Requirements

-   Python 3
-   A modern web browser
-   The complete project folder, including `index.html`, `css/`, and
    `js/`

### Run locally

1.  Download or clone the project repository.

2.  Open a terminal in the project root --- the directory containing
    `index.html`.

3.  Start the local server:

    **macOS / Linux**

    ``` bash
    python3 -m http.server 8000
    ```

    **Windows**

    ``` bash
    py -m http.server 8000
    ```

4.  Open the following address in your browser:

    <http://localhost:8000>

5.  To stop the server, focus the terminal and press `Ctrl + C`.

**Important:** Do not open `index.html` directly using a `file://` URL.
The project uses JavaScript ES modules, which should be served over
HTTP.

## Project Structure

``` text
project/
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── main.js
    ├── state.js
    ├── i18n.js
    ├── router.js
    ├── game.js
    ├── events.js
    ├── data/
    ├── art/
    ├── components/
    ├── ui/
    └── views/
```

  File or folder     Responsibility
  ------------------ --------------------------------------------------
  `index.html`       Main page shell
  `css/styles.css`   Application styles
  `js/main.js`       Application entry point
  `js/state.js`      Application state and saved progress
  `js/i18n.js`       Language definitions and translation helpers
  `js/router.js`     Page navigation, rendering, and hash routing
  `js/game.js`       Scenario choice and rewind logic
  `js/events.js`     Delegated event handling
  `js/data/`         Scenario, badge, and family content
  `js/art/`          SVG character and scene artwork
  `js/components/`   Reusable interface components
  `js/ui/`           Navigation, toast messages, and speech utilities
  `js/views/`        Individual page views and view registry

## AI Tools and Third-Party Credits

### AI tools

 Tool	How it was used
ChatGPT	Project planning, defining the project structure, and organising the development approach.
Claude	Coding and implementation.



## Known Limitations and Mocked Features

-   **Simulated environment:** interactions take place inside the
    project; they do not control a user's actual phone or change
    settings on a real device.
-   **Scenario coverage:** the experience covers the scenarios included
    in the project and does not represent every app, device, or
    real-world digital service.
-   **No live service connection unless explicitly implemented:** do not
    assume that a simulated payment, message, account, or other action
    connects to a real external service.
-   **Browser-dependent speech:** speech availability and voice quality
    may vary by browser, operating system, and installed voices.
-   **Local progress:** saved progress is associated with the
    browser/device storage used by the app; it is not automatically
    synchronised across devices or accounts.

**Team verification required:** review these points against the final
build. Remove any item that does not apply, and add any other
incomplete, placeholder, or mocked functionality. Clearly identify every
demo-only interaction so judges can distinguish it from a live
integration.

## Final Submission

  -----------------------------------------------------------------------
  Submission detail                   Value
  ----------------------------------- -----------------------------------
  Project                             Chai & Clicks --- Befikar


  Repository URL                      \[https://github.com/FatimaaShahid/Chai-Click-Befikar-\]

  Submission date                     \[31-oct'2026\]
------------------------------------------------------------------------

## Project Goal

Chai & Clicks --- Befikar aims to make digital learning feel
approachable. The goal is not to prevent every mistake; it is to help
people understand that mistakes can be part of learning --- and that
practising in a safe space can build confidence.

**Chai & Clicks --- Befikar: practise with confidence.**
