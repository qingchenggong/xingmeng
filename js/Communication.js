twikoo.init({
    envId: 'https://www.xn--7gq455a.site/',
    el: '#twikoo',
});


// 获取元素
var items = document.querySelectorAll('.item.svelte-n9bgqc');

// 监听滚动事件
window.addEventListener('scroll', function() {
    // 遍历所有元素
    items.forEach(function(item) {
        // 获取元素的位置
        var rect = item.getBoundingClientRect();
        // 检查元素是否已经滚动到距离浏览器底部200px的位置
        if (rect.top <= window.innerHeight - 20) {
            // 给元素添加动画类
            item.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});