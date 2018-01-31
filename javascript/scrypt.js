function SetImg(selected_url)
{
    var item = document.getElementById('preview');
    item.src=selected_url;
}
$(document).ready(function(){
    $('#head').fadeTo(2000,0.3,function(){
        $('html, body').animate(
            {scrollTop:$('#content').offset().top},2000
        );
        
    });
});