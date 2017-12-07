
// $("#sponsorCarousel").carousel('pause');

jQuery.ajax({
     url: "demo-test.html", dataType: "html"
}).done(function( responseHtml ) {
     $("#div1").html(responseHtml);
});
