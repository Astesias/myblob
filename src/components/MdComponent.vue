<template>
  <!-- <div>
    <md-editor v-model="text" @onChange="onChange" @onUploadImg="onUploadImg" />
  </div> -->
  <div id="editorcontainer">
    <MdPreview :editorId="id" :modelValue="text" style="background-color: transparent"/>
    <MdCatalog :editorId="id" :scrollElement="scrollElement" scrollElementOffsetTop="0"/>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

export default defineComponent({
  name: "MdComponent",
  components: {
    // MdEditor,
    MdPreview,
    MdCatalog
  },
  props: {
    scrollElement : HTMLElement,
    text : String
  },
  data() {
    return {
      customStyle: ".md-editor-preview h2 { border-bottom:1px solid #bbb }"
    }
  },
  methods: {
    // onChange(val) {},
    onUploadImg(files) {
      console.log(Array.from(files));
    },
  },
});
</script>

<style scoped>
.md-editor-previewOnly h2
{
  border-bottom:1px solid #bbb;
}

</style>