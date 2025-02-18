
<script lang="ts">
interface ItemType {
  title: string,
  bgColor?: string,
  bodyType: string,
  body?: any
}
</script>
<script setup lang="ts">
import HorizontalCollapseMain from '../lib/components/Main.vue';
import HorizontalCollapseItemComponent from '../lib/components/ComponentItem.vue';
defineProps({
  items: {
    type: Array<ItemType>,
    default: [
      {
        title: "List",
        bgColor: '#bfbdbd',
        bodyType: "json",
        body: {
          activeTitle: "List active",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                            modi laudantium facere aut, nemo praesentium, labore doloremque,
                            porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis.
                            Recusandae, cupiditate? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptates modi laudantium facere aut, nemo
                            praesentium, labore doloremque, porro ipsam qui nihil animi ea
                            maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?`,
          link: {
            el: 'href',
            url: '/dashboard/media',
            text: 'Click here'
          }
        }
      },
      {
        title: "Edit",
        bgColor: '#8a8989',
        bodyType: "json",
        body: {
          activeTitle: "Edit active",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                            modi laudantium facere aut, nemo praesentium, labore doloremque,
                            porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis.
                            Recusandae, cupiditate? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptates modi laudantium facere aut, nemo
                            praesentium, labore doloremque, porro ipsam qui nihil animi ea
                            maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?`
        }
      },
      {
        title: "Create",
        bgColor: '#bfbdbd',
        bodyType: "json",
        body: {
          activeTitle: "Create active",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                            modi laudantium facere aut, nemo praesentium, labore doloremque,
                            porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis.
                            Recusandae, cupiditate? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptates modi laudantium facere aut, nemo
                            praesentium, labore doloremque, porro ipsam qui nihil animi ea
                            maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?`
        }
      },
      {
        title: "Delete",
        bgColor: '#8a8989',
        bodyType: "component",
        body: {
          activeTitle: "Delete active",
          description: HorizontalCollapseItemComponent
        },
      }
    ]
  },
  defaultHeight: { type: String, default: "16rem" },
  activeIndex: { type: Number, default: 0 },
  itemSpan: { type: Number, default: 0 },
  itemMinWidth: { type: String, default: "10rem" },
  itemMaxWidth: { type: String, default: "100%" },
});
</script>

<template>
  <HorizontalCollapseMain :items="items" :defaultHeight="defaultHeight" :activeIndex="activeIndex" :itemSpan="itemSpan"
    :itemMinWidth="itemMinWidth" :itemMaxWidth="itemMaxWidth">
  </HorizontalCollapseMain>
</template>