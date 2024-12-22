const sideMenu = document.getElementById('sideMenu');

function openMenu() {
  sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
  sideMenu.style.transform = 'translateX(16rem)';
}


function updateActiveLink() {
  const currentHash = window.location.hash;

  // Select all navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  // Loop through each link and check if its href matches the currentHash
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentHash) {
      // debugger
      link.classList.add("text-red-900", "font-bolder"); // Add active link color
      link.classList.remove("text-gray-500"); // Remove default color
    } else {
      link.classList.add("text-gray-500")
      link.classList.remove("text-red-900")
    }
  });
}

updateActiveLink()

window.addEventListener("hashchange", updateActiveLink)


function updateActiveScroll() {
  const navLinks = document.querySelectorAll(".nav-link");

  // Create an Intersection Observer to observe sections
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`.nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
          // Add active class
          link.classList.add("text-red-900");
          link.classList.remove("text-gray-500");
        } else {
          // Remove active class
          link.classList.remove("text-red-900");
          link.classList.add("text-gray-500");
        }
      });
    },
    {
      threshold: 0.6 // Trigger when 60% of the section is in views
    }
  );

  // Observe each section
  document.querySelectorAll("div").forEach(div => {
    observer.observe(div);
  });
}
updateActiveScroll()

window.addEventListener("hashchange", updateActiveScroll)
