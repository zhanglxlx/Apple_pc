$(()=>{
    $('<link rel="stylesheet" href="css/base.css">').appendTo("head");
    $('<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">').appendTo("head");
    $.ajax({
        url:'header.html',
        type:'get',
        success:function(res){
            // console.log(res);
            $("#header").append(res);
        }
    })
    $("input").focus(function(){
        $("input").css("outline","none");
        $("#search").css({"border":"1px solid #666","border-radius":"5px"})
      });
      $("input").blur(function(){
        $("#search").css({"border":"0","border-radius":"5px"})
      });
}) 