## day4
* 左侧导航条(主页，折叠，搜索)
* 折叠svg动画优化
* svg path stroke-dashoffset 放弃 （svg是环形的路径设置的不好看）
```
// .pathx {
//     stroke: rgb(204, 0, 255);
//     stroke-width: 10px;
//     stroke-dasharray: var(--l);
//     stroke-dashoffset: var(--l);
//     animation: animate1 2s forwards;
//     fill: white;
//     stroke-linecap: round;
// }
```
* 左侧头像框折叠动效尝试了animation和keyframe
```scss
@keyframes rotate-beyond{
    90% {
        transform: rotateZ(390deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
```
* 设置失焦折叠菜单遇到瓶颈了，明天再搞吧
* 还设置了路由，虽然还没搞明白