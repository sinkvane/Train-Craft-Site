import $, { nodeName } from 'jquery';
// import Highcharts from 'highcharts';
import gallery from 'fslightbox';

// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

let burgerNav = document.querySelector('.burger__toggle');
let burgerLabel = document.querySelector('.burger__label');
let inputToggler = document.getElementById('burger');
console.log(inputToggler);

// Скрываем меню при клике на ссылку
document.addEventListener('click', function(e) {
  if(e.target.className === 'burger__link') {
    e.preventDefault(); // Отменяем переход по ссылке
    burgerNav.classList.add('burger__nav');
    inputToggler.checked = false;
  }
});

// Убираем класс для скрытия меню
burgerLabel.addEventListener('click', function () {
  if (burgerNav.classList.contains('burger__nav')) {
    burgerNav.classList.remove('burger__nav');
  }
});


$(document).ready(function () {
    $('.team__load').click(function() {
        $(this).parent('.team__inner').find('.team__partners.active').next('.team__partners').removeClass('hide')
        $(this).parent('.team__inner').find('.team__partners.active').next('.team__partners').addClass('active')
        if ($(this).parent('.team__inner').find('.team__partners.hide').length <= 0) {
            $(this).parent('.team__inner').find('.team__hide').removeClass('hide')
            $(this).addClass('hide')
        }
    })
    $('.team__hide').click(function() {
        $(this).parent('.team__inner').find('.team__partners.active').addClass('hide')
        $(this).parent('.team__inner').find('.team__partners.active').removeClass('active')
        $(this).parent('.team__inner').find('.team__partners.show').removeClass('hide')
        $(this).parent('.team__inner').find('.team__partners.show').addClass('active')
        $(this).addClass('hide')
        $(this).parent('.team__inner').find('.team__load').removeClass('hide')
    })


    var par1 = $('.main__bg--car')
    var par2 = $('.develop__block-img')


	window.addEventListener('mousemove',cursor)
	// window.addEventListener('scroll',cursort)

	function cursor(e) {
		// console.log(e);
		// mouseCursor.style.top = e.pageY + 'px';
		// mouseCursor.style.left = e.pageX + 'px';
		// mouseCursor.css("top", e.clientY)
        // var trx = par1.offset().left
        // console.log(trx)
        var x1 = e.clientX / 8
        var x2 = e.clientX / 100
		par1.css("left", x1)
		par2.css("right", x2)
		// console.log(e.clientX)
		// console.log(e.clientY)
	}
});

// Highcharts.chart('container', {
//   chart: {
//     type: 'pie',
//   },
//   credits: { enabled: false },
//   title: {
//     text: null
//   },
//   tooltip: {
//     headerFormat: '',
//     pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' + '{point.name}<b><br/>' + ': <b>{point.z}</b><br/>',
//     crookDistance: '10%',
//   },
//   series: [{
//     minPointLength: 5,
//     strokeWidth: '0',
//     innerSize: '60%',
//     dataLabels: {
//       formatter: function () {
//         return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
//         this.y + '%' : null;
//       },
//       connectorWidth: 1,
//       connectorColor: '#8D8D8D',
//       distance: 10,
//     },
//     name: 'pointers',
//     data: [{

//       name: 'Liquidity Pool',
//       color: '#C38946',
//       y: 5,
//       z: 5
//     }, {
//       name: 'Game & Staking Rewards',
//       color: '#906531',
//       y: 31,
//       z: 31
//     }, {
//       name: 'Marketing & Community',
//       color: '#9C7A50',
//       y: 10,
//       z: 10
//     }, {
//       name: 'Advisors',
//       color: '#826D60',
//       y: 2,
//       z: 2
//     }, {
//       name: 'Private Rounds',
//       color: '#4E2C16',
//       y: 15,
//       z: 15
//     }, {
//       name: 'Team: 15%',
//       color: '#5B3D29',
//       y: 15,
//       z: 15
//     }, {
//       name: 'Public Round',
//       color: '#674C3B',
//       y: 2,
//       z: 2
//     },
//     {
//       name: 'Ecosystem & Treasury',
//       color: '#765E4E',
//       y: 20,
//       z: 20

//     }]
//   }],
//   responsive: {
//     rules: [{
//       condition: {
//         minWidth: 200,
//         size: '10%'
//       }
//     }]
//   }
// });