Breathing Exercise App
Description
The Breathing Exercise App is a simple web-based application designed to guide users through a short breathing exercise. The app uses a visual animation and textual cues to indicate the three breathing phases: inhale, hold, and exhale.
The project focuses on interaction design, animation timing, and proper state management using HTML, CSS, and JavaScript. The interface is intentionally minimal to allow users to quickly start a breathing session without unnecessary complexity.

Getting Started
This project does not require any external dependencies or build tools.

Requirements
A modern web browser (Chrome, Firefox, Safari, or Edge)
Installation
Clone or download the repository.
Open the index.html file in a web browser.
No additional setup is required.

Usage
Open the application in your browser.
Click the play button on the landing screen.
Select a breathing duration (3, 4, or 5 seconds).
Press the start button to begin the exercise.
Follow the on-screen instructions:
Inhale while the water animation rises
Hold while the animation stays still
Exhale while the animation falls
You can retry the exercise at any moment or return to the home screen.
After completion, a congratulation screen is shown.

Implementation Details
Animation and State Management
The breathing animation is controlled using JavaScript timers (setTimeout) combined with CSS transitions. During development, an issue occurred where animations did not reset correctly when the user retried or restarted the exercise.

Identified Problem
Multiple timers continued running in the background after navigation or retry actions.
This caused overlapping animations and inconsistent UI behavior.

Implemented Solution
All animation-related timers are tracked centrally.
Timers are explicitly cleared when:
The user retries the exercise
The user navigates back to the home screen
The exercise completes
A reset function restores the animation state before starting a new session.
This approach ensures predictable behavior and prevents unintended side effects.

Project Structure
/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js

Technologies Used
HTML for structure and screen layout
CSS for styling, layout, and transitions
JavaScript for interaction logic, animation timing, and state handling
Font Awesome for icons

Possible Improvements
Allow users to customize the number of breathing cycles
Add sound or vibration feedback
Improve accessibility (contrast, font size options)
Convert the application into a Progressive Web App (PWA)

Project Status
The project is complete and stable. Further improvements are optional and not required for core functionality.

Author
This project was created as part of a frontend development exercise focusing on animation timing, interaction design, and state management.