window.addEventListener('load', function() {
    var body = document.querySelector('body');
    var arr = [
        "富强", "民主", "文明", "和谐",
        "自由", "平等", "公正", "法治",
        "爱国", "敬业", "诚信", "友善"
    ]
    num = 0;
    var div = document.createElement('p')

    body.insertBefore(div, body[0]);
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    })

    var color = ['orange', 'chartreuse', 'limegreen', 'red']


    window.addEventListener('click', function(e) {
        size = parseInt(Math.random() * 15 + 8);
        re_color = color[parseInt(Math.random() * 4)];

        var max = 50;

        div.style.fontSize = size + 'px';
        div.style.position = 'absolute';
        div.style.color = re_color;
        num++;
        if (num > 11) {
            num = 0;
        }
        x = e.clientX;
        y = e.clientY;

        x = x - 20;
        y = y - 20;
        div.style.top = y + 'px';
        div.style.left = x + 'px';
        div.innerHTML = arr[num];


        var timer = setInterval(function() {
            y--;
            max--;
            if (max == 0) {
                clearTimeout(timer);
                div.style.display = 'none';
            } else {
                div.style.display = 'block';
                div.style.top = y + 'px';
            }
        }, 8)

    })
})