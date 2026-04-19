# YEJI's Book of Answers

## Project Overview

这是一个fan-made的web project，灵感来自《答案之书》。用户点击一个按钮，随机抽取一条来自ITZY队长YEJI的bubble消息，作为回应此刻心中问题的"答案"。

本质上是一种温暖的陪伴体验——借用外界的随机性帮助用户确定心意，同时让YEJI的global粉丝（MIDZY）通过她过往说过的话语获得鼓励。

## Background & Motivation

- **灵感来源**：《答案之书》概念 + 幸运饼干（YEJI喜欢cookies）+ YEJI在bubble上三四年积累下来的暖心发言
- **内容来源**：开发者本人自2021年订阅YEJI bubble以来收集的~70-100条截图
- **性质**：纯粹的粉丝项目，非商业用途

## Target Audience

- **Primary**：ITZY的global粉丝（MIDZY），尤其是喜欢YEJI的粉丝
- **使用场景**：心情低落、迷茫、需要鼓励的时刻；或者单纯想收到一条YEJI的话
- **语言**：v1.0 中文，配合抽取中文翻译的截图；v1.2 加英文，配合抽取有英文翻译的截图；v1.4 加韩文版本，但是抽取的沿用英文版本截图

## Design Direction

### Tone & Feel
温暖可爱、有仪式感，但不过度甜腻。融入YEJI个人风格元素（黑心🖤、🌼等她常用的颜文字）。

### Visual Style
- 手绘感线条插画
- 暖米色背景
- 衬线字体标题（给品牌感）
- 整体克制，留白充分

### Key Design Decisions
- **展示原始bubble截图而非重排文字**：保留原汁原味的对话感，也是对bubble平台的尊重
- **单次点击随机抽取**：不做"输入问题"作为必选项，允许用户纯粹"心中默念"即可；但保留输入框让想写的人可以写
- **不设每日次数限制**：保持casual fan experience
- **移动端优先**：bubble本身是手机app，粉丝主要在手机上体验。并且本project target users更多在手机点开

## Product Structure

四个核心页面（详见Figma wireframe）：
1. **Landing** — 标题 + 输入框 + 信封插画 + "打开"按钮
2. **动画过渡** — 信封打开动画
3. **结果** — 随机抽取的bubble截图 + "再翻一次"按钮
4. **About** — 项目介绍、声明、开发者notes

## Tech Stack

- **Frontend**：Vanilla HTML / CSS / JavaScript（不用框架）
- **Design**：Figma（所有视觉资产从这里导出）
- **Hosting**：GitHub Pages
- **Version Control**：Git + GitHub

## Working Preferences

开发者是coding零基础、第一次vibe coding，通过Claude Code执行所有代码工作。请遵循以下协作方式：

- **小步迭代**：一次做一件清楚的事，做完让我看效果再进行下一步
- **解释你做了什么**：每完成一项改动，简要说明用了什么技术/思路、为什么这么做，帮助我学习
- **不要自作主张改设计**：所有视觉来自Figma，如果觉得Figma里的设计有问题，提出你的建议和我讨论，先别直接改
- **视觉资产优先用Figma导出的SVG/PNG**：不要自己用代码画插画元素（比如信封），除非我明确要求
- **代码风格**：可读性优先，加适度的注释，方便我理解

## Content Assets

- `/images/bubbles/` — YEJI bubble消息截图（目前84张，配合中文翻译的已全部整理）
- `/images/illustrations/` — 从Figma导出的手绘元素（信封等）

## Current Version Plan

- **v1.0** 中文版，完整四页面 + 信封打开动画 + 随机抽取逻辑
- **v1.2**（post-launch）：加入英文版
- **v1.4** 增加韩文版

## Out of Scope (for now)

- 用户账号系统
- 收藏/历史记录功能
- 后端数据库（bubble截图直接作为静态资产）
- 社交分享（用户自己长按保存即可）
