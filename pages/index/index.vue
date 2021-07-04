<template>
	<view class="container">
		<swiper :indicator-dots="true" :autoplay="true">
			<swiper-item v-for="top_story in top_stories" :key="top_story.id"> 
				<view>
					<text>{{top_story.title}}</text>
					<image :src="top_story.image"></image>
				</view>
			</swiper-item>
		</swiper>
		<uni-list>
			<uni-list-item v-for="item in stories" :title="item.title" :key="item.id" clickable @click="goDetail(item.id)">
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
				top_stories: null,
			}
		},
		methods: {
			getList() {
				console.log('this getList');
				api.getNews().then( data => {
					this.stories = data.data.stories;
					this.top_stories = data.data.top_stories;
				});
			},
			goDetail(story_id) {
				console.log('this story_id is ' + story_id);
				this.$router.push(
					{
						name: 'detail',
						params: {
							id: story_id
						}
					}
				);
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
