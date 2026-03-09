export async function onRequest(context) {
  const url = new URL(context.request.url)
  const code = url.searchParams.get('code')

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: context.env.GITHUB_CLIENT_ID || 'Ov23lits6BN4XCcaxaU8',
      client_secret: context.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  })

  const data = await res.json()
  const token = data.access_token
  const message = 'authorization:github:success:' + JSON.stringify({ token, provider: 'github' })

  const html = `<!DOCTYPE html>
<html>
<body>
<script>
  (function() {
    var message = ${JSON.stringify(message)};
    if (window.opener) {
      window.opener.postMessage(message, '*');
      setTimeout(function() { window.close(); }, 500);
    } else {
      document.body.innerText = '授權完成，請關閉此視窗。';
    }
  })();
</script>
</body>
</html>`

  return new Response(html, { headers: { 'Content-Type': 'text/html' } })
}
