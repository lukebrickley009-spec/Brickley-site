/* Brickley Automations — shared scripts
   The free website review form has no backend yet: on submit it composes a
   pre-filled email to lukebrickley009@gmail.com via the visitor's mail app.
   Replace this with a real form endpoint (Formspree / Netlify Forms / custom)
   when ready — swap the <form> action and remove this handler. */
(function () {
  var form = document.getElementById('reviewForm');
  if (!form) return;
  var status = document.getElementById('formStatus');

  function val(id) {
    var el = document.getElementById(id);
    return el ? (el.value || '').trim() : '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = val('name');
    var email = val('email');
    var business = val('business');
    var website = val('website');
    var goal = val('goal');
    var help = val('help');

    if (!name || !email) {
      if (status) status.textContent = 'Please add your name and email so I can reply.';
      return;
    }

    var subject = 'Website review request — ' + (business || name);
    var body =
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Business: ' + (business || '—') + '\n' +
      'Website: ' + (website || '—') + '\n' +
      'Goal: ' + (goal || '—') + '\n\n' +
      'What they want help with:\n' + (help || '—');

    window.location.href =
      'mailto:lukebrickley009@gmail.com' +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    if (status) {
      status.textContent = 'Opening your email app… if nothing happens, email lukebrickley009@gmail.com directly.';
    }
  });
})();
