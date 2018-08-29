 //function addfield(){
             // var i= 1;
            // if(i<=3){
              // i++;

              // var div = document.createElement('div');
              // div.innerHTML ='<label> संस्थाको नामः<input type="text" name="ClassX_Board" maxlength="30" /></label><br><label> तालिमको अवधिः<input type="text" name="ClassX_Board" maxlength="30" /></label>';
              // document.getElementById('add').appendChild(div);
            // }
          // }
function showme(){
	$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'watch-me') {
            $('#show-me').show();           
       }

       else {
            $('#show-me').hide();   
       }
   });
});
}
function showme1(){
	$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'watch-me1') {
            $('#show-me1').show();           
       }

       else {
         $('#show-me1').hide();   
       }
   });
});
}

function showme2(){
	$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'watch-me2') {
            $('#show-me2').show();           
       }

       else {
         $('#show-me2').hide();   
       }
   });
});
}

