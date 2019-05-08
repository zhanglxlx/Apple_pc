$(() => {
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
    $("input").focus(function() {
        $("#search #ul_list").css("display", "block");
        $("input").css("outline", "none");
        $("#search").css({ "border": "1px solid #999", "border-radius": "5px" });

    });
    $("input").blur(function() {
        $("#search").css({ "border": "0", "border-radius": "5px" })
        $("#search #ul_list").css("display", "none");
    });
    // 苹果列表
    var list_apple = [
        { aid: 1, img: 'img/', title: 'Apple Watch ' },
        { aid: 2, img: 'img/', title: 'Apple Watch ' },
        { aid: 3, img: 'img/', title: 'Apple Watch ' },
        { aid: 4, img: 'img/', title: 'Apple Watch ' },
        { aid: 5, img: 'img/', title: 'Apple Watch ' },
        { aid: 6, img: 'img/', title: 'Apple Watch ' },
        { aid: 7, img: 'img/', title: 'Apple Watch ' },
        { aid: 8, img: 'img/', title: 'Apple Watch ' },
        { aid: 9, img: 'img/', title: 'Apple Watch ' },
        { aid: 10, img: 'img/', title: 'Apple Watch ' },
        { aid: 11, img: 'img/', title: 'Apple Watch ' },
        { aid: 12, img: 'img/', title: 'Apple Watch ' }
    ]
    var html = ""
    for (var key of list_apple) {
        html += `
        <li class="left">
            <a href="#">
                <p><img src="${key.img}" alt=""></p>
                <span>${key.title}</span>
            </a>
        </li>
        `
    }
    console.log(html)
    $("#list_apple").append(html);
})