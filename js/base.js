$(() => {
    // 引入页面头部
    $('<link rel="stylesheet" href="css/base.css">').appendTo("head");
    $('<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">').appendTo("head");
    $.ajax({
        url: 'header.html',
        type: 'get',
        success: function(res) {
            // console.log(res);
            $("#header").append(res);
        }
    })
    // 引入页面尾部
    $.ajax({
        url: 'footer.html',
        type: 'get',
        success: function(res) {
            // console.log(res);
            $("#footer").append(res);
        }
    })
})
