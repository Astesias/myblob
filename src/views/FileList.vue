<template>
  <div class="file-list-container">
    <h2>File List</h2>
    <ul>
      <li v-for="file in fileList" :key="file.name">
        <a :href="file.url" @click.prevent="showFileContents(file.url)">{{ file.name }}</a>
        <button @click="downloadFile(file.url)">Download</button>
      </li>
    </ul>
    <div v-if="showingFile" class="file-content">
      <h3>{{ showingFile.name }}</h3>
      <pre>{{ fileContent }}</pre>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [], // 存储文件列表的数组
            showingFile: null, // 当前展示的文件对象
            fileContent: '' // 存储文件内容的变量
        };
    },
    mounted() {
        this.loadFiles(); // 组件加载时加载文件列表
        document.body.style.overflow = 'scroll';
    },
    unmounted() {
        document.body.style.overflow = 'hidden';
    },
    methods: {
        async loadFiles() {
            try {
                const response = await fetch('/data/files.json'); // 假设有一个 files.json 存储文件信息
                const files = await response.json();
                this.fileList = files; // 将文件列表存储在组件的 fileList 数据中
            } catch (error) {
                console.error('Error loading files:', error);
            }
        },
        async showFileContents(url) {
            try {
                const response = await fetch(url); // 根据文件的 URL 加载文件内容
                const content = await response.text();
                this.fileContent = content; // 将文件内容存储在组件的 fileContent 数据中
                this.showingFile = this.fileList.find(file => file.url === url); // 设置当前展示的文件对象
            } catch (error) {
                console.error('Error loading file content:', error);
            }
        },
        downloadFile(url) {
            // 创建一个新的 <a> 元素，设置其 href 属性为文件的 URL，模拟点击下载
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', ''); // 添加 download 属性，指示浏览器下载文件
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // 点击后移除 <a> 元素
        }
    }
};
</script>

<style scoped>

body {
    overflow: scroll !important;
}

a {
    text-decoration: none;
    color: gray;
    margin-right: 20px;
}

a:hover {
    text-decoration: underline;
    /* 鼠标悬停时重新显示下划线 */
}

/* 整体容器样式 */
.file-list-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

/* 标题样式 */
.file-list-container h2 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

/* 文件列表样式 */
.file-list-container ul {
  list-style-type: none;
  padding: 0;
}

.file-list-container li {
  margin-bottom: 10px;
}

/* 文件链接样式 */
.file-list-container a {
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.file-list-container a:hover {
  color: #0056b3;
}

/* 下载按钮样式 */
.file-list-container button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.file-list-container button:hover {
  background-color: #218838;
}

/* 显示文件内容区域样式 */
.file-content {
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  user-select: text !important;
}

.file-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.file-content pre {
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
