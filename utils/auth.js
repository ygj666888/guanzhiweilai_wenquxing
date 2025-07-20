// 全局登录状态管理工具
export default {
	// 检查登录状态和30天免登录
	checkLoginStatus() {
		const token = uni.getStorageSync('token')
		const savedUserInfo = uni.getStorageSync('userInfo')
		const loginTime = uni.getStorageSync('loginTime')
		
		console.log('Auth工具 - 检查登录状态:', {
			token: !!token,
			userInfo: !!savedUserInfo,
			loginTime: loginTime,
			currentTime: Date.now()
		})
		
		// 检查是否有登录信息
		if (token && savedUserInfo && loginTime) {
			const currentTime = Date.now()
			const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000 // 30天的毫秒数
			
			// 检查是否在30天内
			if (currentTime - loginTime < thirtyDaysInMs) {
				// 30天内，自动登录
				console.log('Auth工具 - 登录有效，用户信息:', savedUserInfo)
				return {
					isLoggedIn: true,
					userInfo: savedUserInfo
				}
			} else {
				// 超过30天，清除登录信息
				console.log('Auth工具 - 登录已过期，清除数据')
				this.clearLoginData()
				return {
					isLoggedIn: false,
					userInfo: null
				}
			}
		} else {
			// 没有登录信息，设置为未登录状态
			console.log('Auth工具 - 未登录状态')
			return {
				isLoggedIn: false,
				userInfo: null
			}
		}
	},
	
	// 清除登录数据
	clearLoginData() {
		uni.removeStorageSync('token')
		uni.removeStorageSync('userInfo')
		uni.removeStorageSync('loginTime')
		uni.removeStorageSync('userAvatar')
		uni.removeStorageSync('phoneBound')
		uni.removeStorageSync('loginStatusUpdated')
	},
	
	// 设置登录状态更新标记
	setLoginStatusUpdated() {
		uni.setStorageSync('loginStatusUpdated', Date.now())
	},
	
	// 检查并清除登录状态更新标记
	checkAndClearLoginStatusUpdated() {
		const loginStatusUpdated = uni.getStorageSync('loginStatusUpdated')
		if (loginStatusUpdated) {
			console.log('Auth工具 - 检测到登录状态更新标记')
			uni.removeStorageSync('loginStatusUpdated')
			return true
		}
		return false
	}
} 