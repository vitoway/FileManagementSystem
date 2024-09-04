class Icon {
    constructor(name, options = {}) {
        // symbol引用，默认配置，基于iconfont help
        const defaultOptions = {
            className: 'icon',
            width: '1em',
            height: '1em',
            verticalAlign: '-0.15em',
            fill: 'currentColor',
            overflow: 'hidden',
            ariaHidden: true
        };

        // 合并用户传入的选项与默认配置
        this.options = Object.assign({}, defaultOptions, options);

        // 创建 SVG 元素
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('class', this.options.className);
        this.svg.setAttribute('width', this.options.width);
        this.svg.setAttribute('height', this.options.height);
        this.svg.style.verticalAlign = this.options.verticalAlign;
        this.svg.setAttribute('fill', this.options.fill);
        this.svg.setAttribute('overflow', this.options.overflow);
        if (this.options.ariaHidden) {
            this.svg.setAttribute('aria-hidden', 'true');
        }

        // 创建 <use> 元素
        this.use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        this.use.setAttribute('href', `#icon-${name}`);

        // 将 <use> 元素添加到 <svg> 中
        this.svg.appendChild(this.use);
    }

    setName(name) {
        this.use.setAttribute('href', `#icon-${name}`);
    }
}