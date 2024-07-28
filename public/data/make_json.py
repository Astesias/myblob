import os,json

search_dirs = []
for s in os.listdir('./'):
    if os.path.isdir(s):
        search_dirs.append(s)

files = []
for search_dir in search_dirs[::-1]:
    n0dir = os.listdir(search_dir)
    for d in n0dir:
        if not os.path.isdir(os.path.join(search_dir,d)):
            files.append({"name":d,"url":'/data/'+os.path.join(search_dir,d).strip('.').replace('\\','/')})
print(files)

json.dump(files,open('files.json','w',encoding='utf8'),indent=2,ensure_ascii=True)