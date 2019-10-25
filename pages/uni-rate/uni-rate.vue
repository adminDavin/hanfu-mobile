<template>
	<view class="">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view>
			<view style="display: flex;padding: 0 20upx;margin-top: 41upx;">
				<image src="../../static/img/face.jpg" style="width: 115upx;height: 115upx;"></image>
				<view style="margin-left: 18upx;flex: 1;">
					<view style="color: #333;font-size: 20upx;">此处为商品名称此处为商品名称商品名称商品名称以及你的标题商品 名称商品名称商品名称</view>
					<view style="color:#999999;font-size: 20upx;margin-top: 13upx;">已选规格：白色L号</view>
				</view>
			</view>
			<view style="display: flex;align-items: center;padding-left: 20upx;margin-top: 20upx;border-bottom:1upx solid #EEE;padding-bottom: 20upx;">
				<view style="color: #666666;font-size: 26upx;margin-right: 20upx;">描述相符</view>
				<view class="uni-rate">

					<view v-for="(star, index) in stars" :key="index" :style="{ marginLeft: margin + 'px' }" class="uni-rate-icon"
					 @click="_onClick(index)">
						<uni-icons :size="size" :color="color" :type="isFill ? 'star-filled' : 'star'" />
						<view :style="{ width: star.activeWitch }" class="uni-rate-icon-on">
							<uni-icons :size="size" :color="activeColor" type="star-filled" />
						</view>
					</view>
				</view>
				<view style="color: #999999;font-size: 26upx;margin-left: 47upx;">中评</view>
			</view>
			<view style="font-size: 24upx;color: 24upx;margin-top: 29upx;margin-bottom: 29upx;color: #666666;padding-left: 21upx;">没有想象中的好，习惯性好评</view>
			<view style="border-bottom:1upx solid #EEE; padding:0 20upx;display:flex;align-items:center;flex-wrap:wrap;">
				<view style="width: 160upx;height: 160upx;width: 22%;margin-right: 2.5%;margin-bottom: 20upx;position: relative;">
					<image src="../../static/img/jia.png" style="width: 100%;height: 160upx;"></image>
					<image src="../../static/img/cuocha.png" style="width: 36upx;height: 36upx;position: absolute;right: -10upx;top: -10upx;"></image>
				</view>
				<view style="width: 160upx;height: 160upx;width: 22%;margin-right: 2.5%;margin-bottom: 20upx;position: relative;">
					<image src="../../static/img/jia.png" style="width: 100%;height: 160upx;"></image>
					<image src="../../static/img/cuocha.png" style="width: 36upx;height: 36upx;position: absolute;right: -10upx;top: -10upx;"></image>
				</view>
				<view style="width: 160upx;height: 160upx;width: 22%;margin-right: 2.5%;margin-bottom: 20upx;position: relative;">
					<image src="../../static/img/jia.png" style="width: 100%;height: 160upx;"></image>
					<image src="../../static/img/cuocha.png" style="width: 36upx;height: 36upx;position: absolute;right: -10upx;top: -10upx;"></image>
				</view>
				<view style="width: 160upx;height: 160upx;width: 22%;margin-right: 2.5%;margin-bottom: 20upx;position: relative;">
					<image src="../../static/img/jia.png" style="width: 100%;height: 160upx;"></image>
					<image src="../../static/img/cuocha.png" style="width: 36upx;height: 36upx;position: absolute;right: -10upx;top: -10upx;"></image>
				</view>
				<view style="width: 160upx;height: 160upx;width: 22%;margin-right: 2.5%;margin-bottom: 20upx;position: relative;">
					<image src="../../static/img/jia.png" style="width: 100%;height: 160upx;"></image>
					<image src="../../static/img/cuocha.png" style="width: 36upx;height: 36upx;position: absolute;right: -10upx;top: -10upx;"></image>
				</view>
			</view>
		</view>
		<view>
			<view style="display: flex;padding: 0 20upx;margin-top: 41upx;">
				<image src="../../static/img/face.jpg" style="width: 115upx;height: 115upx;"></image>
				<view style="margin-left: 18upx;flex: 1;">
					<view style="color: #333;font-size: 20upx;">此处为商品名称此处为商品名称商品名称商品名称以及你的标题商品 名称商品名称商品名称</view>
					<view style="color:#999999;font-size: 20upx;margin-top: 13upx;">已选规格：白色L号</view>
				</view>
			</view>
			<view style="display: flex;align-items: center;padding-left: 20upx;margin-top: 20upx;border-bottom:1upx solid #EEE;padding-bottom: 20upx;">
				<view style="color: #666666;font-size: 26upx;margin-right: 20upx;">描述相符</view>
				<view class="uni-rate">
		
					<view v-for="(star, index) in stars" :key="index" :style="{ marginLeft: margin + 'px' }" class="uni-rate-icon"
					 @click="_onClick(index)">
						<uni-icons :size="size" :color="color" :type="isFill ? 'star-filled' : 'star'" />
						<view :style="{ width: star.activeWitch }" class="uni-rate-icon-on">
							<uni-icons :size="size" :color="activeColor" type="star-filled" />
						</view>
					</view>
				</view>
				<view style="color: #999999;font-size: 26upx;margin-left: 47upx;">中评</view>
			</view>
			<view style="padding-left: 21upx;padding-right: 21upx;margin-top: 29upx;margin-bottom: 5upx;">
				<textarea value="" style="font-size: 24upx;color: 24upx;height: 100upx;width: 100%;
				color: #666666;word-break: break-word;"  placeholder="亲,咱平台的服务能够达到您的预期吗?您的评价是商家不断进步的源泉,写点什么 吧..." />
				</view>
			<view style="border-bottom:1upx solid #EEE; padding:0 20upx;display:flex;align-items:center;flex-wrap:wrap;">
				<view style="width: 160upx;height: 160upx;width: 22%;margin-right: 2.5%;margin-bottom: 20upx;position: relative;">
					<image src="../../static/img/jia.png" style="width: 100%;height: 160upx;"></image>
					<image src="../../static/img/cuocha.png" style="width: 36upx;height: 36upx;position: absolute;right: -10upx;top: -10upx;"></image>
				</view>
				<view style="width: 160upx;height: 160upx;width: 22%;margin-right: 2.5%;margin-bottom: 20upx;position: relative;">
					<image src="../../static/img/jia.png" style="width: 100%;height: 160upx;"></image>
					<image src="../../static/img/cuocha.png" style="width: 36upx;height: 36upx;position: absolute;right: -10upx;top: -10upx;"></image>
				</view>
				<view style="width: 160upx;height: 160upx;width: 22%;margin-right: 2.5%;margin-bottom: 20upx;position: relative;">
					<image src="../../static/img/jia.png" style="width: 100%;height: 160upx;"></image>
					<image src="../../static/img/cuocha.png" style="width: 36upx;height: 36upx;position: absolute;right: -10upx;top: -10upx;"></image>
				</view>
				<view style="width: 160upx;height: 160upx;width: 22%;margin-right: 2.5%;margin-bottom: 20upx;position: relative;">
					<image src="../../static/img/jia.png" style="width: 100%;height: 160upx;"></image>
					<image src="../../static/img/cuocha.png" style="width: 36upx;height: 36upx;position: absolute;right: -10upx;top: -10upx;"></image>
				</view>
				<view style="width: 160upx;height: 160upx;width: 22%;margin-right: 2.5%;margin-bottom: 20upx;position: relative;">
					<image src="../../static/img/jia.png" style="width: 100%;height: 160upx;"></image>
					<image src="../../static/img/cuocha.png" style="width: 36upx;height: 36upx;position: absolute;right: -10upx;top: -10upx;"></image>
				</view>
			</view>
		</view>
		<view style="color: #fff;background: #F73636;height: 100upx;
		width: 100%;display: flex;align-items: center;justify-content: center;">
			确定
		</view>
	</view>

