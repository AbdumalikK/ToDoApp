$(document).ready(function(){
    $('form').submit(function(event) {
        event.preventDefault();

        var title = event.currentTarget['title'].value;
        var time = new Date(event.currentTarget['time'].value).toLocaleString();
        var info = event.currentTarget['info'].value;

        var html = '<tr><i class="fas fa-running fa-1x"></i><td>'+ title + "</td><td>" + time +'</td><td>'+ info +'</td></tr>';
        
        $('tbody').append(html);
        $(this)[0].reset();

    });
});