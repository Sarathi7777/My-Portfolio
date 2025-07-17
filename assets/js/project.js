AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Geo-Location Based Attendance Tracker",
    cardImage: "assets/images/project-page/glbat.png",
    description: "AI-powered attendance system leveraging geo-location for real-time tracking, secure payments, and a seamless user experience. ",
    articleLink: "https://medium.com/@sarathi20/revolutionizing-attendance-tracking-with-geo-location-technology-c0d038b10f98",
    Previewlink: "https://glbat.vercel.app/",
    Githublink: "https://github.com/Sarathi7777/Geolocation-Attendance-Tracker.git",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    status: ""
  },
  {
    title: "Nebula GenAI",
    cardImage: "assets/images/project-page/nebula.png",
    description: "A collaborative platform to create, train, and deploy custom AI models, empowering users to innovate with GenAI and Hugging Face integration.",
    tagimg: "#",
    Previewlink: "https://nebula-genai.vercel.app/",
    Githublink: "https://github.com/Sarathi7777/Nebula-GenAI.git",
    tags: ["Python", "GenAI", "Hugging Face"],
    status: "In Development"
  },
  {
    title: "Faceless Youtube Shorts Automation",
    cardImage: "assets/images/project-page/yt3.png",
    description: "Automates the creation and publishing of YouTube Shorts using N8N workflows, streamlining content production for creators.",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "#",
    tags: ["N8N", "OpenAI", "Hugging Face"],
    status: "In Development"
  },
  {
    title: "Sentiwise",
    cardImage: "assets/images/project-page/senti.png",
    description: "A web platform for building, training, and sharing sentiment analysis models, enabling users to extract insights from text data. ",
    tagimg: "#",
    Previewlink: "https://sentiwise.vercel.app/",
    Githublink: "https://github.com/Sarathi7777/Sentiwise.git",
    tags: ["Machine Learning", "Sentiment Analysis", "Web App"],
    status: ""
  },
  {
    title: "MERN Stack Travel Story Application",
    cardImage: "assets/images/project-page/travel-app.png",
    description: "A social platform for sharing travel stories, built with the MERN stack, featuring real-time updates and a user-friendly interface. ",
    articleLink: "#",
    Previewlink: "",
    Githublink: "https://github.com/Sarathi7777/Travel-Story-App.git",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    status: "In Development"
  },
  {
    title: "Formula 1 Analysis Season 2023",
    cardImage: "assets/images/project-page/F1-23.png",
    description: "Interactive Streamlit dashboard analyzing the 2023 Formula 1 season, offering real-time stats and visual insights for F1 fans. ",
    articleLink: "#",
    Previewlink: "https://f1-analysis.streamlit.app/",
    Githublink: "https://github.com/Sarathi7777/Formula-1-Analysis-Season-2023.git",
    tags: ["Streamlit", "Data Analysis"],
    status: ""
  },
  {
    title: "Retrival and Generative Models",
    cardImage: "assets/images/project-page/RGM.png",
    description: "A Python-based toolkit for experimenting with retrieval and generative language models, supporting speech and language processing tasks. ",
    articleLink: "#",
    Previewlink: "",
    Githublink: "https://github.com/Sarathi7777/Retrival-and-Generative-Models.git",
    tags: ["ML", "Speech Language Processing"],
    status: ""
  },
  {
    title: "Vehicle Routing Optimization",
    cardImage: "assets/images/project-page/VRO.jpg",
    description:"Solves complex vehicle routing problems using machine learning, optimizing delivery routes for efficiency and cost savings. ",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "https://github.com/Sarathi7777/Vehicle-Routing_Optimization_Problem.git",
    tags: ["Python", "Machine Learning"],
    status: ""
  },
  {
    title: "Dimensionality Reduction Skeleton",
    cardImage: "assets/images/project-page/DRS.jpg",
    description: "A Python framework for applying and visualizing dimensionality reduction techniques on high-dimensional datasets. ",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "https://github.com/Sarathi7777/Dimensionality-Reduction-Skeleton.git",
    tags: ["Python", "Machine Learning"],
    status: ""
  },
  {
    title: "Nerual Language Processing model",
    cardImage: "assets/images/project-page/NLP.jpg",
    description: "Deep learning model for advanced natural language processing tasks, including text classification and language understanding. ",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "https://github.com/Sarathi7777/Nerual_Language_Processing_model.git",
    tags: ["NLP", "Deep Learning"],
    status: ""
  },
  {
    title: "Milk Quality ML Prediction",
    cardImage: "assets/images/project-page/milk.png",
    description: "Streamlit app that predicts milk quality using machine learning, providing instant results and actionable insights for producers. ",
    articleLink: "#",
    Previewlink: "https://milk-quality-predictor.streamlit.app/",
    Githublink: "https://github.com/Sarathi7777/Milk-Quality-Prediction-ML-Model.git",
    tags: ["Machine Learning", "Streamlit", "Python"],
    status: ""
  },
  {
    title: "Diabetes Prediction ML Model",
    cardImage: "assets/images/project-page/diabetes.png",
    description: "A user-friendly Streamlit tool for predicting diabetes risk based on health data, leveraging machine learning for early detection. ",
    articleLink: "#",
    Previewlink: "https://diabetes-predic.streamlit.app/",
    Githublink: "https://github.com/Sarathi7777/Diabetes-Prediction-ML-Model.git",
    tags: ["Machine Learning", "Streamlit"],
    status: ""
  },
  {
    title: "Face Recognition",
    cardImage: "assets/images/project-page/facereco.jpg",
    description: "Python-based face recognition system integrating computer vision and MySQL for secure, real-time identification. ",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "https://github.com/Sarathi7777/Face-Recognition.git",
    tags: ["Python", "Computer Vision", "MySQL"],
    status: ""
  },
  {
    title: "Formula One Teams Analysis-Tableau",
    cardImage: "assets/images/project-page/F1-teams.png",
    description: "Tableau dashboard offering in-depth analysis of Formula One teams, visualizing performance metrics and trends. ",
    articleLink: "#",
    Previewlink: "#",
    Githublink: "#",
    tags: ["Data Analysis", "Tableau"],
    status: ""
  },
  {
    title: "AI-Mock Interviewer",
    cardImage: "assets/images/project-page/AI_mock.jpg",
    description: "AI-driven mock interview platform simulating real interview scenarios, providing instant feedback and preparation tips. ",
    articleLink: "#",
    Previewlink: "",
    Githublink: "https://github.com/Sarathi7777/AI-Mock-Interviewer.git",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    status: "In Development"
  },
  {
    title: "Crowdfunding Platform",
    cardImage: "assets/images/project-page/CFP.jpg",
    description: "A secure and intuitive crowdfunding platform built with Django, enabling users to launch and support fundraising campaigns.",
    articleLink: "#",
    Previewlink: "",
    Githublink: "https://github.com/Sarathi7777/Crowdfunding_Platform.git",
    tags: ["Python", "Django", "HTML", "CSS"],
    status: ""
  },
  {
    title: "College Event Management",
    cardImage: "assets/images/project-page/event.png",
    description: "A comprehensive event management system for colleges, streamlining event planning, registration, and communication.",
    articleLink: "#",
    Previewlink: "",
    Githublink: "https://github.com/Sarathi7777/Event_Management.git",
    tags: ["React.js", "Django", "HTML", "CSS"],
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
