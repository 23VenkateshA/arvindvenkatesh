const text = "hi, i'm arvind.";
let index = 0;

function type() {
  const element = document.getElementById("typing-text");
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // typing speed in ms
  }
}

document.addEventListener("DOMContentLoaded", type);

function showJob(jobId) {
  const jobs = ['simpligov', 'bms'];
  const items = document.querySelectorAll('.timeline-item');

  jobs.forEach(id => {
    const jobSection = document.getElementById(id);
    if (id === jobId) {
      jobSection.classList.remove('hidden');
    } else {
      jobSection.classList.add('hidden');
    }
  });

  items.forEach(item => {
    item.classList.remove('active');
  });

  const activeItem = Array.from(items).find(el => el.innerText.includes(jobId === 'simpligov' ? 'SimpliGov' : 'Bristol Myers Squibb'));
  if (activeItem) {
    activeItem.classList.add('active');
  }
}
function showProject(projectId) {
  const details = document.querySelectorAll("#projects .job-details");
  const items = document.querySelectorAll("#projects .timeline-item");

  details.forEach((el) => el.classList.add("hidden"));
  items.forEach((el) => el.classList.remove("active"));

  document.getElementById(projectId).classList.remove("hidden");
  event.currentTarget.classList.add("active");
}

// LIGHTBOX
document.querySelectorAll('.lightbox').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const src = link.getAttribute('href');
    const overlay = document.getElementById('lightbox-overlay');
    const image = document.getElementById('lightbox-image');
    image.src = src;
    overlay.classList.remove('hidden');
  });
});

document.getElementById('lightbox-overlay').addEventListener('click', () => {
  document.getElementById('lightbox-overlay').classList.add('hidden');
});
