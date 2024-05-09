<!-- 轮播图js -->
    /* 轮播图--手动 */
    // 1. 获取对象
    // 获取到右按钮
var btnRight = document.querySelector(".loopbox .arrow-right");
    // 获取到左按钮
var btnLeft = document.querySelector(".loopbox .arrow-left");

    // 2.1.1 当前索引
var boxIndex = 0;

    // 2.2.1 获取装载每一张图片的盒子
var boxItems = document.querySelectorAll(".loopbox .box-item");

    // 2.3.1 获取装载所有图片的盒子
var box = document.querySelector(".loopbox .box");

    // 2.点击右按钮
btnRight.onclick = function() {
    // 2.1每点击一次，下标+1，去获取下一张图片
    boxIndex++;
    // 2.2判断下是否越界
    if (boxIndex >= boxItems.length) {
        boxIndex = 0;
}
    // 2.3.图片左移，实现滑动
    box.style.marginLeft = -1 * 1300 * boxIndex + "px";
}
    // 3.点击左按钮
btnLeft.onclick = function() {
    boxIndex--;
    if (boxIndex < 0) {
        boxIndex = boxItems.length - 1;
}
    box.style.marginLeft = -1 * 1300 * boxIndex + "px";
}

    /* 轮播图--自动 */
var timer;
function playTime() {
    // 定时器（多长时间执行一次）
    timer = setInterval(function() {
        // 把索引指到下一张图
        boxIndex++;
        // 处理下标越界
        if (boxIndex >= boxItems.length) {
            boxIndex = 0;
        }
        box.style.marginLeft = -1 * 1300 * boxIndex + "px";
    }, 3000)
}

    //调用playTime()函数
playTime();
    // 获取loopBox盒子
var loopbox = document.querySelector(".loopbox");
    // 鼠标移入
loopbox.onmouseover = function() {
    // 清除定时器
    clearInterval(timer);
    // 显示手动按钮
    btnRight.style.display = "block";
    btnLeft.style.display = "block";
}
    // 鼠标移出
loopbox.onmouseout = function() {
    // 执行定时器
    playTime();
    // 隐藏手动按钮
    btnRight.style.display = "none";
    btnLeft.style.display = "none";
}