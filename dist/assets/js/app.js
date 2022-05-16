"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//ancors
$(document).ready(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}); // calc

$(function () {
  var $moneyBlock = $('.js-range-value'),
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
      twoDigitMonth = fullDate.getMonth().toString().length == 1 ? '0' + (fullDate.getMonth() + 1) : fullDate.getMonth() + 1,
      twoDigitDate = fullDate.getDate().toString().length == 1 ? '0' + fullDate.getDate() : fullDate.getDate(),
      currentDate = twoDigitDate + "." + twoDigitMonth + "." + fullDate.getFullYear(),
      dayVal;

  function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;

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

  $dateBlock.html(currentDate);
  $moneyRange.ionRangeSlider({
    skin: "round",
    min: 500,
    max: 50000,
    from: 15000,
    step: 500,
    force_edges: true,
    hide_min_max: true,
    onStart: function onStart(data) {
      $hiddenInput.val(data.from);
    },
    onChange: function onChange(data) {
      $hiddenInput.val(data.from);
      $moneyBlock.text(data.from + ' ₽');
      $moneyRefundBlock.text(data.from * 101 / 100 + ' ₽');
      $moneyDiscondBlock.text(Math.round(data.from * 101 / 100 * 0.007) + ' ₽');
      $moneySumDiscondBlock.text(data.from * 101 / 100 - Math.round(data.from * 101 / 100 * 0.007) + ' ₽');
    }
  });
  $timeRange.ionRangeSlider({
    skin: "round",
    min: 1,
    max: 30,
    from: 10,
    step: 1,
    postfix: " дней",
    force_edges: true,
    prettify_enabled: false,
    hide_min_max: true,
    onChange: function onChange(data) {
      var fullDate = new Date();
      fullDate.setDate(fullDate.getDate() + data.from);
      var twoDigitMonth = fullDate.getMonth().toString().length == 1 ? '0' + (fullDate.getMonth() + 1) : fullDate.getMonth() + 1,
          twoDigitDate = fullDate.getDate().toString().length == 1 ? '0' + fullDate.getDate() : fullDate.getDate(),
          currentDate = twoDigitDate + "." + twoDigitMonth + "." + fullDate.getFullYear();
      $dateBlock.html(currentDate); // let
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
      dayVal = declOfNum(data.from, ['день', 'дня', 'дней']);
      $day_ref.text(dayVal);
      console.log(m);
      var m = parseFloat($hiddenInput.val());
      var r = Math.round(parseFloat($hiddenInput.val()) + data.from * parseFloat($hiddenInput.val()) / 100);
      $moneyRefundBlock.text(r + ' ₽');
    }
  });
}); //masked inputs

Inputmask({
  "mask": "+7 (999) 999-99-99"
}).mask('.phone-mask');