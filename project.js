

function searchWikipedia () {


$(document).ready(function(){
 
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $.ajax({
        type: "GET",
       // url: "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=description&list=&generator=search&gsrsearch=ass&callback=?",
        url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=description&list=&generator=search&gsrsearch="+document.getElementById("what").value +  "&callback=?",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          
       var resultsArr =  Object.entries(data.query.pages);
          console.log(resultsArr);
          
       for (var i = 0; i < resultsArr.length; i++) {
         
 
         
        $("#container").append("<div id = 'subcontainer'> <a id = 'link' target = '_blank' href = 'https://en.m.wikipedia.org/?curid=" + resultsArr[i][0] + "'>" + "<p id = 'title'>" +  resultsArr[i][1].title +  "</p>" + "<p id = 'description'>" + resultsArr[i][1].description.charAt(0).toUpperCase() + resultsArr[i][1].description.slice(1) + "</p>" + " </a> </div>"); 
         
      // document.getElementById('link')
       
       }   
          
       
          
          
           
            
          //  var pageHTMLstring = data.parse['text']['*']; 
          //  var displayThis = $('<div></div>').html(pageHTMLstring).find("p").first(); 
            
          //removes anchor link elements  
          //displayThis.find("a").each(function() { $(this).replaceWith($(this).html()); });
          //removes references  
          //displayThis.find("sup").remove();
        //$("#info").html(displayThis); 
            
        },
        error: function (errorMessage) {
          console.log("didn't work");
        }
    });
  
} else {
  
   $.ajax({
        type: "GET",
       
        url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=description&list=&generator=search&gsrsearch="+document.getElementById("what").value +  "&callback=?",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          
       var resultsArr =  Object.entries(data.query.pages);
          console.log(resultsArr);
          
       for (var i = 0; i < resultsArr.length; i++) {
         
 
         
        $("#container").append("<div id = 'subcontainer'> <a id = 'link' target = '_blank' href = 'https://en.wikipedia.org/?curid=" + resultsArr[i][0] + "'>" + "<p id = 'title'>" +  resultsArr[i][1].title +  "</p>" + "<p id = 'description'>" + resultsArr[i][1].description.charAt(0).toUpperCase() + resultsArr[i][1].description.slice(1) + "</p>" + " </a> </div>"); 
         
      
       
       }   
          
       
          
          
           
         
            
        },
        error: function (errorMessage) {
          console.log("didn't work");
        }
    });
  
  
}
});
}