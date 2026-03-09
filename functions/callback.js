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
      client_id: context.env.GITHUB_CLIENT_ID,
      client_secret: context.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  })

  const data = await res.json()
  const token = data.access_token

  const html = `
    <script>
      window.opener.postMessage(
        'authorization:github:success:${JSON.stringify({ token, provider: 'github' })}',
        '*'
      )
      window.close()
    </script>
  `
  return new Response(html, { headers: { 'Content-Type': 'text/html' } })
}
