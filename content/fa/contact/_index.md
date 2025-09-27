---
title: "تماس"
---
<p>برای درخواست مشاوره فرم را تکمیل کنید یا ایمیل بزنید.</p>
<form action="{{ .Site.Params.formspree }}" method="POST">
  <input type="text" name="name" placeholder="نام" required>
  <input type="email" name="_replyto" placeholder="ایمیل" required>
  <textarea name="message" rows="6" placeholder="پیام"></textarea>
  <button type="submit">ارسال</button>
</form>
