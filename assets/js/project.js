AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Geo-Location Based Attendance Tracker",
    cardImage: "assets/images/project-page/glbat.png",
    description: "AI-powered attendance tracker using geo-location technology. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "https://medium.com/@sarathi20/revolutionizing-attendance-tracking-with-geo-location-technology-c0d038b10f98",
    Previewlink: "https://glbat.vercel.app/",
    Githublink: "#",
    tags: ["React", "Geo-Location", "Web App"],
    status: ""
  },
  {
    title: "MERN Stack Travel Story Application",
    cardImage: "assets/images/project-page/travel-app.png",
    description: "A travel story sharing platform built with the MERN stack. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "",
    Githublink: "https://github.com/Sarathi7777/Travel-Story-App.git",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    status: "In Development"
  },
  {
    title: "Formula 1 Analysis Season 2023",
    cardImage: "assets/images/project-page/F1-23.png",
    description: "Formula 1 Analysis Season 2023 built using Streamlit. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "https://f1-analysis.streamlit.app/",
    Githublink: "https://github.com/Sarathi7777/Formula-1-Analysis-Season-2023.git",
    tags: ["Streamlit", "Data Analysis"],
    status: ""
  },
  {
    title: "Retrival and Generative Models",
    cardImage: "assets/images/project-page/RGM.png",
    description: "Retrival and Generative Models built using Python. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "",
    Githublink: "https://github.com/Sarathi7777/Retrival-and-Generative-Models.git",
    tags: ["Machine Learning", "Deep Learning"],
    status: ""
  },
  {
    title: "Vehicle Routing Optimization",
    cardImage: "assets/images/project-page/VRO.jpg",
    description:"Vehicle Routing Optimization built using Python. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "https://github.com/Sarathi7777/Vehicle-Routing_Optimization_Problem.git",
    tags: ["Optimization", "Routing"],
    status: ""
  },
  {
    title: "Dimensionality Reduction Skeleton",
    cardImage: "assets/images/project-page/DRS.jpg",
    description: "Dimensionality Reduction Skeleton built using Python. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "https://github.com/Sarathi7777/Dimensionality-Reduction-Skeleton.git",
    tags: ["Data Science", "Machine Learning"],
    status: ""
  },
  {
    title: "Nerual Language Processing model",
    cardImage: "assets/images/project-page/NLP.jpg",
    description: "Nerual Language Processing model built using Python. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "https://github.com/Sarathi7777/Nerual_Language_Processing_model.git",
    tags: ["NLP", "Deep Learning"],
    status: ""
  },
  {
    title: "Milk Quality ML Prediction",
    cardImage: "assets/images/project-page/milk.png",
    description: "Milk Quality Prediction ML Model built using Python. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "https://milk-quality-predictor.streamlit.app/",
    Githublink: "https://github.com/Sarathi7777/Milk-Quality-Prediction-ML-Model.git",
    tags: ["Machine Learning", "Prediction"],
    status: ""
  },
  {
    title: "Diabetes Prediction ML Model",
    cardImage: "assets/images/project-page/diabetes.png",
    description: "Diabetes Prediction ML Model built using Python. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "https://diabetes-predic.streamlit.app/",
    Githublink: "https://github.com/Sarathi7777/Diabetes-Prediction-ML-Model.git",
    tags: ["Machine Learning", "Prediction"],
    status: ""
  },
  {
    title: "Face Recognition",
    cardImage: "assets/images/project-page/facereco.jpg",
    description: "Face Recognition built using Python. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "https://github.com/Sarathi7777/Face-Recognition.git",
    tags: ["Computer Vision", "ML"],
    status: ""
  },
  {
    title: "Formula One Teams Analysis-Tableau",
    cardImage: "assets/images/project-page/F1-teams.png",
    description: "Formula One Teams Analysis built using Tableau. ",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "#",
    tags: ["Data Analysis", "Tableau"],
    status: ""
  },
  {
    title: "AI-Mock Interviewer",
    cardImage: "assets/images/project-page/AI_mock.jpg",
    description: "AI-powered mock interviewer built using JavaScript. Features include real-time updates, secure payment processing, and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "",
    Githublink: "https://github.com/Sarathi7777/AI-Mock-Interviewer.git",
    tags: ["JavaScript", "Web App"],
    status: "In Development"
  },
  // {
  //   title: "Layman-Friendly MRI Reports Generator",
  //   cardImage: "assets/images/project-page/laymanreport.jpg",
  //   description: "#",
  //   tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
  //   Previewlink: "#",
  //   Githublink: "#",
  // },
  {
    title: "Crowdfunding Platform",
    cardImage: "assets/images/project-page/CFP.jpg",
    description: "A crowdfunding platform built with the MERN stack. Features include real-time updates, secure payment processing, and a user-friendly interface.",
    articleLink: "#",
    Previewlink: "",
    Githublink: "https://github.com/Sarathi7777/Crowdfunding_Platform.git",
    tags: ["Web App", "Crowdfunding"],
    status: ""
  },
  {
    title: "College Event Management",
    cardImage: "assets/images/project-page/event.png",
    description: "A college event management system built with the MERN stack. Features include real-time updates, secure payment processing, and a user-friendly interface.",
    articleLink: "#",
    Previewlink: "",
    Githublink: "https://github.com/Sarathi7777/Event_Management.git",
    tags: ["Web App", "Event Management"],
    status: ""
  },
  // {
  //   title: "CalorAI",
  //   cardImage: "assets/images/project-page/food.jpg", // Use a relevant image path
  //   description: "AI-powered nutrition and calorie tracking application using computer vision for food recognition and nutritional analysis. Features real-time food detection, calorie counting, and personalized meal recommendations.",
  //   articleLink: "#",
  //   Previewlink: "#",
  //   Githublink: "#",
  //   tags: ["Python", "PyTorch", "Computer Vision", "React Native", "TensorFlow"],
  //   status: "In Development"
  // },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink, description, tags, status }) => {
    const hasLiveDemo = Previewlink && Previewlink !== "#";
    output += `
      <div class="project-card-new" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
        <div class="project-card-image-wrapper">
          <img src="${cardImage}" alt="${title}" class="project-card-image" />
          ${status ? `<span class="project-status-badge">${status}</span>` : ""}
        </div>
        <div class="project-card-content">
          <h2 class="project-card-title">${title}</h2>
          <p class="project-card-desc">${description}</p>
          <div class="project-card-tags">
            ${(tags || []).map(tag => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
          <div class="project-card-links">
            <a href="${hasLiveDemo ? Previewlink : '#'}" class="project-card-btn project-card-btn-secondary" ${hasLiveDemo ? 'target="_blank"' : 'tabindex="-1" aria-disabled="true"'}>${hasLiveDemo ? 'Live Demo' : 'Coming Soon'}</a>
            <a href="${Githublink || '#'}" class="project-card-btn project-card-btn-primary" ${Githublink && Githublink !== '#' ? 'target="_blank"' : 'tabindex="-1" aria-disabled="true"'}>GitHub</a>
          </div>
        </div>
      </div>
    `;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
