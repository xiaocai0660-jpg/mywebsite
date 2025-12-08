document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // 函数：切换到下一个幻灯片
    function nextSlide() {
        // 移除当前活动幻灯片的 active 类
        slides[currentSlide].classList.remove('active');
        
        // 计算下一个幻灯片的索引
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 添加 active 类，触发 CSS 渐变效果
        slides[currentSlide].classList.add('active');
    }

    // 默认激活第一个幻灯片
    slides[currentSlide].classList.add('active');

    // 每 5 秒自动切换一次幻灯片 (您可以修改 5000 毫秒来改变速度)
    setInterval(nextSlide, 5000); 
});
