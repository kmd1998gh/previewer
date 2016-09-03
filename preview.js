$(function () {
    //クリックしたときのファンクションをまとめて指定
    $('.Ptab li').click(function () {

        //.index()を使いクリックされた親要素の子のタブが何番目かを変数indexに返す。
        var index = $(this).parent().children().index(this);
        //クリックされた値の親(previewer)の子(PContent)のさらに子(li)範囲をContentに代入する。css
        var Content =$(this).parents('.previewer').children('.Pcontent').children('li');
        
        //クリックされた値の親(previewer)の子(Ptab)のさらに子(li)範囲をTabに代入する。
        var Tab = $(this).parents('.previewer').children('.Ptab').children('li');
        
        
        //Contentの範囲をすべて非表示にする
        Content.css('display','none');
        
        //Contentの範囲でindex番目を表示する
        Content.eq(index).css('display','block');
        
        //Tabの範囲にあるselectを削除
        Tab.removeClass('select');
        
        //選択したタブにselectをつける
        $(this).addClass('select');
    });
});
