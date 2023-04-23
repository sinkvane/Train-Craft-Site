import $ from 'jquery';
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

// Скрываем меню при клике на ссылку
document.addEventListener('click', function (e) {
  if (e.target.className === 'burger__link') {
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

  peopleList();


  $('.team__load').click(function () {
    $(this).parent('.team__inner').find('.team__partners.active').next('.team__partners').removeClass('hide')
    $(this).parent('.team__inner').find('.team__partners.active').next('.team__partners').addClass('active')
    if ($(this).parent('.team__inner').find('.team__partners.hide').length <= 0) {
      $(this).parent('.team__inner').find('.team__hide').removeClass('hide')
      $(this).addClass('hide')
    }
  })
  $('.team__hide').click(function () {
    $(this).parent('.team__inner').find('.team__partners.active').addClass('hide')
    $(this).parent('.team__inner').find('.team__partners.active').removeClass('active')
    $(this).parent('.team__inner').find('.team__partners.show').removeClass('hide')
    $(this).parent('.team__inner').find('.team__partners.show').addClass('active')
    $(this).addClass('hide')
    $(this).parent('.team__inner').find('.team__load').removeClass('hide')
  })


  var par1 = $('.main__bg--car')
  var par2 = $('.develop__block-img')


  window.addEventListener('mousemove', cursor)
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

google.charts.load("current", {
  packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Name', 'Percentage'],
    ['Liquidity Pool: 5%', 5],
    ['Game & Staking Rewards: 31%', 31],
    ['Marketing & Community: 10%', 10],
    ['Advisors: 2%', 2],
    ['Private Rounds: 15%', 15],
    ['Team: 15%', 15],
    ['Public Round: 2%', 2],
    ['Ecosystem & Treasury: 20%', 20]
  ]);

  var legendPosition = 'labeled';
  var fontSize = 12;

  if ($(window).width() < 400) {
    legendPosition = 'labeled';
    fontSize = 14;
  }

  var options = {
    pieHole: 0.55,
    backgroundColor: 'none',
    chartArea: {
      left: 0,
      top: 20,
      width: '100%',
      height: '100%'
    },
    colors: ['#C38946', '#906531', '#9C7A50', '#826D60', '#4E2C16', '#5B3D29', '#674C3B', '#765E4E',],
    fontSize: fontSize,
    fontName: 'Poppins',
    legend: {
      alignment: 'center',
      textStyle: {
        color: 'white',
        fontSize: fontSize,
        bold: false,
      },
      position: legendPosition,
      labeledValueText: 'none'
    },
    pieSliceBorderColor: 'none',
    pieSliceText: 'none',
    tooltip: {
      textStyle: {
        color: '#1E0E62',
        fontSize: fontSize,
        bold: false
      },
      trigger: 'none'
    }

  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}


function peopleList() {
  $('.people').each(function () {
    var hold = $(this);
    var link = hold.find('.load-more').find('.btn');

    var _check = function () {
      if (hold.find('.el.folded').length) {
        hold.addClass('hasFolded');
      } else {
        hold.removeClass('hasFolded');
      }
    };

    _check();
  });

  var _more = function () {
    $('.people').find('.el').each(function () {
      var hold = $(this);
      var link = hold.find('.link-more');
      var wrap = hold.find('.descr');
      var text = hold.find('.descr-inner');
      var num = '4.8em';

      if (text.outerHeight() > wrap.outerHeight()) {
        hold.addClass('hasMore');
      }

      link.on('click', function () {
        var h = wrap.outerHeight();
        var h2 = text.outerHeight();

        if (hold.hasClass('open')) {
          wrap.animate({
            height: num
          }, function () {
            hold.removeClass('open');
            wrap.css('height', num);
          });
        } else {
          wrap.animate({
            height: h2
          }, function () {
            hold.addClass('open');
            wrap.css('height', 'auto');
          });
        }
      });
    });
  };

  _more();
}