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
		this.$AppReady.then(()=>{
			console.log(this.$route);
			this.fetchDetail(this.$route.params.id);
		})
	}
}
</script>

<style>
</style>
