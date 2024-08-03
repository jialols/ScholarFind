document.addEventListener('DOMContentLoaded', () => {
  showPage('homepage');
});

function showPage(pageId) {
  // Remove 'active' class from all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  // Add 'active' class to the selected page if it exists
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
  } else {
    console.error(`Page with id ${pageId} does not exist`);
  }
}

// Profile Data
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  bio: 'A dedicated student with a passion for technology and community service.'
};

// Scholarships Data
const scholarships = [
  { id: 1, name: 'Academic Excellence Scholarship', status: 'Awarded' },
  { id: 2, name: 'Community Service Scholarship', status: 'Pending' },
  { id: 3, name: 'STEM Scholarship', status: 'Denied' }
];

// Achievements Data
const achievements = [
  "Dean's List - Fall 2022",
  'Volunteer of the Year - 2023',
  'First Place in Regional Science Fair - 2024'
];
const ment = [
  { id: 1, name: 'Mentor 1', email: 'mentor1@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Mentor 2', email: 'mentor2@example.com', phone: '987-654-3210' },
  { id: 3, name: 'Mentor 3', email: 'mentor3@example.com', phone: '555-555-5555' }
]

// Display Profile Data
document.getElementById('name').textContent = user.name;
document.getElementById('email').textContent = user.email;
document.getElementById('phone').textContent = user.phone;
document.getElementById('bio').textContent = user.bio;

// Display Scholarships Data
const scholarshipList = document.getElementById('scholarship-list');
scholarships.forEach(scholarship => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${scholarship.name}</strong> - ${scholarship.status}`;
  scholarshipList.appendChild(li);
});

// Display Achievements Data
const achievementList = document.getElementById('achievement-list');
achievements.forEach(achievement => {
  const li = document.createElement('li');
  li.textContent = achievement;
  achievementList.appendChild(li);
});

async function searchScholarships() {
  var query = document.getElementById('searchInput').value;
  var response = await fetch(`https://api.scholarshipportal.com/scholarships?query=${query}`);
  var scholarships = await response.json();
  displayScholarships(scholarships);
}

function displayScholarships(scholarships) {
  var list = document.getElementById('scholarship-list');
  list.innerHTML = '';

  scholarships.forEach(scholarship => {
      var item = document.createElement('div');
      item.className = 'scholarship-item';
      item.innerHTML = `<h3>${scholarship.name}</h3><p>${scholarship.description}</p>`;
      list.appendChild(item);
  });
}

