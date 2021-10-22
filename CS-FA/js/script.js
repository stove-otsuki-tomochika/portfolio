'use strict'
// メディアクエリ文字列
const mediaQuery = window.matchMedia("(max-width: 900px)");

// dom要素
const topImagesWrap   = document.getElementById('top-images-wrap');
const infoSection     = document.getElementById('info-section');
const accessSection   = document.getElementById('access-section');
const sideLinkButtons = document.getElementById('side-link-buttons-wrap');
const mainH1          = document.getElementById('main-h1');
const accessBGrgba    = document.getElementById('access-bg-rgba');

const galleryH2       = document.getElementById('gallery-h2');

const fixedTop      = document.getElementById('fixed-top');
const hamburgerMenu = document.getElementById('hamburger-menu');

// dom要素の配列
const galleryImgWraps = document.querySelectorAll('.gallery-img-wrap');
const topMenuLis      = document.querySelectorAll('.top-menu-li')

// スクロールイベント
window.addEventListener('scroll',() => {
	const offsetYTop    = window.pageYOffset; // スクロール量 ページ全体のトップに対して、ビューポートトップの相対位置
	const offsetYBottom = window.pageYOffset + window.innerHeight; // ページ全体のトップに対して、ビューポートボトムの相対位置

	// 各要素の位置 topやbottom
	const mainH1Top = mainH1.getBoundingClientRect().top + offsetYTop; // 表示中の領域のtopからみたインフォメーションsectionのtop相対位置
	const galleryH2Top = galleryH2.getBoundingClientRect().top + offsetYTop; // 表示中の領域のtopからみたインフォメーションsectionのtop相対位置
	const infoSectionTop = infoSection.getBoundingClientRect().top + offsetYTop; // 表示中の領域のtopからみたインフォメーションsectionのtop相対位置
	const accessSectionTop = accessSection.getBoundingClientRect().top + offsetYTop; // 表示中の領域のtopからみたアクセスsectionのtop相対位置

	const accessSectionBottom = accessSection.getBoundingClientRect().bottom + offsetYTop; // 表示中の領域のtopからみたアクセスsectionのtop相対位置

	// スクロール量が520pxを超えるとロゴ、ハンバーガーメニューを表示
	if( offsetYTop >= 520 ){
		fixedTop.classList.add('show-fixed-top');
	} else {
		fixedTop.classList.remove('show-fixed-top')
	}

	// 画面上部がinfoSectionの上部と重なると画面横のボタンを表示 画面下部がaccessSectionの上部と重なると非表示
	if( offsetYTop >= infoSectionTop && offsetYBottom <= accessSectionTop ){
		sideLinkButtons.style = 'transform: rotate(-90deg) translateY(-100%);'
	} else {
		sideLinkButtons.style = 'transform: rotate(-90deg) translateY(0%);'
	}

	// mainH1,infoSectionおよびgalleryH2を下から浮き上がるように表示
	if( offsetYBottom >= mainH1Top ){
		mainH1.classList.add('rise-anime');
	}
	if( offsetYBottom >= infoSectionTop){
		infoSection.classList.add('rise-anime');
	}
	if( offsetYBottom >= galleryH2Top ){
		galleryH2.classList.add('rise-anime');
	}

	// galleryImgを下から浮き上がるように表示
	for(let i = 0; i <= galleryImgWraps.length - 1; i++){
		if(offsetYTop >= galleryImgWraps[i].getBoundingClientRect().top + offsetYTop/2){ // 要素が画面中央に来るとアニメーション
			galleryImgWraps[i].classList.add('rise-anime');
		}
	}

	// ページのボトムがaccessSectionと重なっている間は背景を変更
	if( offsetYBottom >= accessSectionTop && offsetYBottom <= accessSectionBottom){
		accessBGrgba.classList.add('access-bg-rgba-show');
	} else {
		accessBGrgba.classList.remove('access-bg-rgba-show');
	}

	// pcとスマホで切り替えが必要な処理
	if(mediaQuery.matches){
		// メインビジュアルをスクロール量に合わせて拡大
		topImagesWrap.style = `transform: scale( ${350 - (offsetYTop / 3)}% );`;
	} else {
		// メインビジュアルをスクロール量に合わせて縮小
		topImagesWrap.style = `transform: scale( ${100 + (offsetYTop / 3)}% );`;
	}

})

// サイドメニューの開閉
const sideMenuOpen = () => {
		if(fixedTop.classList.contains('hamburger-active') === false)
	{
		fixedTop.classList.add('hamburger-active');
	} else {
		fixedTop.classList.remove('hamburger-active');
	}
}
// ハンバーガーメニューのクリックイベント sideMenuOpen
hamburgerMenu.addEventListener('click',sideMenuOpen)

// サイドメニューのaを押すとsideMenuOpen
for(let i = 0; i <= topMenuLis.length - 1; i++){
	topMenuLis[i].addEventListener('click',sideMenuOpen)
}

// ブレークポイントで表示が切り替わった時の処理
mediaQuery.addEventListener('change',() => {
	const offsetYTop    = window.pageYOffset; // スクロール量 ページ全体のトップに対して、ビューポートトップの相対位置
	if(mediaQuery.matches){
		// メインビジュアルをスクロール量に合わせて縮小
			topImagesWrap.style = `transform: scale( ${350 - (offsetYTop / 3)}% );`;
	} else {
		// メインビジュアルをスクロール量に合わせて拡大
			topImagesWrap.style = `transform: scale( ${100 + (offsetYTop / 3)}% );`;
	}
})