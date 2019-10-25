<template>
	<div class="content">
		<div class="status-bar" :style="{height:statusHeight+'wx'}"></div>
		<div class="nav">
		
			<div class="search-wrapper">
				<input class="search-input" placeholder="默认关键字" @focus="inputfocus" />
				<text class="iconfont search">{{iconSearch}}</text>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				statusHeight: 20,
				city: '北京市',
				iconSearch: '\ue628',
				iconLocation: '\ue611',
				iconYuyin: '\ue64e',
				iconTongzhi: '\ue729',
			};
		},
		beforeCreate() {
			const domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				'fontFamily': 'iconfont', //注意这里必须是驼峰命名，跟上面的css样式对照
				'src': "url('/static/iconfont/iconfont.ttf')", //绝对路径
			})
		},
		mounted() {
			uni.getLocation({
				geocode: true,
				success: (res) => {					
					this.city = res.address.city;
				},
				fail: (res) => {

				}
			})
			uni.getSystemInfo({
				success: (res) => {
					this.statusHeight = res.statusBarHeight;
				}
			});
		},
		methods: {

		}
	};
</script>
<style>
	.iconfont {
		font-family: iconfont;
		font-size: 42px;
	}

	.location {
		color: #ffc50a;
	}

	.tongzhi,
	.yuyin {
		color: #000000;
	}

	.content {
		flex-direction: column;
		font-size: 25px;
	}

	.status-bar {
		background-color: #fff;
	}

	.nav {
		width: 750px;
		height: 88px;
		padding: 0 20px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
	}

	.city {
		color: #000000;
		font-size: 25px;
	}

	.city-wrapper {
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.search-wrapper {
		position: relative;
		flex-direction: row;
		
	}

	.search-input {
		width: 450px;
		height: 60px;
		font-size: 25px;
		background-color: #f5f5f5;
		border-radius: 30px;
		padding-left: 60px;
	}

	.search {
		position: absolute;
		left: 10px;
		top: 0;
		height: 60px;
		line-height: 60px;
	}

	.btn-wrapper {
		flex-direction: row;
	}
</style>
