const prev8tns = document.querySelectorAll('.btn-pre');
const next8tns = document.querySelectorAll(('.btn-next'));

const progress = document.getElementById('progress');

const formSteps = document.querySelectorAll('.form-step');

const progressSteps = document.querySelectorAll('.progress-step');

let formStepsNum = 0;

// Clicks next
next8tns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum++;
        updateFormStep(); 
        updateProgressBar();
    });
})

// Clicks previous
prev8tns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum--;
        updateFormStep(); 
        updateProgressBar();
    });
})


function updateFormStep() {
    formSteps.forEach(formStep => {
        formStep.classList.contains('active') && formStep.classList.remove('active')
    });
    formSteps[formStepsNum].classList.add('active')
}

function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add('active')
        } else {
            progressStep.classList.remove('active')
        }
    });

    const progressActive = document.querySelectorAll('.progress-step.active');

    progress.style.width = (progressActive.length -1) / (progressSteps.length -1) * 100 + '%'
}