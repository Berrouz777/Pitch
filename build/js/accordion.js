const accordionBlock = document.querySelector('.faq__list');

const CLOSED_QUESTION_CLASS = 'faq__question--closed';
const CLOSED_ANSWER_CLASS = 'faq__answer--closed';

const getClossedClass = (blocks, blockClass) => {
    if (blocks) {
        blocks.forEach((item) => {
            item.classList.add(blockClass);
        });
    }
}

const toggleAccordionClickHandler = (evt) => {
    const parentQuestion = evt.target.parentNode;
    parentQuestion.classList.toggle(CLOSED_QUESTION_CLASS);
    const answer = parentQuestion.nextElementSibling;
    answer.classList.toggle(CLOSED_ANSWER_CLASS);
    // const currentQuestions = document.querySelectorAll('.faq-list__question');
    // currentQuestions.forEach((element) => {
    //     if (parentQuestion !== element && !element.classList.contains(CLOSED_QUESTION_CLASS)) {
    //         element.classList.toggle(CLOSED_QUESTION_CLASS);
    //         element.nextElementSibling.classList.toggle(CLOSED_ANSWER_CLASS);
    //     }
    // });
};

if (accordionBlock) {
    const accordionToggles = document.querySelectorAll('.faq__button');
    const accordionQuestions = document.querySelectorAll('.faq__question');
    const accordionAnswers = document.querySelectorAll('.faq__answer');

    getClossedClass(accordionQuestions, CLOSED_QUESTION_CLASS);
    getClossedClass(accordionAnswers, CLOSED_ANSWER_CLASS);

    if (accordionToggles) {
        accordionToggles.forEach((toggle) => {
            toggle.addEventListener('click', toggleAccordionClickHandler);
        });
    }
}

export default accordionBlock;