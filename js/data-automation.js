
fetch('../data/section5-storing-automation.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('title').textContent = data.title;
    document.getElementById('overview').textContent = data.overview;

    const contentContainer = document.getElementById('levels');

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
    console.error('Error loading data:', error);
    document.getElementById('title').textContent = "Error loading section content.";
  });
