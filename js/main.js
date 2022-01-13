const hamBtn = document.querySelector('.ham-btn')
const headerInner = document.querySelector('header .inner')
const lnb = document.querySelectorAll('header .inner .lnb li a')

lnb.forEach(element => {
  element.addEventListener('click', () => {
    hamBtn.classList.remove('ham-clicked')
    headerInner.classList.remove('ham-clicked')
  })
});

hamBtn.addEventListener('click', () => {
  hamBtn.classList.toggle('ham-clicked')
  headerInner.classList.toggle('ham-clicked')
})

//mobile menu 

const aboutTextTop =  document.querySelector('.section1-text .section1-text-top')
const aboutTextH1 =  document.querySelectorAll('.section1-text .section1-text-top h1 span')
const aboutTextH11 =  document.querySelectorAll('.section1-text .section1-text-top .section1-text-top-1')
const aboutTextH12 =  document.querySelectorAll('.section1-text .section1-text-top .section1-text-top-2')
const aboutTextP =  document.querySelector('.section1-text .section1-text-bottom')

const sectionOneLine = document.querySelectorAll('.section1-line span')
for (let i = 0; i < sectionOneLine.length; i++) {
  sectionOneLine[i].style.left = `${i * 2.7 }%`
}

window.addEventListener('scroll', () =>{
  aboutTextP.style.left = `${window.scrollY / 1}px`
})

window.addEventListener('scroll',() => {
  aboutTextH11.forEach(element => {
    element.style.right = `${-100 + window.scrollY / 1.2}px`
  });
})

window.addEventListener('scroll',() => {
  aboutTextH12.forEach(element => {
    element.style.left = `${-100 + window.scrollY / 1.2}px`
  });
})
// scroll text-row event
const section1StartLine = document.querySelector('.section1-start-line')
window.addEventListener('load', () => {
  aboutTextH1.forEach(element => {
    element.classList.add('loading')
  });
  sectionOneLine.forEach(element => {
    element.classList.add('loading')
  });
  aboutTextP.classList.add('loading')
  section1StartLine.classList.add('loading')
  setTimeout(() => {
    section1StartLine.classList.add('loading-end')
  }, 1000);
})

//section1 text event
const loadingImg = document.querySelector('.loading-img')
window.addEventListener('load',() => {
  loadingImg.classList.add('load')
})


document.querySelector('.year').textContent = new Date().getFullYear()
//year