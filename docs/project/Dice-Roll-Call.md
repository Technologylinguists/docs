# 科技骰子点名宝（Dice-Roll-Call）
::: warning 项目详情
开源协议：[Apache-2.0 license](/LICENSE) | 在线预览：[点击查看](https://demo.uopy.top/Dice-Roll-Call)

CNB：[点击查看项目](https://cnb.cool/kejiyuzhe/Dice-Roll-Call) | GitHub：[点击查看项目](https://github.com/Technologylinguists/Dice-Roll-Call)
:::
## 项目简介

**科技骰子点名宝（Dice-Roll-Call）** 是一个基于Web的随机点名系统，旨在为教师、主持人或其他需要随机选择人员的场景提供一个简单、高效的工具。通过上传包含名单的文本文件，系统可以快速随机滚动显示名字，帮助用户公平、公正地进行点名或选择。

## 功能特点

- **文件上传**：支持上传 `.txt` 文件，文件内容应为每行一个名字，系统会自动读取并加载名单。
- **随机点名**：点击“开始”按钮后，系统会快速随机显示名单中的名字，点击“停止”按钮后，系统会停止滚动并显示最终选中的名字。
- **简洁界面**：界面设计简洁美观，背景动态效果增强用户体验。
- **响应式设计**：支持在不同设备上使用，确保在桌面和移动设备上都能良好显示。

## 使用方法

1. 准备一个包含名单的 `.txt` 文件，确保每行一个名字。
2. 打开 **科技骰子点名宝** 网页。
3. 点击“上传名单文件”按钮，选择你的 `.txt` 文件。
4. 文件上传成功后，点击“开始”按钮，系统会开始随机滚动显示名字。
5. 点击“停止”按钮，系统会停止滚动并显示最终选中的名字。

## 示例文件说明

项目中包含一个示例文件 `example.txt`，其中列出了一系列名字。这些名字仅作为演示使用，**并无任何恶意行为或特殊含义**。用户可以根据需要替换为自己的名单文件。

## 技术栈

### 前端技术

- **HTML**：用于构建页面结构。
- **CSS**：用于样式设计，包括动态背景、毛玻璃效果和拟态设计。
- **JavaScript**：用于实现文件读取、随机点名等核心功能。

### 第三方库

- **Font Awesome**：用于图标展示，提供丰富的图标资源。
- **Google Fonts**：使用 `Poppins` 字体，提升页面的视觉效果。

## 效果代码详解

### 1. 毛玻璃效果（Frosted Glass Effect）

毛玻璃效果通过 `backdrop-filter` 和 `background` 属性实现，给卡片和名字显示区域添加了半透明模糊效果。

```css
.card {
  background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
  border-radius: 20px; /* 圆角 */
  padding: 30px; /* 内边距 */
  backdrop-filter: blur(15px); /* 毛玻璃效果 */
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2),
    -8px -8px 16px rgba(255, 255, 255, 0.1); /* 阴影效果 */
  border: 1px solid rgba(255, 255, 255, 0.1); /* 边框 */
  text-align: center; /* 文字居中 */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 过渡效果 */
}
```

### 2. 拟态设计（Neumorphism）

拟态设计通过 `box-shadow` 实现，给按钮和卡片添加了立体感，使其看起来像是从背景中凸起或凹陷。

```css
.btn {
  padding: 12px 24px; /* 内边距 */
  font-size: 1.1em; /* 字体大小 */
  border: none; /* 无边框 */
  border-radius: 15px; /* 圆角 */
  cursor: pointer; /* 鼠标指针 */
  transition: all 0.3s ease; /* 过渡效果 */
  display: inline-flex; /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  gap: 8px; /* 元素间距 */
  color: #333; /* 文字颜色 */
  background: rgba(255, 255, 255, 0.2); /* 半透明背景 */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2), /* 拟态效果 */
    -5px -5px 10px rgba(255, 255, 255, 0.1);
}

.btn:hover {
  background: rgba(255, 255, 255, 0.3); /* 悬停背景 */
  transform: translateY(-2px); /* 上移效果 */
  box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3), /* 悬停时的拟态效果 */
    -8px -8px 15px rgba(255, 255, 255, 0.2);
}
```

### 3. 动态背景（Animated Background）

动态背景通过 `linear-gradient` 和 `@keyframes` 实现，背景颜色渐变并带有缩放动画，增强了页面的视觉吸引力。

```css
.background {
  position: absolute; /* 绝对定位 */
  top: 0; /* 顶部对齐 */
  left: 0; /* 左侧对齐 */
  width: 100%; /* 宽度100% */
  height: 100%; /* 高度100% */
  background: linear-gradient(
    135deg,
    rgba(106, 17, 203, 0.8),
    rgba(37, 117, 252, 0.8)
  ); /* 渐变背景 */
  z-index: -1; /* 置于底层 */
  animation: moveBackground 10s infinite alternate; /* 背景动画 */
}

@keyframes moveBackground {
  0% {
    transform: scale(1); /* 初始大小 */
  }
  100% {
    transform: scale(1.2); /* 放大效果 */
  }
}
```

### 4. 文件上传与随机点名逻辑

文件上传和随机点名的核心逻辑通过 JavaScript 实现。文件上传后，系统会读取文件内容并将其分割为名字数组。点击“开始”按钮后，系统会快速随机显示名字，直到用户点击“停止”按钮。

```javascript
let names = []; // 存储名单
let intervalId; // 定时器ID
let isRunning = false; // 点名状态

// 获取DOM元素
const fileInput = document.getElementById("fileInput"); // 文件上传输入框
const nameDisplay = document.getElementById("nameDisplay"); // 名字显示区域
const startBtn = document.getElementById("startBtn"); // 开始按钮
const stopBtn = document.getElementById("stopBtn"); // 停止按钮

// 读取文件内容
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0]; // 获取上传的文件
  if (file) {
    const reader = new FileReader(); // 创建文件读取器
    reader.onload = (e) => {
      const content = e.target.result; // 获取文件内容
      names = content
        .split("\n") // 按行分割
        .map((name) => name.trim()) // 去除每行首尾空格
        .filter((name) => name); // 过滤空行
      if (names.length > 0) {
        nameDisplay.innerHTML = "<span>名单已加载，点击开始</span>"; // 显示加载成功信息
        startBtn.disabled = false; // 启用开始按钮
      } else {
        nameDisplay.innerHTML = "<span>文件内容为空，请重新上传</span>"; // 显示空文件提示
      }
    };
    reader.readAsText(file); // 读取文件内容
  }
});

// 随机显示名字的函数
function randomName() {
  const randomIndex = Math.floor(Math.random() * names.length); // 随机生成索引
  nameDisplay.innerHTML = `<span>${names[randomIndex]}</span>`; // 显示随机名字
}

// 开始按钮点击事件
startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true; // 设置点名状态为运行中
    intervalId = setInterval(randomName, 50); // 每50毫秒更新一次名字
    startBtn.disabled = true; // 禁用开始按钮
    stopBtn.disabled = false; // 启用停止按钮
  }
});

// 停止按钮点击事件
stopBtn.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(intervalId); // 清除定时器
    isRunning = false; // 设置点名状态为停止
    startBtn.disabled = false; // 启用开始按钮
    stopBtn.disabled = true; // 禁用停止按钮
  }
});
```

## 未来计划

- **增加音效**：在点名过程中增加音效，增强互动性。
- **多语言支持**：支持更多语言，方便不同地区的用户使用。
- **历史记录**：记录每次点名的结果，方便用户查看和管理。

## 声明

`example.txt` 文件中的名字仅作为演示使用，**并无任何恶意行为或特殊含义**。用户可以根据需要替换为自己的名单文件。

## 贡献与反馈

欢迎提交Issue或合并请求，帮助我们改进项目。如果你有任何建议或反馈，请通过CNB联系我们。