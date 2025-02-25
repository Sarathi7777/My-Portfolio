AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage:"assets/images/techstack-page/tailwind-css-2.png",
    langName:"Tailwind CSS",
    langDesc:"<li>Tailwind CSS is a utility-first CSS framework that enables rapid UI development with pre-defined classes.</li>"
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/mongodb.png",
    langName: "MongoDB",
    langDesc: "<li>MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/github.png",
    langName: "GitHub",
    langDesc: "<li>GitHub is a web-based platform for version control and collaboration that allows developers to store, manage, track, and control changes to their code</li>",
  },
  {
    langImage: "assets/images/techstack-page/numpy.png",
    langName: "NumPy",
    langDesc: "<li>NumPy is a core library for numerical computing in Python, providing powerful support for n-dimensional arrays.</li>",
  },
  {
    langImage:"assets/images/techstack-page/pandas.png",
    langName:"Pandas",
    langDesc:"<li>Pandas is an open-source Python library providing high-performance, easy-to-use data structures and data analysis tools for data manipulation and analysis</li>"
  },
  {
    langImage: "assets/images/techstack-page/django-2.png",
    langName: "Django",
    langDesc: "<li>Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design.</li>",
  },
  {
    langImage: "assets/images/techstack-page/streamlit.png",
    langName: "Streamlit",
    langDesc: "<li>Streamlit is an open-source Python library that makes it easy to create and share custom web apps for machine learning and data science</li>",
  },
  {
    langImage: "assets/images/techstack-page/jenkins.png",
    langName: "Jenkins",
    langDesc: "<li>Jenkins is an open-source automation server used for continuous integration and continuous delivery (CI/CD).</li>",
  },
  {
    langImage: "assets/images/techstack-page/docker.png",
    langName: "Docker",
    langDesc: "<li>Docker is an open-source platform that enables developers to automate the deployment of applications using lightweight, portable containers.</li>",
  },
  {
    langImage: "assets/images/techstack-page/tableau.png",
    langName: "Tableau",
    langDesc: "<li>Tableau is a powerful data visualization tool that helps users analyze and present data through interactive dashboards and reports.</li>",
  },
  {
    langImage:"assets/images/techstack-page/apache-spark.png",
    langName:"Apache Spark",
    langDesc:"<li>Apache Spark is an open-source unified analytics engine for large-scale data processing with built-in modules for SQL, streaming, machine learning, and graph processing</li>"
  },
  {
    langImage:"assets/images/techstack-page/figma.png",
    langName:"Figma",
    langDesc:"<li>Figma is a cloud-based design tool used for UI/UX design, prototyping, and collaboration.</li>"
  },  
  
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
