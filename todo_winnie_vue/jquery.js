let $list = [
    {
        sn: 1,
        caption: '繳電話費',
        time: '2021/04/20',
        done: false
    },
    {
        sn: 2,
        caption: '繳水費',
        time: '2021/04/25',
        done: true
    },
    {
        sn: 3,
        caption: '電費',
        time: '2021/04/27',
        done: true
    },
    {
        sn: 4,
        caption: '瓦斯費費',
        time: '2021/04/30',
        done: false
    },
]

let $appendHTML = (arr) => {
    let _html = '';
    arr.forEach(item => {
        _html += `
            <li data-sn="${item.sn}">
                <article class="md article">
                    <input type="checkbox" ${item.done ? 'checked' : ''}>
                    <div class="caption">${item.caption}</div>
                    <div class=label>${item.time}</div>
                    <div class="md control-list">
                        <ul>
                            <li class='edit'><a href="#">修改</a></li>
                            <li class='remove'><a href="#">刪除</a></li>
                        </ul>
                    </div>
                </article>
            </li> `
    });
    return _html;
}

let $buildHtrml = () => {
    let _notYet = $list.filter(item => !item.done);
    let _done = $list.filter(item => item.done);
    let $undoList = $('.g.undo .md.todo-list > ul');
    let $doneList = $('.g.done .md.todo-list > ul');
    $undoList.html($appendHTML(_notYet));
    $doneList.html($appendHTML(_done));
}

$buildHtrml();

/*勾選 */
$('.md.todo-list').on('change', '[type="checkbox"]', function () {
    let _sn = $(this).closest('li').data('sn');/* $(this):指定TAG，並將他轉成JS物件*/
    let $target = $list.find(item => {
        return item.sn === _sn;
    })
    if (this.checked) {
        $target.done = true;
    }
    else {
        $target.done = false;
    }
    $buildHtrml();
});
/*刪除 */
$('.lo.root').on('click', '.remove a', function () {
    let _sn = $(this).closest('li[data-sn]').data('sn');/* $(this):指定TAG，並將他轉成JS物件*/
    let $target = $list.find(item => {
        return item.sn === _sn;
    })
    let _index = $list.indexOf($target);
    console.log(_index);
    $list.splice($list.indexOf($target), 1);
    $buildHtrml();
})


/*側邊欄開闔 */
let $extend = $('.lo.extend'),
    $btn = $extend.find('.md.menu-btn a')
$btn.on('click', () => {
    $extend.toggleClass('is-active');
});
