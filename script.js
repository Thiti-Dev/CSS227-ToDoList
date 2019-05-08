
        var done_count = 0;
        var not_done_count = 5; //defalth 5 อัน
        var fixed_bug = false;

updateStaring();  

function updateStaring(){
    $("#yet-done-list").html("รายการที่ยังไม่ได้ทำ : " + not_done_count);
    $("#done-list").html("ทำเสร็จแล้ว : " + done_count);   
}


function addNewTask(){
    not_done_count++;
    updateStaring();   
}

function removeTask(hasStrike){
    console.log("here in removeTask")
    if(hasStrike){
        not_done_count--;
    }else{
        //not_done_count--;
        done_count--;
    }
    updateStaring();   
}

function doneTask(finish){
    console.log("here in done task")
    if(finish){
        done_count++;
        not_done_count--;
    }
    else{
        done_count--;
        not_done_count++;
    }
    updateStaring();  
}
$(document).ready(
    function(){

        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ul').append('<li>' + '<image class="image-inside" src="https://vignette.wikia.nocookie.net/coasterpedia/images/f/ff/Bin.png/revision/latest?cb=20130123164154" width="20" height="20">' + " : " + toAdd + '</li>');
                 console.log(not_done_count);
                 //removeNupdate(2,true);
                addNewTask();
            });
       
       $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });

      $(document).on('click','.image-inside', function(){
        var list_value = $(this).parent().text();
        alert("คุณได้ทำการลบเมนูที่ต้องทำ " + list_value + " เป็นที่เรียบร้อย");
        fixed_bug = true;
        if($(this).parent().hasClass('strike')){
            //removeNupdate(1);
            removeTask(true);
        }
        else{
            removeTask(false);
        }
        $(this).parent().remove();
      });
      
      $(document).on('click','li', function(){
        //$(this).toggleClass('strike') //.fadeOut('slow'); -- no fade out  
        if($(this).hasClass('strike')){  
            //doneNupdate(1);
            doneTask(false);
        }else{
            //doneNupdate(2);
            doneTask(true);
        }
        $(this).toggleClass('strike') //.fadeOut('slow'); -- no fade out  
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      //$('ul').sortable();  
      
    }
);