<template>
	<view>
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		        </view>
		
		<view class="title" >
			<view style="display: flex;align-items: center;justify-content: space-between;padding: 49upx  49upx  39upx  49upx; ">
				<view style="">
					<view style="font-size: 32upx;color: #fff;">
						啦啦啦的汉服小店
					</view>
					<view style="font-size: 24upx;color: #fff; margin-top: 10upx;">
						粉丝数 12345
					</view>
				</view>
				<view style="font-size: 24upx;color: #fff; width: 124upx;height: 48upx;border:1upx solid #fff;border-radius: 40upx;display: flex;align-items: center;
				justify-content: center;">已关注</view>
			</view>
			<view style="display: flex;">
				<view style="margin-left: 20upx;">
					<view style="width: 220upx;height: 60upx;display: flex;align-items: center;justify-content: center;border-radius:40upx;" class="sss">
						<image src="../../static/img/sousuo_1.png" style="width: 40upx;height: 40upx;"></image>
						<view style="color: #fff;display: flex;align-items: center;justify-content: center;font-size: 22upx;margin-left: 10upx;">搜索商品</view>
					</view>
				</view>
				<view style="display: flex;align-items: center;margin-left: 70upx;margin-top: 17upx;">
					<view style="color: #fff;font-size: 23upx;margin-right: 62upx;padding-bottom: 5upx;" class="borde"> 
						首页
					</view>
					<view style="color: #fff;font-size: 23upx;margin-right: 62upx;padding-bottom: 5upx;">
						宝贝
					</view>
					<view style="color: #fff;font-size: 23upx;margin-right: 62upx;padding-bottom: 5upx;">
						活动
					</view>
					<view style="color: #fff;font-size: 23upx;padding-bottom: 5upx;">
						买家秀
					</view>
				</view>
			</view>
			
			
		</view>
		<view style="font-size: 24upx; color: #666;padding: 67upx 26upx 0 20upx;text-align: justify;">
			Nunc ut sem id urna aliquet vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vel fringilla lacus, efficitur ultricies quam. Fusce finibus eu nibh sit amet efficitur. Etiam efficitur sed erat vel vulputate. Sed eget augue vestibulum, ornare eros non, suscipit justo. Morbi ac odio cursus, rhoncus dui et, facilisis odio.
			
			ut sem id urna aliquet vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vel fringilla lacus, efficitur ultricies quam. Fusce finibus eu nibh sit amet efficitur. Etiam efficitur sed erat vel vulputate. Sed eget augue vestibulum, ornare eros non, suscipit justo. Morbi ac odio cursus, rhoncus dui et, facilisis odio.
			                        
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

<style>
	.borde{
		border-bottom: 1upx solid #fff;
		
	}
	.sss{
		/* background:#66686E; */
		
		background: rgba(102 ,104 ,110,0.8);
	}
.status_bar {
	        height: var(--status-bar-height);
	        width: 100%;
			background: #fff;
			
			
	    }
.title{
	width: 100%;
	height: 262upx;
	
		background-size: 100% ; 
		background-repeat: no-repeat; 
		background-image: url(../../static/img/xing.png); 
	
}
</style>
