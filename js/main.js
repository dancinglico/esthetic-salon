
// 画面サイズに応じて画像を切り替える関数(Slickメインビジュアル用)
function updateImages() {
    if (window.innerWidth <= 768) {
        // スマホ用の画像を表示
        $('.main-pc').hide();
        $('.main-sp').show();
    } else {
        // PC用の画像を表示
        $('.main-pc').show();
        $('.main-sp').hide();
    }
}

// 初回ロード時に画像を切り替える
updateImages();

// 画面サイズ変更時に画像を切り替える
$(window).resize(function () {
    updateImages();
});

//Slickでメインビジュアルスライドショー
$('.mainvisual').slick({
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false
});


//03の写真をフェードイン
$(window).on('scroll', function () {
    $('.image-box img').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var windowHeight = $(window).height();

        // 要素がスクロール範囲に入った時にアニメーションを開始
        if (imagePos < topOfWindow + windowHeight - 100) { // 調整用オフセット (-100)
            $(this).addClass('fadeInUp');
        }
    });
});



//FAQトグル
$('.question').click(function () {
   
    //トグルで表示
   $(this).next('.answer').slideToggle(); 
   $(this).parent('.faq-item').toggleClass('active');

   //他の開いている要素を隠す
   $('.question').not(this).next('.answer').slideUp();
   $('.faq-item').not($(this).parent('.faq-item')).removeClass('active');

 });


 //SPナビゲーション
 $(document).ready(function () {
    $('.hamburger-menu').click(function () {
        $('.nav-sp').slideToggle(); // Toggles the SP menu
        $(this).find('i').toggleClass('fa-bars fa-times');
    });
});

