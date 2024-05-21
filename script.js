// dropdown

const dropdowns = document.querySelectorAll(".dropdown");
const nextButton = document.querySelector('#nextButton')
const page2 = document.querySelector('.page2')
const page1 = document.querySelector('.page1')


dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", (e) => {
    console.log(e);
    
      selected.innerHTML = option.innerHTML;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});



nextButton.addEventListener('click',(e)=>{
    page2.style.display = 'flex'
    gsap.to('.page2',{
      opacity: 1,
        left:0
    })
    gsap.to('.page1',{
      opacity: 0,
      left:-1200
  })
}
)