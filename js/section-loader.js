
function getSectionNumber() {
  const params = new URLSearchParams(window.location.search);
  return params.get('section');
}

function loadSectionData(section) {
  const file = `../data/section${section}-data.json`;
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Section not found");
      return response.json();
    })
    .then(data => {
      document.getElementById('title').textContent = data.title;
      document.getElementById('overview').textContent = data.overview;

      const contentContainer = document.getElementById('levels');
      contentContainer.innerHTML = ''; // Clear any previous content

      data.levels.forEach(level => {
        const section = document.createElement('div');
        section.classList.add('card');

        const heading = document.createElement('h2');
        heading.textContent = `${level.level} Skills`;
        section.appendChild(heading);

        const ul = document.createElement('ul');
        level.skills.forEach(skill => {
          const li = document.createElement('li');
          li.textContent = skill;
          ul.appendChild(li);
        });
        section.appendChild(ul);

        const task = document.createElement('p');
        task.innerHTML = `<strong>Practice Task:</strong> ${level.task}`;
        section.appendChild(task);

        level.downloads.forEach(dl => {
          const link = document.createElement('a');
          link.href = dl.url;
          link.textContent = `📎 ${dl.label}`;
          link.style.display = 'block';
          link.style.marginBottom = '0.5rem';
          section.appendChild(link);
        });

        contentContainer.appendChild(section);
      });

      const sourceInfo = document.getElementById('source-info');
      sourceInfo.innerHTML = `
        <h3>📊 Data Source</h3>
        <p><strong>Source:</strong> <a href="${data.dataSource.url}" target="_blank">${data.dataSource.name}</a></p>
        <p><strong>Last Accessed:</strong> ${data.dataSource.lastAccessed}</p>
        <p><em>${data.dataSource.note}</em></p>
      `;
    })
    .catch(error => {
      document.getElementById('title').textContent = "Section not found";
      document.getElementById('overview').textContent = "Please check the section number in the URL.";
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const section = getSectionNumber();
  if (section) {
    loadSectionData(section);
  } else {
    document.getElementById('title').textContent = "No section selected";
    document.getElementById('overview').textContent = "Please add ?section=1 to the URL.";
  }
});
