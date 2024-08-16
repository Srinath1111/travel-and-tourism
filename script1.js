$(document).ready(function () {
    $('#add-task').click(function () {
        const taskText = $('#task').val();
        if (taskText.trim() !== '') {
            const taskItem = $('<li class="task-item"></li>');
            taskItem.text(taskText);
            $('#task-list').append(taskItem);
            $('#task').val('');
        }
    });

    $(document).on('click', '.task-item', function () {
        $(this).toggleClass('complete');
    });

    $(document).on('dblclick', '.task-item', function () {
        $(this).remove();
    });
});
