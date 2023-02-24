
<script lang="ts">
import {  reactive } from 'vue';
import { mixin as VueClickAway } from "vue3-click-away";

export default {
    name: 'HorizontalCollapseItem',
    mixins: [VueClickAway],
    setup(props) {
        let { activeDefault, itemSpan, itemMaxWidth } = props;
        let itemMaxWidthComputed: String = itemMaxWidth;
        if (itemSpan !== 0) {
            itemMaxWidthComputed = `calc(${itemMaxWidth} / ${itemSpan})`;
        }
        const isActive = activeDefault;
        return reactive({ isActive, itemMaxWidthComputed });
    },
    props: {
        activeDefault: {
            type: Boolean
        },
        bgColor: {
            type: String,
            default: 'transparent'
        },
        itemSpan: {
            type: Number
        },
        itemMinWidth: {
            type: String,
            default: "10rem"
        },
        itemMaxWidth: {
            type: String,
            default: "100%"
        },
        defaultHeight: {
            type: String
        }
    },
    methods: {
        onClickAway() {
            this.isActive = false;
        }
    }
}
</script>
<template>
    <div v-click-away="onClickAway" @click="isActive = !isActive" :style="
        `width: ${isActive ? itemMaxWidthComputed : itemMinWidth
        };min-width: ${itemMinWidth};max-width: ${itemMaxWidthComputed}`
    " class="horizontal-collapse__item" :class="{ 'is-active': isActive }" tabindex="0" role="button">
        <slot name="header"></slot>
        <div :style="`height:${defaultHeight}`">
            <Transition name="fade">
                <slot name="content" v-if="isActive"></slot>
            </Transition>
        </div>
    </div>
</template>
