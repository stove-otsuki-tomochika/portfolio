// スクロールボタンのイベント
const scrollButtonEvents = () => {
	const scrollTopButton = document.getElementById('scroll-top-button'); //スクロールボタン

	// クリック時画面トップまで移動
	scrollTopButton.addEventListener('click', () => {
		window.scrollTo({
			top:0,
			left:0,
			behavior:'smooth'
		})
	})
	
	// スクロール量が700px以上になるとボタンを表示、700px以下になると非表示
	window.addEventListener('scroll',() => {
		const offsetY = window.pageYOffset;
	
		if(offsetY <= 700){
			scrollTopButton.classList.remove('buttonShow')
			scrollTopButton.classList.add('buttonHide')
		} else {
			scrollTopButton.classList.remove('buttonHide')
			scrollTopButton.classList.add('buttonShow')
		}
	
	})
}
scrollButtonEvents();
// ハンバーガーメニューのイベント
const hamburger = document.getElementById('sp-hamburger');
const modal     = document.getElementById('res-modal');
const sideMenu  = document.getElementById('side-menu');

const modalOpen = () => {
	if(hamburger.className === 'hamburger-open'){
		hamburger.className = 'hamburger-open';
		hamburger.className = 'hamburger-close';
		
		modal.style = 'display: none;';
		sideMenu.style="left: -300px;"
	} else if(hamburger.className === 'hamburger-close'){
		hamburger.className = 'hamburger-close';
		hamburger.className = 'hamburger-open';
		
		modal.style = "display: block;";
		sideMenu.style = 'left: 0;';
	}
}

hamburger.addEventListener('click',() => {
	// hamburger.classListの初期値はhamburger-close
	modalOpen();
})

modal.addEventListener('click', () => {
	modalOpen();
})