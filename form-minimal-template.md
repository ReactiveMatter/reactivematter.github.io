---
title: Website using template
layout: page
---

<div class="container url-form">
<p>If your website is using Minimal or Retro template for Dokuwiki, you may share your website with the developer.</p>
<div class="flex space-between">
<input id="url" placeholder="Your website url" required></input>
</div>
</div>
<div id="url-form-message" class="mb-3">
</div>
<span id="submit-url" class="unselectable">Submit comment</span>

<script>
jQuery("body").on("click", "#submit-url",function(){
jQuery("comment-form-message").html("");
let data = {};
data.url = jQuery("#url").val().trim();
data._template = "table";

if(data.url.length == 0)
{
    jQuery("#url-form-message").html('<p style="color:red">Please enter all required fields</p>');
    return
}


let code = `Submitting URL`;
jQuery("#url-form-message").html(code);
jQuery("#submit-url").hide();

jQuery.post("https://formsubmit.co/ajax/reactivematter@protonmail.com", data, function(response){
    console.log(response);
    if(response.success == "true")
    {
        jQuery("#url-form-message").html('');
        jQuery(".url-form").html('<p style="color:green">You website has been submitted successfully</p><p class="text-muted">Thankyou for taking out time and sharing your website.</p>');
        setTimeout(function() {
        jQuery(".url-form").remove();
        }, 7000);
    }
    else
    {
        jQuery("#url-form-message").html('<p style="color:red">Some error occured while submitting website</p>');
        jQuery("#submit-url").show();
    }

}, 'json');
    
});
</script>