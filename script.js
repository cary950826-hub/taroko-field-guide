const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const geoSteps = document.querySelectorAll('.geo-step');
const geoDetail = document.querySelector('#geo-detail');
geoSteps.forEach((step) => {
  step.addEventListener('click', () => {
    geoSteps.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    step.classList.add('active');
    step.setAttribute('aria-selected', 'true');
    geoDetail.querySelector('span').textContent = step.dataset.number;
    geoDetail.querySelector('h4').textContent = step.dataset.title;
    geoDetail.querySelector('p').textContent = step.dataset.copy;
  });
});

document.querySelectorAll('.spot-button').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.classList.toggle('expanded');
    button.textContent = expanded
      ? `${button.dataset.spot}：${button.dataset.detail} −`
      : '展開田野筆記 +';
  });
});

const missions = document.querySelectorAll('.mission-card');
const missionResult = document.querySelector('.mission-result');
missions.forEach((mission) => {
  mission.addEventListener('click', () => {
    missions.forEach((item) => {
      item.classList.remove('is-selected');
      item.setAttribute('aria-pressed', 'false');
    });
    mission.classList.add('is-selected');
    mission.setAttribute('aria-pressed', 'true');
    missionResult.querySelector('h3').textContent = mission.dataset.mission;
    missionResult.querySelector('span').textContent = mission.dataset.answer;
  });
});

const packingItems = document.querySelectorAll('.packing-options input');
const packingCount = document.querySelector('#packing-count');
packingItems.forEach((item) => {
  item.addEventListener('change', () => {
    const checked = document.querySelectorAll('.packing-options input:checked').length;
    packingCount.textContent = `${checked} / ${packingItems.length}`;
  });
});
