const summaries = document.querySelectorAll('summary');

summaries.forEach((summary) => {
    summary.addEventListener('click', () => {
        // Fecha todos os outros acordeões
        summaries.forEach((otherSummary) => {
            if (otherSummary !== summary) {
                otherSummary.parentElement.removeAttribute('open');
            }
        });
    });
});