const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profileImg = document.querySelector('#profile_img');
const name = document.querySelector('#name');
const date = document.querySelector('#date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiojEyMDd9&auto-format&fit=crop&w=2102&q=80" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sit?';
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = 'John Doe';
  date.innerHTML = '14 Feb, 2022';

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
