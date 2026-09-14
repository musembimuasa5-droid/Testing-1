const commandRows = document.querySelectorAll('.command-row');
const commandFeedback = document.querySelector('.command-feedback');

commandRows.forEach((row) => {
  row.addEventListener('click', async () => {
    const command = row.dataset.command;
    try {
      await navigator.clipboard.writeText(command);
      commandFeedback.textContent = `${command} copied to your clipboard.`;
    } catch {
      commandFeedback.textContent = `Select and copy: ${command}`;
    }
    commandRows.forEach((item) => item.classList.remove('copied'));
    row.classList.add('copied');
    window.setTimeout(() => row.classList.remove('copied'), 900);
  });

  row.addEventListener('mouseenter', () => {
    commandFeedback.textContent = row.dataset.detail;
  });

  row.addEventListener('mouseleave', () => {
    commandFeedback.textContent = 'Click any command to copy it.';
  });
});

const quizOptions = document.querySelectorAll('.quiz-option');
const quizResult = document.querySelector('.quiz-result');

quizOptions.forEach((option) => {
  option.addEventListener('click', () => {
    quizOptions.forEach((item) => item.classList.remove('selected', 'wrong'));
    option.classList.add(option.dataset.answer === 'correct' ? 'selected' : 'wrong');
    quizResult.textContent = option.dataset.answer === 'correct'
      ? 'Exactly. Git works right on your machine.'
      : 'Almost. GitHub is online; Git is the offline one.';
  });
});
