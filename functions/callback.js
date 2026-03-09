export async function onRequest(context) {
  const url = new URL(context.request.url)
  const code = url.searchParams.get('code')
  const clientSecret = context.env.GITHUB_CLIENT_SECRET

  if (!clientSecret) {
    return new Response('Error: GITHUB_CLIENT_SECRET is not set in environment variables.', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    })
  }

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: context.env.GITHUB_CLIENT_ID || 'Ov23lits6BN4XCcaxaU8',
      client_secret: clientSecret,
      code,
    }),
  })

  const data = await res.json()

  if (!data.access_token) {
    return new Response('Error: GitHub token exchange failed. Response: ' + JSON.stringify(data), {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    })
  }

  const token = data.access_token
  const message = 'authorization:github:success:' + JSON.stringify({ token, provider: 'github' })

  const html = `<!DOCTYPE html>
<html>
<body>
<script>
  var msg = ${JSON.stringify(message)};
  if (window.opener) {
    window.opener.postMessage(msg, '*');
    setTimeout(function(){ window.close(); }, 1000);
  } else {
    document.body.innerText = 'Authorization complete. You may close this window.';
  }
</script>
</body>
</html>`

  return new Response(html, { headers: { 'Content-Type': 'text/html' } })
}
