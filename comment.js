jQuery("#comment").click(function(){
if(jQuery(".comment-form").length != 0)
{   
    if(jQuery(".comment-form").hasClass("closed"))
    {
        jQuery("head").append(`<style id="temp">footer{position:sticky;bottom:0px;</style>`);
        jQuery(".comment-form").slideToggle(200, function(){
        jQuery("#temp").remove();
        window.scrollTo(0, document.body.scrollHeight);
        jQuery(".comment-form").removeClass("closed");
    });
    }
    else
    {
        jQuery(".comment-form").slideToggle(200);
        jQuery(".comment-form").addClass("closed");
    }
   
    return;
}

let url = window.location.href;

chtml = `
<div class="container comment-form" style="display:none">
<p>You can comment about this page directly to me using this form.</p>
<div class="flex space-between">
<input id="name" placeholder="Your name" required></input>
<input id="uniquekey" placeholder="Your uniquekey" required></input>
</div>
<div style="font-size:0.8em">Unique key and your name (together) will help me to uniquely identify you. It is not a password, just a unique word or phrase. 
You can choose any word as your unique key.</div>
<div class="flex space-between">
<input id="email" placeholder="Your email (optional)"></input>
<input id="url" disabled value="`+url+`"></input>
</div>
<textarea id="comment-content" required placeholder="Your comment"></textarea>
<div id="comment-form-message" class="mb-3">
</div>
<span id="submit-comment" class="unselectable">Submit comment</span>
`;
jQuery("footer .container").before(chtml);

jQuery("head").append(`<style id="temp">footer{position:sticky;bottom:0px;</style>`);
jQuery(".comment-form").slideToggle(200, function(){
    jQuery("#temp").remove();
    window.scrollTo(0, document.body.scrollHeight);
});

});

console.log("Local script is running");


jQuery("body").on("click", "#submit-comment",function(){
jQuery("comment-form-message").html("");
let data = {};
data.name = jQuery("#name").val().trim();
data.uniquekey = jQuery("#uniquekey").val().trim();
data.email = jQuery("#email").val().trim();
data.comment = jQuery("#comment-content").val().trim();
data.posturl = jQuery("#url").val().trim();
data.action = "comment";
data._template = "table";

if(data.name.length == 0 || data.uniquekey.length == 0 || data.comment.length == 0 || data.posturl.length == 0 )
{
    jQuery("#comment-form-message").html('<p style="color:red">Please enter all required fields</p>');
    return
}

if(data.comment.length > 5*800)
{
    jQuery("#comment-form-message").html('<p style="color:red">You comment is too long.</p>');
    return
}


jQuery("#submit-comment").hide();

jQuery.post("https://formsubmit.co/reactivematter@protonmail.com", data, function(response){
    console.log(response);
}, 'json');

jQuery(".comment-form").html('<p style="color:green">You comment has been submitted successfully</p><p class="text-muted">Thankyou for taking out time and sharing your comments with me.</p>');
setTimeout(function() {
jQuery(".comment-form").remove();
}, 7000);
    
});