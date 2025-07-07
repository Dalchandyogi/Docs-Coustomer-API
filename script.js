const links = document.querySelectorAll('.nav-link');

    function setActive(link) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setActive(link);
        }
      });
    });

    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY || document.documentElement.scrollTop;
      links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (
          section &&
          section.offsetTop <= scrollPos + 100 &&
          section.offsetTop + section.offsetHeight > scrollPos + 100
        ) {
          setActive(link);
        }
      });
    });

    // function switchTab(button, tabId) {
    //   const buttons = document.querySelectorAll('.tab-buttons button');
    //   const tabs = document.querySelectorAll('.tab-content');
    //   buttons.forEach(btn => btn.classList.remove('active'));
    //   tabs.forEach(tab => tab.classList.remove('active'));
    //   button.classList.add('active');
    //   document.getElementById(tabId).classList.add('active');
    // }

    function switchTab(button, tabId) {
    // Deactivate all tab buttons in the current group
    const tabButtons = button.closest('.tab-buttons').querySelectorAll('button');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Deactivate all tab contents in the current group
    const tabContents = button.closest('.tabs').querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Activate the clicked button and its corresponding tab content
    button.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}