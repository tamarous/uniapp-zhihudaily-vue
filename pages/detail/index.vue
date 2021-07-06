<template>
	<view v-html="detail_data.body">
	</view>
</template>

<script>
import api from '../../api/index.js'
export default {
	data: function() {
		return {
			detail_data: null,
		}
	},
	methods: {
		fetchDetail(story_id) {
			api.getNewsById(story_id).then( data => {
				console.log('getNewsById: ' + story_id);
				this.detail_data = data.data;
				console.log('detail: ' + JSON.stringify(this.detail_data));
			});
		}
	},
	onLoad() {
		console.log('this route: ' + JSON.stringify(this.$Route));
		this.fetchDetail(this.$Route.query.id);
	}
}
</script>

<style>
</style>
