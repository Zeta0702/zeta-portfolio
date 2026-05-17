# 内容修改指南

## 文件位置

| 内容 | 文件 |
|------|------|
| 首页文案 | `src/page-home.jsx` |
| 项目列表 | `src/page-work.jsx` |
| 项目详情 | `src/project-data.jsx` |
| 关于/CV/博客/联系 | `src/page-rest.jsx` |
| 导航/页脚 | `src/components.jsx` |
| 样式 | `styles.css` |

---

## 1. 修改文案

所有文案都是双语格式：`en`（英文）和 `zh`（中文）。

### 示例：修改首页标题

打开 `src/page-home.jsx`，找到：

```jsx
<T en="Consider creative methods such as" zh="尝  试  一  种  创  作  方  式  ——" />
```

直接修改 `en="..."` 和 `zh="..."` 里的内容即可。

### 示例：修改项目描述

打开 `src/project-data.jsx`，找到对应的项目（如 `"luci-ai"`），修改 `desc_en` 和 `desc_zh`：

```jsx
desc_en: "新的英文描述...",
desc_zh: "新的中文描述...",
```

---

## 2. 添加图片板块

在 `src/project-data.jsx` 的对应项目 `sections` 数组里，添加一个 `image-grid` section：

```jsx
{
  type: "image-grid",
  label_en: "05 — Gallery",
  label_zh: "05 — 图集",
  title_en: "Project visuals.",
  title_zh: "项目视觉。",
  cols: 2,  // 可选：2、3、4 列
  images: [
    {
      src: "images/projects/luci-ai/gallery-1.jpg",  // 图片路径（放 public/images/...）
      label_en: "Dashboard",
      label_zh: "仪表盘",
      sub_en: "UI",
      sub_zh: "界面",
      aspectRatio: "16/9"  // 可选：16/9, 4/3, 3/4, 1/1
    },
    {
      src: "images/projects/luci-ai/gallery-2.jpg",
      label_en: "Mobile",
      label_zh: "移动端",
      sub_en: "App",
      sub_zh: "应用",
    },
  ],
}
```

**图片存放位置**：`public/images/projects/<项目名>/`

---

## 3. 添加视频

### 方式 A：在线视频（YouTube / Vimeo）

```jsx
{
  type: "video",
  label_en: "06 — Video",
  label_zh: "06 — 视频",
  title_en: "Product launch video.",
  title_zh: "产品发布视频。",
  videoUrl: "https://www.youtube.com/embed/视频ID",
  caption_en: "2M+ views",
  caption_zh: "200万+播放",
}
```

> YouTube 链接必须是 `embed` 格式：`https://www.youtube.com/embed/VIDEO_ID`

### 方式 B：本地视频文件

把视频文件放到 `public/videos/` 目录下，然后：

```jsx
{
  type: "video",
  label_en: "06 — Video",
  label_zh: "06 — 视频",
  title_en: "Demo video.",
  title_zh: "演示视频。",
  videoUrl: "videos/my-video.mp4",
}
```

---

## 4. 添加 PDF

把 PDF 文件放到 `public/documents/` 目录下，然后：

```jsx
{
  type: "pdf",
  label_en: "07 — Document",
  label_zh: "07 — 文档",
  title_en: "Design specification.",
  title_zh: "设计规格文档。",
  pdfUrl: "documents/my-file.pdf",
  downloadLabel_en: "Download PDF",
  downloadLabel_zh: "下载 PDF",
}
```

这会显示：
- PDF 文件名
- 下载按钮
- 内嵌 PDF 预览（iframe）

---

## 5. 部署到 Vercel

### 前提
- 安装 Vercel CLI：`npm i -g vercel`
- 已登录：`vercel login`

### 部署命令

```bash
cd /Users/a123/Desktop/zeta
vercel --prod
```

### 或连接 GitHub 自动部署

1. 把代码 push 到 GitHub
2. 在 Vercel Dashboard 导入项目
3. 框架选 **Vite**
4. 自动部署

---

## 快速测试

```bash
cd /Users/a123/Desktop/zeta
npm run dev      # 本地预览
npm run build    # 构建生产包
```
