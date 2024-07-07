const form = document.querySelector(`.flex-group`);
const btn = document.querySelectorAll(`.circle`);
const changingText = document.querySelector(`.container`);
const nextPage = document.querySelector(`[data-js-score-page]`);
const ratingPage = document.querySelector(`[data-js-rating-page]`);
const wrapper = document.querySelector(`.wrapper`);



form.addEventListener(`submit`, sendScore);

nextPage.addEventListener(`click`,goingToGithub);

function goingToGithub(e){
    window.open(`https://github.com/dcdanny945/interactive-rating-component`);
}




function sendScore(e){
    const selectedScore = new FormData(e.target).get(`score`);
    if (selectedScore){
        ratingPage.innerHTML = nextPage.innerHTML.replace(`{x}`,selectedScore);

    }
    console.log(selectedScore);
}
