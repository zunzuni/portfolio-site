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
const aboutTextH1 =  document.querySelectorAll('.section1-text .section1-text-top span')
const aboutTextP =  document.querySelector('.section1-text .section1-text-bottom')
const circle =  document.querySelector('.circle')


const sectionOneLine = document.querySelectorAll('.section1-line span')
for (let i = 0; i < sectionOneLine.length; i++) {
  sectionOneLine[i].style.left = `${i * 2.7 }%`
}


window.addEventListener('scroll', () =>{
  
  aboutTextTop.style.left = `-${window.scrollY / 1}px`
  aboutTextP.style.left = `${window.scrollY / 1}px`
  // circle.style.boxShadow = `0 0 ${window.scrollY / 7}px ${window.scrollY / 7}px`
})

window.addEventListener('load', () => {
  aboutTextH1.forEach(element => {
    element.classList.add('loading')
  });
  sectionOneLine.forEach(element => {
    element.classList.add('loading')
  });
  aboutTextP.classList.add('loading')
})

//section1 text event




// const section3 = document.querySelector('.section1')
// const t = section3.getBoundingClientRect()
// console.log(t)
// window.addEventListener('scroll', () => {
//   if (window.scrollY > t.bottom / 2) {
//     console.log('asd')
//   }
// })

const one = document.querySelector('.section1')
const oneone = one.getBoundingClientRect()
const two = document.querySelector('.section2')
const twotwo = two.getBoundingClientRect()
const thr = document.querySelector('.section3')
const thrthr = thr.getBoundingClientRect()
const ii = document.querySelector('.ii')
const iii = document.querySelector('.iii')
// const iiiTop = ii.getBoundingClientRect()
console.log(oneone)

const iiiTop = window.pageYOffset + ii.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
  console.log(window.scrollY)
  console.log("ss:",iiiTop)
  if (window.scrollY > iiiTop) {
    iii.style.left = `-${window.scrollY - iiiTop}px`
    iii.style.position = 'fixed'
  } else {
    iii.style.position = 'static'
  }
})
console.log(oneone.height)
    console.log(twotwo.height)
    console.log(thrthr.height)