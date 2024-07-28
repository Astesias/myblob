## day11
24.4.16
* 渐变色字体
```css
    background-image: linear-gradient(to right, green, white);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
```
* 配上animation，~~手写~~脚本生成100个关键帧，产生了平滑的字体颜色变化动画（其实这动画和颜色循环移动还是有区别的，算是各点循环变化？看起来还行就行）
```python
# 生成动画的脚本，最后一帧要改为100%不然会闪烁
# 我去我无敌了
import numpy as np

num_frame = 100
base1 = \
'''
@keyframes led-text =
{}
+
'''
base1 = base1.format('{}'*num_frame)

base2 = \
'''
{}% =
    background-image: linear-gradient(to right, rgb{},rgb{},rgb{});
+
'''

base3 = '({},{},{})'

rgb3_0 = np.array([(0,128,0),(200,0,200),(255,0,0)],dtype=np.float32)
rgb3_33 = np.concatenate((rgb3_0[-1:], rgb3_0[:-1]))
rgb3_66 = np.concatenate((rgb3_33[-1:], rgb3_33[:-1]))
rgb3_100 = rgb3_0.copy()

cs = [rgb3_0,rgb3_33,rgb3_66,rgb3_100]
checkpoint = len(cs)-1
per_step = round(100/num_frame)

base2_list = []
for frame in range(num_frame):
    frame_name = frame*per_step if frame!=num_frame-1 else 100
    
    _ = int(frame//(num_frame/3))
    start = cs[_]
    end  = cs[_+1]
    index = frame - int(num_frame/checkpoint*_)

    total = int(num_frame/3)
    
    cdis = []
    cdis.append( end-start )
    cdis = np.concatenate(cdis)
    cdis *= index/total
    res = start + cdis
    res = res.astype(int).tolist()
        
    base2_list.append(base2.format(
                                    frame_name,
                                    base3.format(*res[0]),
                                    base3.format(*res[1]),
                                    base3.format(*res[2]),
                      ))
    
s = base1.format(*base2_list)
s = s.replace('=','{').replace('+','}')
print(s)

```

* 监听window变化，适应布局
```js
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
```
* 还是把登录板的透明显示隐藏动画取消了，只透明不隐藏bug太多了
* 昨天搞清楚after元素怎么悬浮变暗了，结果今天还是加不到文章头图上
* 写好vue简单，写好css的真得是高手吧，css还得再重新架构一下，加点js进去会好写点吧
* 还是全部用class控制吧，media怪难受的，不能完全控制布局因为还有按钮，还不能extend。
