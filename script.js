function showProgramInfo(programId) {
    // Скрыть все окна с информацией
    document.querySelectorAll('.program-info').forEach(function(info) {
        info.classList.remove('active');
    });

    // Показать выбранное окно с информацией
    const programInfo = document.getElementById(programId);
    programInfo.classList.add('active');
}
