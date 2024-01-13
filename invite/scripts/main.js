// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function() {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library
});

$("#sms_submit,#whatsapp_submit").click(function(event) {
  var nameRSVP = '';
  var attendanceRSVP = '';
  var rsvpTo = '';
  if ($('#name-input').val() != '') {
    nameRSVP = $('#name-input').val();
    $('label[for="name-input"]').html('Name *');
    $('label[for="name-input"]').css('color','#FFFFFF');

    if ($('#guest-input').val() != '') {
      attendanceRSVP = $('#guest-input').val();
      $('label[for="guest-input"]').html('Attendance *');
      $('label[for="guest-input"]').css('color','#FFFFFF');

      if ($('#rsvp-input').val() != '') {
        rsvpTo = $('#rsvp-input').val();
        $('label[for="rsvp-input"]').html('RSVP to *');
        $('label[for="rsvp-input"]').css('color','#FFFFFF');

        event.preventDefault();
        if (this.id == 'sms_submit') {
          if (rsvpTo == 'Ruan') {
            window.open("sms:+27825564267&body=RSVP: "+nameRSVP+", "+attendanceRSVP);
          } else {
            window.open("sms:+27783104029&body=RSVP: "+nameRSVP+", "+attendanceRSVP);
          }
        } else {
          if (rsvpTo == 'Ruan') {
            window.open("https://wa.me/+27825564267?text=RSVP: "+nameRSVP+", "+attendanceRSVP);
          } else {
            window.open("https://wa.me/+27783104029?text=RSVP: "+nameRSVP+", "+attendanceRSVP);
          }
        }
      } else {
        $('#rsvp-input').select();
        $('label[for="rsvp-input"]').html('RSVP to required *');
        $('label[for="rsvp-input"]').css('color','red');
      }
    } else {
      $('#guest-input').select();
      $('label[for="guest-input"]').html('Attendance required *');
      $('label[for="guest-input"]').css('color','red');
    }
  } else {
    $('#name-input').select();
    $('label[for="name-input"]').html('Name required *');
    $('label[for="name-input"]').css('color','red');
  }
});

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000,
        function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        }
      );
    }
  }
});

// Photo Filter
var activeFilter = "all";

$(".ww-filter-button").on("click", function(e) {
  // remove btn-primary from all buttons first
  $(".ww-filter-button").removeClass("btn-primary");
  $(".ww-filter-button").addClass("btn-outline-primary");

  // add btn-primary to active button
  var button = $(this);
  button.removeClass("btn-outline-primary");
  button.addClass("btn-primary");
  filterItems(button.data("filter"));
  e.preventDefault();
});

function filterItems(filter) {
  if (filter === activeFilter) {
    return;
  }

  activeFilter = filter;
  $(".ww-gallery .card").each(function() {
    var card = $(this);
    var groups = card.data("groups");
    var show = false;
    if (filter === "all") {
      show = true;
    } else {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i] === filter) {
          show = true;
        }
      }
    }
    // hide everything first
    card.fadeOut(400);
    setTimeout(function() {
      if (show && !card.is(":visible")) {
        card.fadeIn(400);
      }
    }, 500);
  });
}

// Light Box
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
