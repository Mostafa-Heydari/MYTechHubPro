---
title: "Contact"
---
<p>Use the form to contact us.</p>
<form action="{{ .Site.Params.formspree }}" method="POST"><input name="name"><input name="_replyto"><textarea name="message"></textarea><button type="submit">Send</button></form>
