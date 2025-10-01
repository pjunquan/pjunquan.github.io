// 鼠标尾迹配置
const MOUSE_TRAIL_CONFIG = {
    maxLength: 20,          // 尾迹最大长度
    width: 2,               // 尾迹宽度
    color: 'rgba(255, 0, 0, 0.6)',  // 尾迹颜色 - 改为红色
    fadeSpeed: 0.05,        // 淡出速度
    smoothing: 0.3,         // 平滑度 (0-1)
    idleTimeout: 1000       // 空闲超时时间(ms)
};

// 鼠标尾迹类
class MouseTrail {
    constructor(canvas, config) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.config = config;
        this.points = [];
        this.lastMousePos = { x: 0, y: 0 };
        this.isIdle = false;
        this.idleTimer = null;
        
        this.resizeCanvas();
        this.bindEvents();
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    bindEvents() {
        // 鼠标移动事件
        document.addEventListener('mousemove', (e) => {
            this.addPoint(e.clientX, e.clientY);
            this.resetIdleTimer();
        });
        
        // 窗口大小改变事件
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        
        // 鼠标离开页面事件
        document.addEventListener('mouseleave', () => {
            this.isIdle = true;
        });
        
        // 鼠标进入页面事件
        document.addEventListener('mouseenter', () => {
            this.isIdle = false;
        });
    }
    
    addPoint(x, y) {
        // 平滑处理
        const smoothedX = this.lastMousePos.x + (x - this.lastMousePos.x) * this.config.smoothing;
        const smoothedY = this.lastMousePos.y + (y - this.lastMousePos.y) * this.config.smoothing;
        
        this.points.push({
            x: smoothedX,
            y: smoothedY,
            opacity: 1,
            life: 1
        });
        
        this.lastMousePos = { x: smoothedX, y: smoothedY };
        
        // 限制尾迹长度
        if (this.points.length > this.config.maxLength) {
            this.points.shift();
        }
    }
    
    resetIdleTimer() {
        this.isIdle = false;
        clearTimeout(this.idleTimer);
        this.idleTimer = setTimeout(() => {
            this.isIdle = true;
        }, this.config.idleTimeout);
    }
    
    update() {
        // 更新每个点的生命周期
        for (let i = this.points.length - 1; i >= 0; i--) {
            const point = this.points[i];
            
            if (this.isIdle) {
                // 空闲时快速淡出
                point.life -= this.config.fadeSpeed * 2;
            } else {
                // 正常淡出
                point.life -= this.config.fadeSpeed;
            }
            
            point.opacity = point.life;
            
            // 移除完全透明的点
            if (point.life <= 0) {
                this.points.splice(i, 1);
            }
        }
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.points.length < 2) return;
        
        this.ctx.beginPath();
        this.ctx.lineWidth = this.config.width;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        
        // 绘制尾迹路径
        for (let i = 0; i < this.points.length - 1; i++) {
            const current = this.points[i];
            const next = this.points[i + 1];
            
            const alpha = current.opacity;
            const color = this.config.color.replace(/[\d.]+\)$/g, alpha + ')');
            
            this.ctx.strokeStyle = color;
            this.ctx.beginPath();
            this.ctx.moveTo(current.x, current.y);
            this.ctx.lineTo(next.x, next.y);
            this.ctx.stroke();
        }
    }
    
    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// 初始化鼠标尾迹
function initMouseTrail() {
    const canvas = document.getElementById('mouse-trail');
    if (canvas) {
        new MouseTrail(canvas, MOUSE_TRAIL_CONFIG);
        console.log('Mouse trail initialized');
    }
}
