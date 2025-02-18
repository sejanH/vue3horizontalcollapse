<script setup lang="ts">
import HorizontalCollapseItem from "./Item.vue";
import { RouterLink } from 'vue-router';
defineProps({
    items: {
        type: Array<ItemType>,
    },
    activeIndex: {
        type: [Boolean, Number],
    },
    itemSpan: {
        type: Number,
        default: 0,
    },
    itemMinWidth: {
        type: String,
        default: "10rem",
    },
    itemMaxWidth: {
        type: String,
        default: "100%",
    },
    defaultHeight: {
        type: String,
        default: "250px",
    },
});
</script>
<script lang="ts">
interface ItemType {
    title: string;
    bgColor?: string;
    bodyType: string;
    body?: any;
}

export default {
    name: "HorizontalCollapse",
};
</script>
<template>
    <section class="horizontal-collapse" :style="`min-height:${defaultHeight}`">
        <div class="horizontal-collapse__inner">
            <HorizontalCollapseItem
                :bodyType="item.bodyType"
                :defaultHeight="defaultHeight"
                :itemSpan="itemSpan"
                :itemMinWidth="itemMinWidth"
                :itemMaxWidth="itemMaxWidth"
                :activeDefault="index === activeIndex"
                :style="`background-color:${item.bgColor}`"
                v-for="(item, index) in items"
                :key="index"
            >
                <template #header>
                    <div class="horizontal-collapse__inactive-content">
                        <h3 class="horizontal-collapse__heading">
                            {{ item.title }}
                        </h3>
                    </div>
                </template>
                <template #content>
                    <div
                        class="horizontal-collapse__active-content"
                        :style="`max-height:${defaultHeight}`"
                    >
                        <h3 class="horizontal-collapse__heading">
                            {{ item.body.activeTitle }}
                        </h3>
                        <p
                            class="horizontal-collapse__body"
                            v-html="item.body.description"
                        ></p>
                        <a
                            :href="item.body.link?.url"
                            v-if="item.body.link?.el === 'href'"
                            >{{ item.body.link?.text }}</a
                        >
                        <component is="RouterLink"
                            :to="item.body.link?.url"
                            v-if="item.body.link?.el === 'router-link'"
                            >{{ item.body.link?.text }}</component
                        >
                    </div>
                </template>
                <template #component>
                    <div
                        class="horizontal-collapse__active-content"
                        :style="`max-height:${defaultHeight}`"
                    >
                        <h3 class="horizontal-collapse__heading">
                            {{ item.body.activeTitle }}
                        </h3>
                        <p class="horizontal-collapse__body">
                            <component :is="item.body.description"></component>
                        </p>
                    </div>
                </template>
            </HorizontalCollapseItem>
        </div>
    </section>
</template>

<style scoped>
.horizontal-collapse {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.horizontal-collapse *,
.horizontal-collapse *:before,
.horizontal-collapse *:after {
    box-sizing: border-box;
}

.horizontal-collapse__inner {
    padding: 0.5rem;
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
}

.horizontal-collapse__item {
    padding: 1rem;
    min-width: 10rem;
    position: relative;
    transition: width 0.5s;
}

.horizontal-collapse__item.is-active .horizontal-collapse__inactive-content {
    opacity: 0;
    display: none;
}

.horizontal-collapse__item.is-active .horizontal-collapse__active-content {
    opacity: 1;
    display: block;
    overflow-y: auto;
}

.horizontal-collapse__item-inner {
    padding: 3rem;
}

.horizontal-collapse__inactive-content {
    opacity: 1;
    transition: opacity 0.5s;
    position: absolute;
    top: 2rem;
    left: 1rem;
}

.horizontal-collapse__inactive-content .horizontal-collapse__heading {
    user-select: none;
    font-size: 1.75rem;
    margin-bottom: 0;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
}

.horizontal-collapse__active-content {
    overflow-y: auto;
}

.horizontal-collapse__heading {
    margin-top: 0;
    margin-bottom: 0.25rem;
}

.horizontal-collapse__body {
    margin-bottom: 0.5rem;
}

.horizontal-collapse__link {
    display: inline-block;
    background-color: #fff;
    color: #333;
    text-decoration: none;
    line-height: 1;
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-size: 1.7rem;
    font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
