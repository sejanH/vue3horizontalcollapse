# Vue3 Horizontal Collapse
```npm install -S vue3horizontalcollapse```
### Main component requires few props
* Items (required)
    + title: **String | required** => _shown when inactive_
    + body: **Object | required** => _shown when active_
        + activeTitle: **String | optional** => _active tab title_
        + description: **String | required** => _can render html_
        + link: **Object | optional** => _show another link_
            - el: **String | required** => _href or router-link_
            - url: **String | required** => _target url_
            - text: **String | required** => _link text_

* defaultHeight: **String | optional** => _default: ```16rem```_

* activeIndex: **String/Boolean | optional** => _set active tab for first load, default: ```false```_

* itemSpan: **Number | optional** => _span active tab for ```itemSpan``` count, default: ```0```_

* itemMinWidth: **String | optional** => _inactive tab width, default: ```10rem```_

* itemMaxWidth: **String | optional** => _container width, default: ```100%```_

### Example
![preview](https://github.com/sejanH/vue3horizontalcollapse/raw/main/previewimage.gif)
```

<script setup>
import HorizontalCollapse from 'vue3horizontalcollapse';
import HelloWorld from './components/HelloWorld.vue';
import 'vue3horizontalcollapse/dist/style.css'
defineProps({
  items: {
    default: [
      {
        title: "List",
        bgColor: '#bfbdbd',
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
            url: 'https://sejan.xyz',
            text: 'Click here'
          }
        }
      },
      {
        title: "Edit",
        bgColor: '#8a8989',
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
                description: HelloWorld
              },
            }
    ]
  }
})
</script>
<template>
  <div>
    <HorizontalCollapse :items="items" defaultHeight="300px"></HorizontalCollapse>
  </div>
</template>
```
## Authors

- [@sejanH](https://www.github.com/sejanH)

## Acknowledgements

 - [Inspired from](https://codepen.io/adrianparr/pen/ywKRPg)  -- Idea and some css were taken
 - [Readme.so](https://readme.so/) -- to write this readme

## For support

 - Create a issue
