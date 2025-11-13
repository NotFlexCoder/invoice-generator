export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json")
  const params = req.query
  if (Object.keys(params).length > 0) {
    const query = new URLSearchParams(params).toString()
    const apiUrl = `https://invoice-generator-api-phi.vercel.app/?${query}`
    const response = await fetch(apiUrl)
    const data = await response.text()
    res.status(200).json({ response: data })
  } else {
    res.status(400).json({ error: "No parameters provided" })
  }
}
