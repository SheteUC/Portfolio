const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition() {
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let current = document.querySelectorAll('.active-btn');
            current[0].className = current[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            //remove active class from all sections
            sectBtns.forEach((btn) => { 
                btn.classList.remove('active'); 
            })

            e.target.classList.add('active');

            //hide all sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pageTransition();

let downloadButton = document.querySelector('.btn-icon');
if(downloadButton) {    
  downloadButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    /* Start loading process. */
    downloadButton.classList.add('loading');
    
    /* Set delay before switching from loading to success. */
    window.setTimeout(function() {
      downloadButton.classList.remove('loading');
      downloadButton.classList.add('success');
    }, 3000);
    
    /* Reset animation. */
    window.setTimeout(function() {
      downloadButton.classList.remove('success');
    }, 8000);
  });
};