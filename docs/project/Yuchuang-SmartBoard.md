# 语创科技白板（Yuchuang-SmartBoard）
::: warning 项目详情
开源协议：[Apache-2.0 license](/LICENSE) | 在线预览：[点击查看](https://demo.uopy.top/Yuchuang-SmartBoard)

CNB：[点击查看项目](https://cnb.cool/kejiyuzhe/Yuchuang-SmartBoard) | GitHub：[点击查看项目](https://github.com/Technologylinguists/Yuchuang-SmartBoard)

:::

## 一、项目概述
语创科技白板是一款专为教学设计精心打造的交互式白板工具，其核心目标是为教育工作者和学生提供一个集便捷性、高效性于一体的绘图和编辑环境。在现代教育场景中，多样化的教学手段和互动方式对于提升教学效果至关重要，语创科技白板应运而生，旨在满足这一需求。

它集成了多种实用功能，无论是简单的图形绘制、内容标注，还是复杂的教学内容展示和创作，都能轻松应对。通过简洁直观的界面设计，即使是初次使用的用户也能迅速上手，无需花费大量时间学习复杂的操作流程。

## 二、技术栈

### （一）前端技术
1. **HTML（HyperText Markup Language）**
    - **结构构建**：HTML 作为网页的基础结构语言，在本项目中扮演着至关重要的角色。它就像是搭建房屋的框架，为整个白板工具的各个元素提供了基本的结构支撑。通过合理的标签嵌套和元素组织，构建了一个清晰、有序的页面结构，使得各个功能模块能够有条不紊地展现。
    - **元素说明**：
        - **公告弹窗（`id="announcement"`）**：这是用户打开白板时首先看到的重要元素。它包含了丰富的信息，如热情的欢迎信息、详细的使用提示等内容，就像是一位贴心的引导员，为用户提供初始引导，帮助他们快速熟悉白板的基本功能和操作方法。公告弹窗采用了模态框的设计，会覆盖整个页面，确保用户在查看信息时不会被其他内容干扰。
        - **工具栏（`class="toolbar"`）**：位于页面的底部中央，是用户操作的核心区域。它集中了画笔、橡皮擦、清屏和保存等功能按钮，就像一个便捷的工具盒，方便用户根据需要快速切换工具。每个按钮都有明确的图标和文字标签，使用户能够一目了然地识别其功能。
        - **画布（`id="whiteboard"`）**：作为用户绘制内容的主要区域，画布占据了整个页面的大部分空间。它就像是一张无限大的白纸，用户可以在上面自由地发挥创意，进行各种绘制和编辑操作。画布的设计充分考虑了用户的交互体验，鼠标指针在画布上会变为十字准线，方便用户进行精确的绘制。
        - **设置弹窗（如`id="brush-settings"`和`id="eraser-settings"`）**：当用户点击画笔或橡皮擦按钮时，相应的设置弹窗会弹出。这些弹窗为用户提供了更多的个性化设置选项，例如，在画笔设置弹窗中，用户可以调整画笔的大小和颜色；在橡皮设置弹窗中，用户可以调整橡皮擦的大小。设置弹窗的设计简洁明了，方便用户快速找到所需的设置选项。
2. **CSS（Cascading Style Sheets）**
    - **样式设计**：CSS 就像是一位神奇的化妆师，为网页元素添加了各种各样的样式，使整个页面焕发出美观、一致的视觉效果。在本项目中，CSS 从全局样式到各个组件的具体样式设置都进行了精心的设计，确保每一个细节都符合用户的审美需求。
    - **主要样式特点**：
        - **全局样式**：对`body`和`html`进行了基本样式的设置，首先去除了默认的边距和填充，使得页面的布局更加紧凑和统一。同时，将背景颜色设置为`#f0f0f0`，这种柔和的灰色调给人一种舒适、温馨的感觉。另外，隐藏了页面的滚动条，避免了滚动条对页面布局的影响，使页面更加简洁美观。
        - **弹窗样式**：公告弹窗和设置弹窗都采用了半透明的背景，这种设计不仅增加了弹窗的层次感，还不会完全遮挡页面的其他内容，让用户在操作时能够保持对整个页面的全局视野。通过`flex`布局，弹窗的内容能够自动居中显示，无论用户的屏幕大小如何，都能保证弹窗的内容始终处于页面的中心位置。弹窗的内容区域具有圆角（`border-radius`）和阴影（`box-shadow`）效果，这些效果的运用增强了视觉层次感，使弹窗看起来更加立体、精致。例如，公告弹窗的背景颜色为`rgba(0, 0, 0, 0.7)`，这种半透明的黑色背景给人一种神秘而专业的感觉；内容区域的背景为白色，圆角为`15px`，阴影为`0 10px 30px rgba(0, 0, 0, 0.3)`，这些细节的处理使得公告弹窗在视觉上更加突出，吸引用户的注意力。
        - **工具栏样式**：工具栏固定在页面底部中央，这种布局方式符合用户的操作习惯，方便用户在需要时随时切换工具。通过`position: fixed`、`bottom: 20px`和`left: 50%`配合`transform: translateX(-50%)`实现了固定位置的效果，确保工具栏始终位于页面的底部中央。采用`flex`布局，按钮之间有一定的间距（`gap: 10px`），使得按钮排列整齐、有序。工具栏的背景为半透明的白色（`rgba(255, 255, 255, 0.9)`），这种半透明的效果既不会过于突兀，又能与页面的整体风格相融合。同时，添加了内边距（`padding: 10px 20px`），使得工具栏的内容与边框之间有一定的间距，提高了用户的操作舒适度。
        - **按钮样式**：工具按钮（`.tool-button`）具有圆角（`border-radius: 10px`），这种圆润的设计给人一种友好、亲切的感觉。默认背景为半透明的白色（`rgba(255, 255, 255, 0.8)`），鼠标悬停时背景变为不透明的白色（`rgba(255, 255, 255, 1)`），并伴有轻微的向上位移（`transform: translateY(-2px)`）效果，这种交互效果给用户提供了视觉上的反馈，让用户感受到按钮的可点击性。点击时恢复原位（`transform: translateY(0)`），使得按钮的交互更加自然、流畅。
        - **画布样式**：画布的背景为白色，这种简洁的背景色为用户的绘制提供了一个干净、清晰的画布。鼠标指针样式为十字准线（`cursor: crosshair`），方便用户进行精确的绘制操作，尤其是在需要绘制直线、图形等精确元素时，十字准线能够帮助用户更好地定位和控制绘制的路径。
3. **JavaScript**
    - **交互功能实现**：JavaScript 是实现白板交互功能的核心技术，它就像是一个幕后的魔法师，通过监听用户的各种事件，将用户的操作转化为具体的功能实现。无论是鼠标的点击、移动、松开，还是按钮的点击事件，JavaScript 都能精准地捕捉并做出相应的响应，从而实现了画笔绘制、橡皮擦除、清屏、保存等丰富的功能。
    - **主要功能实现细节**：
        - **事件监听**：在`script.js`文件中，使用`addEventListener`方法为各个元素添加事件监听器，就像是在各个元素上安装了“耳朵”，能够实时监听用户的操作。例如，为画布添加了`mousedown`、`mousemove`、`mouseup`和`mouseleave`事件监听器，当用户在画布上按下鼠标时，`mousedown`事件被触发，程序开始记录用户的绘制起点；当用户移动鼠标时，`mousemove`事件被触发，程序根据用户的鼠标移动路径进行绘制；当用户松开鼠标时，`mouseup`事件被触发，绘制结束；当用户的鼠标离开画布时，`mouseleave`事件被触发，绘制也会停止。通过这些事件的监听和处理，实现了画笔和橡皮擦的交互功能。
        - **状态管理**：通过变量（如`isDrawing`、`isErasing`、`brushSize`、`brushColor`、`eraserSize`等）来管理当前的绘制状态和工具参数，就像是一个智能的控制器，能够根据用户的操作实时调整绘制的状态和参数。例如，当用户点击画笔按钮时，`isErasing`变量被设置为`false`，表示当前处于画笔模式；当用户点击橡皮擦按钮时，`isErasing`变量被设置为`true`，表示当前处于橡皮擦模式。同时，`brushSize`和`brushColor`变量分别记录了画笔的大小和颜色，`eraserSize`变量记录了橡皮擦的大小，这些变量的值会根据用户在设置弹窗中的操作进行实时更新。
        - **功能函数**：定义了一些功能函数，如`setActiveButton`函数，用于设置当前激活的工具按钮。该函数会遍历所有的工具按钮，移除它们的`active`类，然后为当前点击的按钮添加`active`类，以实现按钮的激活状态切换。这个函数的实现就像是一个开关控制器，确保每次只有一个按钮处于激活状态，方便用户直观地了解当前使用的工具。

### （二）字体
使用了`Inter`字体，通过 Google Fonts 引入。`Inter`字体是一款现代感十足的字体，具有良好的可读性和美观性。它的设计简洁、清晰，能够在不同的屏幕尺寸和分辨率下都保持良好的显示效果，为网页提供了清晰、美观的文字显示效果。在 CSS 中，通过`font-family: "Inter", sans-serif;`将其应用到整个页面的文本元素上，确保页面的文字风格统一、协调。

## 三、主要功能

### （一）公告弹窗
1. **初始引导**：当用户首次打开白板时，公告弹窗会自动弹出，就像是一位热情的导游，向用户展示欢迎信息和使用提示。欢迎信息能够让用户感受到友好的氛围，使用提示则详细地介绍了白板的基本功能和操作方法，帮助用户快速了解如何使用白板。例如，会告知用户如何切换工具、如何调整画笔和橡皮擦的大小和颜色等，让用户在最短的时间内熟悉白板的操作流程。
2. **关闭功能**：弹窗右上角有一个关闭按钮（`id="close-announcement"`），用户可以点击该按钮关闭公告弹窗。关闭按钮的样式为`×`，简洁明了，易于识别。鼠标悬停时会有颜色变化效果（从`#888`变为`#333`），这种交互效果为用户提供了视觉反馈，让用户知道该按钮是可以点击的。当用户点击关闭按钮时，公告弹窗会从页面上消失，不会再干扰用户的操作。

### （二）工具栏
1. **功能按钮**：工具栏包含四个功能按钮，分别是画笔（`id="brush"`）、橡皮擦（`id="eraser"`）、清屏（`id="clear"`）和保存（`id="save"`）按钮。每个按钮都有对应的图标和文字标签，图标能够直观地表达按钮的功能，文字标签则进一步明确了按钮的作用，方便用户识别。例如，画笔按钮的图标是`🖌️`，文字标签是“画笔”；橡皮擦按钮的图标是`🧽`，文字标签是“橡皮”；清屏按钮的图标是`🧹`，文字标签是“清屏”；保存按钮的图标是`💾`，文字标签是“保存”。
2. **交互效果**：按钮具有丰富的交互效果，当鼠标悬停在按钮上时，按钮的背景颜色会从半透明的白色变为不透明的白色，并且会向上轻微位移（`transform: translateY(-2px)`），这种交互效果给用户一种视觉上的反馈，让用户感受到按钮的可点击性。当按钮被点击时，会触发相应的功能，并通过添加`active`类来突出显示当前激活的按钮。例如，当用户点击画笔按钮时，画笔按钮会变为激活状态，其他按钮则变为非激活状态，用户可以清晰地知道当前使用的工具是画笔。

### （三）画笔功能
1. **绘制操作**：用户点击画笔按钮后，进入画笔模式，可以在画布上进行绘制操作。在绘制过程中，鼠标指针变为十字准线，方便用户进行精确的绘制。用户可以自由地绘制各种图形、线条、文字等，充分发挥自己的创意和想象力。
2. **设置弹窗**：点击画笔按钮后，会弹出画笔设置弹窗（`id="brush-settings"`）。在弹窗中，用户可以通过滑动滑块（`id="brush-size"`）来调整画笔的大小，范围为 1 到 50。滑块的设计方便用户直观地调整画笔的大小，用户可以根据需要选择合适的画笔大小进行绘制。同时，用户还可以通过颜色选择器（`id="brush-color"`）来选择画笔的颜色，颜色选择器提供了丰富的颜色选项，用户可以选择自己喜欢的颜色进行绘制。

### （四）橡皮擦功能
1. **擦除操作**：用户点击橡皮擦按钮后，进入橡皮擦模式，可以擦除画布上的绘制内容。在擦除过程中，橡皮擦的大小和效果会根据用户的设置而变化。用户可以轻松地擦除不需要的绘制内容，就像使用真实的橡皮擦一样方便。
2. **设置弹窗**：点击橡皮擦按钮后，会弹出橡皮设置弹窗（`id="eraser-settings"`）。在弹窗中，用户可以通过滑动滑块（`id="eraser-size"`）来调整橡皮擦的大小，范围为 1 到 50。用户可以根据需要选择合适的橡皮擦大小进行擦除操作，例如，当需要擦除大面积的内容时，可以选择较大的橡皮擦大小；当需要擦除细小的内容时，可以选择较小的橡皮擦大小。

### （五）清屏功能
点击清屏按钮（`id="clear"`），可以将画布上的所有内容清除，恢复到初始的空白状态。该功能通过 JavaScript 中的`clearRect`方法实现，即`ctx.clearRect(0, 0, canvas.width, canvas.height);`，其中`ctx`是画布的 2D 绘图上下文，`canvas.width`和`canvas.height`分别是画布的宽度和高度。当用户需要重新开始绘制或者清除画布上的混乱内容时，清屏功能可以帮助用户快速实现这一需求。

### （六）保存功能
点击保存按钮（`id="save"`），可以将画布上的当前内容保存为图片，图片格式为 PNG。该功能通过创建一个`<a>`元素，设置其`download`属性为`"whiteboard.png"`，`href`属性为画布的`toDataURL()`方法返回的图片数据，然后模拟点击该元素来实现图片的下载。用户可以将自己的绘制作品保存下来，方便后续的查看、分享和打印。

## 四、界面设计

### （一）整体布局
采用简洁明了的布局设计，将公告弹窗、工具栏和画布合理地分布在页面上。公告弹窗在页面打开时全屏显示，能够吸引用户的注意力，让用户第一时间了解白板的相关信息。工具栏固定在页面底部中央，这种布局方式符合用户的操作习惯，用户可以方便地使用工具栏上的功能按钮。画布占据整个页面的剩余空间，为用户提供了充足的绘制区域，用户可以自由地发挥创意，进行各种绘制和编辑操作。

### （二）弹窗设计
1. **样式特点**：弹窗具有半透明的背景，使用`flex`布局实现内容的居中显示。这种设计不仅增加了弹窗的层次感，还不会完全遮挡页面的其他内容，让用户在操作时能够保持对整个页面的全局视野。内容区域有圆角和阴影效果，增强了视觉层次感，使弹窗看起来更加立体、精致。例如，公告弹窗的内容区域（`.announcement-content`）背景为白色，圆角为`15px`，阴影为`0 10px 30px rgba(0, 0, 0, 0.3)`，最大宽度为`500px`，并通过`animation: slideIn 0.5s ease;`添加了淡入动画效果。这种淡入动画效果使得公告弹窗在弹出时更加流畅、自然，给用户带来更加舒适的视觉体验。
2. **内部结构**：弹窗内部的元素采用合理的排版，如公告弹窗中包含标题（`h2`）、段落（`p`）、提示列表（`ul`）等，并且通过设置不同的字体大小和颜色来区分不同的内容层次。标题（`h2`）的字体较大、颜色较深，能够突出显示重要信息；段落（`p`）的字体适中，用于详细介绍相关内容；提示列表（`ul`）的字体较小，采用列表的形式，方便用户快速浏览和了解各种提示信息。

### （三）画布设计
画布作为用户绘制内容的主要区域，背景为白色，这种简洁的背景色为用户的绘制提供了一个干净、清晰的画布。鼠标指针样式为十字准线（`cursor: crosshair`），方便用户进行精确的绘制操作，尤其是在需要绘制直线、图形等精确元素时，十字准线能够帮助用户更好地定位和控制绘制的路径。画布的大小会根据浏览器窗口的大小自动调整，确保在不同设备上都能提供良好的使用体验。无论是在电脑、平板还是手机上，用户都可以方便地使用画布进行绘制和编辑操作。

## 五、动画效果
公告弹窗具有淡入动画效果，通过 CSS 的`@keyframes`规则定义了`slideIn`动画。动画从上方滑入，初始状态（`from`）时，弹窗的透明度为 0，并且向上偏移`50px`；结束状态（`to`）时，弹窗的透明度为 1，偏移量为 0。通过将该动画应用到公告弹窗的内容区域（`.announcement-content`）上，为用户带来更加流畅和舒适的视觉体验。具体代码如下：
```css
@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 
```