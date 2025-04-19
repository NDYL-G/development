fetch('../data/sections.json')
  .then(res => res.json())
  .then(sections => {
    const dropdown = document.querySelector('.nav-dropdown-content');
    if (!dropdown) return;

    sections.forEach(sec => {
      const a = document.createElement('a');
      a.href = `../html/section.html?section=${sec.id}`;
      a.textContent = `Section ${sec.id}: ${sec.title}`;
      dropdown.appendChild(a);
    });
  });
