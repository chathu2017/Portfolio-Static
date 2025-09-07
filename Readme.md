Personal Portfolio Website for Niwantha Wickramasingha
This is the official repository for my personal portfolio website. It is a fully responsive, single-page application designed to showcase my skills, experience, and projects as a Cloud Engineer. The site features a modern, interactive design with a focus on user experience and visual appeal.

Live Demo: your-live-url.com (Replace with your actual deployed URL)

✨ Features
This portfolio is packed with modern features to create an engaging user experience:

Single-Page Application: All content is accessible on a single page with smooth scrolling navigation.

Modern & Interactive UI:

Glassmorphism Effect: Used on the header, cards, and popups for a sleek, translucent look.

Mouse-Following Gradient: An interactive background gradient that follows the user's cursor.

Animated Hero Section: A glowing hexagonal frame for the profile picture and an animated subtitle.

Fully Responsive Design: The layout seamlessly adapts to all screen sizes, from mobile phones to desktop monitors.

Interactive Sections:

Expandable Career Journey: Each job in the experience section is an accordion that expands to show details.

Project Modal Popup: Clicking a project opens a full-screen modal with a two-column layout, displaying the full image and scrollable details. The modal is fully navigable with mouse clicks or keyboard arrows.

Dynamic Hover Effects:

Project cards "pop up" and display a glowing animated border on hover.

Skills and certification cards have a subtle lift and reflection effect.

Bilingual Support: Easily toggle between English and Korean for all website content.

🛠️ Technologies Used
This project was built from the ground up using modern web technologies:

HTML5: For the core structure and content.

CSS3: For all custom styling, animations, and responsive design.

JavaScript (ES6+): For all interactivity, including the mouse-follow effect, popups, and language toggling.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Font Awesome & Devicon: For high-quality icons.

Google Fonts: For the 'Poppins' typeface.

📂 File Structure
The project is organized into three main files for best practice and easy maintenance:

/
├── index.html      # The main HTML file with all content and structure.
├── style.css       # The custom stylesheet for all animations and layouts.
├── script.js       # The JavaScript file for all interactive features.
└── images/         # Folder for all images (niwantha.png, project images, etc.)

🚀 Setup & Usage
To run this project locally:

Clone the repository:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)

Navigate to the project directory:

cd your-repo-name

Open index.html in your favorite web browser.

🔧 How to Customize
This portfolio is designed to be easily customizable.

1. Personal Information
All text content (names, job titles, descriptions, etc.) can be edited directly in the index.html file within the relevant sections (e.g., #home, #about, #experience).

2. Images
Replace niwantha.png and niwantha-fav.png with your own profile picture and favicon.

Place your project images (e.g., project-01.jpg, project-02.jpg) in the root folder or an images subfolder and update the src attribute in the <img> tags.

3. Adding a New Project
The project popup navigation is fully dynamic. To add a new project:

Navigate to the <section id="projects"> in index.html.

Copy an existing <div class="project-card" ...>...</div> block.

Paste it after the last project block.

Crucially, update the data-index attribute to the next number in the sequence (e.g., data-index="4" if the last one was 3).

Update the image src, title, and the content inside the hidden .project-full-content div.

The navigation in the popup will automatically include your new project.

☁️ Deployment
This is a static website, making it perfect for deployment on services like:

Azure Static Web Apps

GitHub Pages

Netlify

Vercel

Simply upload the index.html, style.css, script.js, and your image files to your chosen host.

📄 License
This project is licensed under the MIT License. See the LICENSE.md file for details.