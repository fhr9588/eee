//
//var obj, j;
//var page = 0;
//var nowPage = 0;  //当前页
//var listNum = 15;  //每页显示的条数
//var PagesLen;   //总的页数
//var PageNum = 10;  //分页链接数(5个)
//onload = function () {
//    //obj = parent.document.getElementById("ctl00_ContentPlaceHolder1_leftMenu").getElementsByTagName("li");
//    obj = document.getElementById("TextDIV").getElementsByTagName("li");
//    j = obj.length
//    PagesLen = Math.ceil(j / listNum);
//    upPage(0)
//}
//function upPage(p) {
//    nowPage = p
//    //内容的变换
//    for (var i = 0; i < j; i++) {
//        obj[i].style.display = "none"
//    }
//    for (var i = p * listNum; i < (p + 1) * listNum; i++) {
//        if (obj[i]) obj[i].style.display = "block"
//    }
//    strS = '<a href="JavaScript:FirstPage()" onclick="upPage(0)" class="Shou"><div id="ShouPage" class="Shou">首页</div></a> '
//    if (nowPage == 0) {
//        strN = '<a href="#"class="Shou" id="P"><div id="ShouPage" class="Shou">上一页</div></a> '
//    }
//    else {
//        strN = '<a href="JavaScript:PreviousPage()" onclick="upPage(' + (nowPage - 1) + ')" class="Shou" id="P"><div id="ShouPageP" class="Shou">上一页</div></a> '
//    }
//     var PageNum_2 = PageNum % 2 == 0 ? Math.ceil(PageNum / 2) + 1 : Math.ceil(PageNum / 2)
//    var PageNum_3 = PageNum % 2 == 0 ? Math.ceil(PageNum / 2) : Math.ceil(PageNum / 2) + 1
//    var strC = "", startPage, endPage;
//    if (PageNum >= PagesLen) { startPage = 0; endPage = PagesLen - 1 }
//    else if (nowPage < PageNum_2) { startPage = 0; endPage = PagesLen - 1 > PageNum ? PageNum : PagesLen - 1 } //首页
//    else { startPage = nowPage + PageNum_3 >= PagesLen ? PagesLen - PageNum - 1 : nowPage - PageNum_2 + 1; var t = startPage + PageNum; endPage = t > PagesLen ? PagesLen - 1 : t }
//    for (var i = startPage; i <= endPage; i++) {
//        if (i == nowPage) strC += '<a href="JavaScript:curPage()" class="curpage" onclick="upPage(' + i + ')"><div id="Shou" class="Shou">' + (i + 1) + '</div> </a>'
//        else  strC += '<a href="#JavaScript:Page()" onclick="upPage(' + i + ')" class="Shou"><div id="Shou">' + (i + 1) + '</div></a> '
//    }
//    if (nowPage == PagesLen-1) {
//        strN2 = '<a href="#" class="Shou" id="N"><div id="ShouPage" class="Shou">下一页</div></a> '
//    }
//   else {
//        strN2 = '<a href="JavaScript:NextPage()" onclick="upPage(' + (nowPage + 1) + ')" class="Shou"><div id="ShouPageN" class="Shou">下一页</div></a> '
//    }
//    strE = ' <a href="JavaScript:LastPage()" onclick="upPage(' + (PagesLen - 1) + ')" class="Shou"><div id="ShouPage" class="Shou">尾页</div></a>  '
//    strE2 = '<div id="ShouRight" class="Shou"> ' + (nowPage + 1) + ' /' + PagesLen + '页 共 ' + j + '条</div>'
//   // strE2 = nowPage + 1 + "/" + PagesLen + "页" + "  共" + j + "条"
//    document.getElementById("innerpage").innerHTML = strS + strN + strC + strN2 + strE + strE2
//}
//function span1() {
//
// }