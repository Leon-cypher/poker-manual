export async function onRequest(context) {
  const clientId = context.env.GITHUB_CLIENT_ID || 'Ov23lits6BN4XCcaxaU8'
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`

  const html = `<!DOCTYPE html>
<html>
<body>
<script>
  window.location.href = ${JSON.stringify(authUrl)};
</script>
</body>
</html>`

  return new Response(html, { headers: { 'Content-Type': 'text/html' } })
}
