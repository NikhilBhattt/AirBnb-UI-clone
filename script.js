const nav = document.getElementById('nav');
const search = document.getElementById('search');
const toChangeTexts = document.querySelectorAll('.change-text');
const searchIcon = document.querySelector('.search-icon');
const normal_texts = ['Search destinations', 'Add dates'];
const texts = ['Anywhere', 'Any week'];

function updateSearchBarOnScroll() {
  toChangeTexts.forEach((ele, idx) => {
    ele.textContent = texts[idx];
    ele.style.textAlign = 'center';
    ele.parentElement.classList.add('text-slate-900', 'font-semibold', 'w-1/3');
    ele.parentElement.classList.remove('text-slate-500', 'w-1/6', 'rounded-full', 'hover:bg-slate-100');
    ele.parentElement.parentElement.classList.add('*:py-1', '*:px-3', 'py-2', 'divide-x-2');
    ele.parentElement.parentElement.classList.remove('*:py-2', '*:px-6');
  });
  searchIcon.classList.add('size-10', 'top-[6px]');
  searchIcon.classList.remove('size-12', 'top-2');
  let thirdAction = toChangeTexts[0].parentElement.parentElement.children[3];
  thirdAction.classList.remove('hover:bg-slate-100', 'rounded-full');
  thirdAction.classList.add('mr-8');
}

function updateSearchBarToNormal() {
  toChangeTexts.forEach((ele, idx) => {
    ele.textContent = normal_texts[idx];
    ele.style.textAlign = 'start';
    ele.parentElement.classList.add('text-slate-500', 'w-1/6', 'rounded-full', 'hover:bg-slate-100');
    ele.parentElement.classList.remove('text-slate-900', 'font-semibold', 'w-1/3');
    ele.parentElement.parentElement.classList.add('*:py-2', '*:px-6');
    ele.parentElement.parentElement.classList.remove('*:py-1', '*:px-3', 'py-2', 'divide-x-2');
  })
  toChangeTexts[0].parentElement.classList.add('w-1/3');
  toChangeTexts[0].parentElement.classList.remove('w-1/6');
  searchIcon.classList.add('size-12', 'top-2');
  searchIcon.classList.remove('size-10', 'top-[6px]');
  let thirdAction = toChangeTexts[0].parentElement.parentElement.children[3];
  thirdAction.classList.add('hover:bg-slate-100', 'rounded-full');
  thirdAction.classList.remove('mr-8');
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    nav.classList.add('fade-out-nav');
    search.classList.add('stick-to-nav');
    let elements = document.querySelectorAll('.stick-to-nav .div .hide-on-scroll');
    elements.forEach(element => {
      element.classList.remove('flex');
      element.classList.add('hidden');
    });

    updateSearchBarOnScroll();
  } else {
    updateSearchBarToNormal();
    let elements = document.querySelectorAll('.stick-to-nav .div .hide-on-scroll');
    elements.forEach(element => {
      element.classList.add('flex');
      element.classList.remove('hidden');
    });

    nav.classList.remove('fade-out-nav');
    search.classList.remove('stick-to-nav');
  }
});