</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	export default {
		name: 'UniRate',
		components: {
			uniIcons
		},
		props: {
			isFill: {
				// 星星的类型，是否镂空
				type: [Boolean, String],
				default: true
			},
			color: {
				// 星星的颜色
				type: String,
				default: '#ececec'
			},
			activeColor: {
				// 星星选中状态颜色
				type: String,
				default: '#F73636'
			},
			size: {
				// 星星的大小
				type: [Number, String],
				default: 24
			},
			value: {
				// 当前评分
				type: [Number, String],
				default: 0
			},
			max: {
				// 最大评分
				type: [Number, String],
				default: 5
			},
			margin: {
				// 星星的间距
				type: [Number, String],
				default: 0
			},
			disabled: {
				// 是否可点击
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			return {
				valueSync: ''
			}
		},
		computed: {
			stars() {
				const value = Number(this.valueSync) ? Number(this.valueSync) : 0
				const starList = []
				const floorValue = Math.floor(value)
				const ceilValue = Math.ceil(value)
				for (let i = 0; i < this.max; i++) {
					if (floorValue > i) {
						starList.push({
							activeWitch: '100%'
						})
					} else if (ceilValue - 1 === i) {
						starList.push({
							activeWitch: (value - floorValue) * 100 + '%'
						})
					} else {
						starList.push({
							activeWitch: '0'
						})
					}
				}
				return starList
			}
		},
		created() {
			this.valueSync = this.value
		},
		methods: {
			_onClick(index) {
				if (this.disabled) {
					return
				}
				this.valueSync = index + 1
				this.$emit('change', {
					value: this.valueSync
				})
			}
		}
	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background: #fff;
		// position: fixed;
		// top:0;

	}

	* {
		margin: 0;
		padding: 0;
	}

	.uni-rate {
		line-height: 0;
		font-size: 0;
		display: flex;
		flex-direction: row;

		&-icon {
			position: relative;
			line-height: 0;
			font-size: 0;
			display: inline-block;

			&-on {
				line-height: 1;
				position: absolute;
				top: 0;
				left: 0;
				overflow: hidden;
			}
		}
	}
</style>
