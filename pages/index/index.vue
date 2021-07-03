<template>
	<view class="container">
		<swiper :indicator-dots="true" :autoplay="true">
			<swiper-item v-for="top_story in topStories" :key="top_story.id">
				<view>
					<text>{{top_story.title}}</text>
					<image :src="top_story.image"></image>
				</view>
			</swiper-item>
		</swiper>
		<uni-list>
			<uni-list-item v-for="(item,index) in stories" :title="item.title">
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import api from '../../api/index.js'
	export default {
		data() {
			return {
				stories: null,
				topStories: null,
			}
		},
		methods: {
			getList() {
				api.getNews().then( data => {
					this.stories = data.data.stories;
					this.topStories = data.data.top_stories;
				});
			}
		},
		mounted() {
			this.getList();
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
