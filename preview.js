$(function () {
    //クリックしたときのファンクションをまとめて指定
    $('.Ptab li').click(function () {

        //.index()を使いクリックされたタブが何番目かを調べ、
        //indexという変数に代入します。
        var Pindex = $('.Ptab li').index(this);

        //コンテンツを一度すべて非表示にし、
        $('.Pcontent li').css('display', 'none');

        //クリックされたタブと同じ順番のコンテンツを表示します。
        $('.Pcontent li').eq(Pindex).css('display', 'block');

        //一度タブについているクラスselectを消し、
        $('.Ptab li').removeClass('select');

        //クリックされたタブのみにクラスselectをつけます。
        $(this).addClass('select')
    });
});
