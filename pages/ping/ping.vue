<template>
	<view>
		<view style="padding: 20upx;">
			<view style="padding-left: 15upx; display: flex;align-items: center;border:1px solid #ccc;height: 60upx;border-radius:30upx;">
				<image src="../../static/img/sousuo_1.png" style="width: 41upx;height: 41upx;"></image>
				<input type="text" placeholder="请输入您要搜索的关键词" >
			</view>
		</view>
		<view style="display: flex;align-items: center;flex-wrap: wrap;padding: 0 25upx;justify-content: space-between;border-bottom: 1upx solid #eee;">
			<view class="zhong active">
				中评(100)
			</view>
			<view class="zhong ">
				中评(100)
			</view>
			<view class="zhong">
				中评(100)
			</view>
			<view class="zhong">
				中评(100)
			</view>
			<view class="zhong">
				中评(100)
			</view>			
		</view>
		<!-- 评论 -->
		<view style="border-bottom:1px solid #eee;padding-bottom: 50upx;">
			<view style="padding: 38upx 24upx 0 25upx;">
				<view style="display: flex;">
					<image src="../../static/img/1.jpg" style="width: 66upx;height: 66upx;border-radius: 50%;"></image>
					<view style="margin-left: 18upx;">
						<view style="display:flex;">
							<view style="color:#666666;font-size: 26upx;">神秘人</view>
							<view style="color:#999;font-size: 26upx;margin-left: 10upx;">2018.5.12</view>
						</view>
						<view style="color:#999;font-size: 23upx;">某某某款式，红色L码</view>
					</view>
				</view>
				<view style="line-height:40upx; font-size: 27upx;color:#666;margin-top: 22upx;padding-right: 30upx;">某某某款式，红色L码某某某款式，红色L码某某某款式，红色L码某某某款式，红色L码某某某款式，红色L码</view>
			    <view style="display: flex;align-items: center;flex-wrap: wrap;margin-top: 21upx;">
					<image src="../../static/img/2.jpg" style="width: 22%;height: 100upx;margin-right:3%;margin-bottom: 17upx;"></image>
					<image src="../../static/img/2.jpg" style="width: 22%;height: 100upx;margin-right:3%;margin-bottom: 17upx;"></image>
					<image src="../../static/img/2.jpg" style="width: 22%;height: 100upx;margin-right:3%;margin-bottom: 17upx;"></image>
					<image src="../../static/img/2.jpg" style="width: 22%;height: 100upx;margin-right:3%;margin-bottom: 17upx;"></image>
					<image src="../../static/img/2.jpg" style="width: 22%;height: 100upx;margin-right:3%;margin-bottom: 17upx;"></image>
				</view>
				<view style="color:#666;background: #F0F0F0;font-size: 26upx;padding: 26upx;margin-top: 30upx;">
					掌柜回复:感谢您的反馈  我们一直在努力给大家做最好
				</view>
			</view>
			
			
		</view>
		<view style="background: #E5E5E5;position: fixed;bottom: 100upx;width: 100%;">
			<view style="padding: 10upx;">
				<view style="background: #fff;height: 72upx;display: flex;align-items: center;padding-left: 20upx;border-radius: 10upx;">
					<input type="text" placeholder="输入您想说的...">
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	
	.zhong{
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20upx;
		width: 22%;
		height: 55upx;
		border-radius: 8upx;
		background: #F0F0F0;
		margin-bottom: 20upx;
		color:#666666;
	}
	.active{
		background: red;
		color:#fff;
	}
	
</style>
