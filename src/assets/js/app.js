//ancors
$(document).ready(function() {

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

});

// calc

$(() => {

  let $moneyBlock = $('.js-range-value'),
    $moneyRefundBlock = $('.js-refund'),
    $moneyDiscondBlock = $('.js-discount'),
    $moneySumDiscondBlock = $('.js-sum-discount'),
    $dayPercentBlock = $('.js-day-percent'),
    $hiddenInput = $('.js-hidden-value'),
    $dateBlock = $('.js-date'),
    $timeBlock = $('.js-range-time'),
    $day_ref = $('.js-decl-days'),
    $moneyRange = $('.js-range-slider-money'),
    $timeRange = $('.js-range-slider-time'),
    fullDate = new Date(),
    twoDigitMonth = ((fullDate.getMonth().toString().length) == 1) ? '0' + (fullDate.getMonth() + 1) : (fullDate.getMonth() + 1),
    twoDigitDate = ((fullDate.getDate().toString().length) == 1) ? '0' + (fullDate.getDate()) : (fullDate.getDate()),
    currentDate = twoDigitDate + "." + twoDigitMonth + "." + fullDate.getFullYear(),
    dayVal;

  function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 4 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }

  $dateBlock.html(currentDate)


  $moneyRange.ionRangeSlider({
    skin: "round",
    min: 500,
    max: 50000,
    from: 15000,
    step: 500,
    force_edges: true,
    prettify_enabled: false,
    hide_from_to: true,
    hide_min_max: true,
    onStart: function(data) {
      $hiddenInput.val(data.from)
    },
    onChange: function (data) {
      $hiddenInput.val(data.from)
      $moneyBlock.text(data.from + ' ₽');
      $moneyRefundBlock.text(data.from * 101 / 100 + ' ₽');
      $moneyDiscondBlock.text(Math.round((data.from * 101 / 100) * 0.007) + ' ₽');
      $moneySumDiscondBlock.text((data.from * 101 / 100) - Math.round((data.from * 101 / 100) * 0.007) + ' ₽');
    }
  });


  $timeRange.ionRangeSlider({
    skin: "round",
    min: 1,
    max: 30,
    from: 10,
    step: 1,
    force_edges: true,
    prettify_enabled: false,
    hide_from_to: true,
    hide_min_max: true,
    onChange: function (data) {
      let
      fullDate = new Date();
      fullDate.setDate(fullDate.getDate() + data.from)
      let
        twoDigitMonth = ((fullDate.getMonth().toString().length) == 1) ? '0' + (fullDate.getMonth() + 1) : (fullDate.getMonth() + 1),
        twoDigitDate = ((fullDate.getDate().toString().length) == 1) ? '0' + (fullDate.getDate()) : (fullDate.getDate()),
        currentDate = twoDigitDate + "." + twoDigitMonth + "." + fullDate.getFullYear();
      $dateBlock.html(currentDate)
      // let
      //   x = parseFloat($moneyBlock.text()),
      //   i = data.from,
      //
      //   j = (x * (100 + i)) / 100,
      //   s = j - Math.round(j * 0.007);
      //y = Math.round(j * 0.007);

      //$moneyRefundBlock.text((data.from + 4) * 101 / 100 + ' ₽');
      //$moneyDiscondBlock.text(Math.round((data.from * 101 / 100) * 0.007) + ' ₽');
      // $moneyDiscondBlock.text(y + ' ₽');

      //$moneySumDiscondBlock.text(s + ' ₽');

      $timeBlock.text(data.from);
      dayVal = declOfNum(data.from, ['день', 'дня', 'дней'])
      $day_ref.text(dayVal)
      console.log(m)
      let m = parseFloat($hiddenInput.val())
      let r = Math.round( parseFloat($hiddenInput.val())+ (data.from * parseFloat($hiddenInput.val()) / 100))
      $moneyRefundBlock.text(r + ' ₽');

    }
  });


});

