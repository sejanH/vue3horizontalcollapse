
<script lang="ts">
import { reactive } from 'vue';
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
        bodyType: {
            type: String,
            default: 'json'
        },
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
    <div v-click-away="onClickAway" @click="isActive = !isActive" :style="`width: ${isActive ? itemMaxWidthComputed : itemMinWidth
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
<style scoped>
:root {
    --green-accent-3: #00E676;
    --teal-accent-3: #1DE9B6;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background: rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 0px;
    background: rgba(0, 0, 0, 0.5);
    cursor: move;
    /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.6);
    cursor: move;
    /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(0, 0, 0, 0.1);
}

.scrollbar::-webkit-scrollbar-thumb {
    background: var(--green-accent-3);
    border-radius: 0px;
}

.scrollbar::-webkit-scrollbar {
    width: 7px;
    background: var(--teal-accent-3);
    border-radius: 0px;
}
</style>
