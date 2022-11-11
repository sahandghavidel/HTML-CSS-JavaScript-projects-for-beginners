document.getElementById("generate-project").addEventListener(
    "click",
    function() {
      let project = projects[Math.floor(Math.random() * projects.length)];
      let link = document.getElementById('new-project')

      if (project.link !== "") {
        link.innerHTML = `
          <a href="${project.link}" target="_blank">${project.title}</a>
        `;
      } else {
        link.innerHTML = `${project.title}`;
      };
    }
  );