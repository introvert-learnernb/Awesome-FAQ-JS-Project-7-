const btns = document.querySelectorAll('.question__btn');
const questions = document.querySelectorAll('.question');

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const question = e.currentTarget.parentElement.parentElement;
        questions.forEach((item)=>{
            if(item !== question){
                item.classList.remove('show__answer');
            }
        })
        question.classList.toggle('show__answer');
    })
})