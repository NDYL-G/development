
document.addEventListener('DOMContentLoaded', () => {
  const sectionList = document.getElementById('section-list');
  const root = location.pathname.includes('/html/') ? '../' : './';

  fetch(root + 'data/sections.json')
    .then(res => res.json())
    .then(sections => {
      sections.forEach(sec => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `${root}html/section.html?section=${sec.id}`;
        a.textContent = `Section ${sec.id}: ${sec.title}`;
        li.appendChild(a);
        sectionList.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Failed to load section list:", error);
      const li = document.createElement('li');
      li.textContent = "Unable to load section list.";
      sectionList.appendChild(li);
    });
});
