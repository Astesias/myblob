import os
files = ['index.html'] + [os.path.join('css',_) for _ in os.listdir('css')] + [os.path.join('js',_) for _ in os.listdir('js')]
for f in files:
    with open(f,'r',encoding='utf8') as fp:
        data = fp.read()
        if f.endswith('html'):
            data=data.replace('/js','./js').replace('/css','./css').replace('/src','./src').replace('/img','./img').replace('/favicon','./favicon')
        if f.endswith('css'):
            data=data.replace('/src','../src').replace('/img','../img').replace('/favicon','../favicon')
        if f.endswith('js'):
            data=data.replace('/src','../src').replace('/img','../img').replace('/favicon','../favicon').replace('\"img/','\"../img/')
    if f.endswith('html'):
        fp = open('./new_index.html','w',encoding='utf8')
    else:
        fp = open(f,'w',encoding='utf8')
    fp.write(data)
    fp.close()