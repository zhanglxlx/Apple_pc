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
    $("input").focus(function() {
        $("#search #ul_list").css("display", "block");
        $("#search").css({ "border": "1px solid #999", "border-radius": "5px" });

     });
    $("input").blur(function() {
        $("#search").css({ "border": "0", "border-radius": "5px" })
        $("#search #ul_list").css("display", "none");
    });
    // 苹果列表
    var list_apple = [
        { aid: 1, img: 'img/homepage_productnav_apple_watch_2x.png', title: 'Apple Watch ' },
        { aid: 2, img: 'img/homepage_productnav_iphone_2x.png', title: 'iPhone' },
        { aid: 3, img: 'img/homepage_productnav_ipad_2x.png', title: 'iPad ' },
        { aid: 4, img: 'img/homepage_productnav_imac_2x.png', title: 'Mac ' },
        { aid: 5, img: 'img/homepage_productnav_apple-id_2x.png', title: 'Apple ID ' },
        { aid: 6, img: 'img/homepage_productdrawer_applemusic_2x.png', title: 'Music ' },
        { aid: 7, img: 'img/homepage-productdrawer-appletv_2x.png', title: 'Apple TV ' },
        { aid: 8, img: 'img/homepage_productdrawer_icloud_2x.png', title: 'iCloud ' },
        { aid: 9, img: 'img/homepage_productdrawer_apple_pay_icon_2x.png', title: 'Apple Pay ' },
        { aid: 10, img: 'img/homepage_productdrawer_appstore_2x.png', title: 'App Store ' },
        { aid: 11, img: 'img/homepage_productdrawer_pro_apps_2x.png', title: 'Pro Apps ' },
        { aid: 12, img: 'img/homepage_productdrawer_airpods_2x.png', title: 'AirPods' }
    ]
    var html = ""
    for (var key of list_apple) {
        html += ` 
        <li class="text-center float-left p-4">
            <a href="#">
                <p><img src="${key.img}" alt=""></p>
                <span>${key.title}</span>
            </a>
        </li>
        `
    }
    // console.log(html)
    $("#list_apple").append(html);
    var setions=[
        {sid:1,img:'img/contentlink-communities_2x.png',title:'Have a question?',subtitle:'Ask everyone. Our Apple Support Community can help you find answers.',details:'Ask the community'},
        {sid:2,img:'img/youtube-watch-learn-promo_2x.png',title:'Watch and learn',subtitle:'Then play. Discover new ways to enjoy your devices with our how-to and help videos.',details:'Explore our videos on YouTube'},
        {sid:3,img:'img/artcol-contentlink-social_2x.png',title:'Get quick tips',subtitle:"And the help you need — all in one place. We're here every day to answer your questions.",details:'Contact us @AppleSupport'},
    ]
    var html1=""
    for(var content of setions){
        html1+=`
        <div class="col-4 p-2">
            <p><img class="img-thumbnail border-0" src="${content.img}" alt=""></p>
            <h1>${content.title}</h1>
            <p  class="pr-3 p_size">${content.subtitle}</p>
            <a href="#" class="a_color">${content.details} &gt;</a>
        </div>
        `
    }
    $("#setions").append(html1)
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
